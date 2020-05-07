import d3 from 'd3';
var node = document.createElement('div');

var width = 900,
    height = 400;

// One other parameter for our visualization determines how
// fast (or slow) the animation executes. It's a time value
// measured in milliseconds.

var animationStep = 400;

var force = null,
    nodes = null,
    links = null;

d3.select(node).attr("class", "container-fluid");
var node1 = d3.select(node).append("div").attr("class", "row");
var textarea = node1.append('div')
.attr("class", "col-sm-3 textarea")
.style("background-color", "#ccc")
.style("flex", "0 0 35%")
.style("max-width", "35%")
.style("height", "100vh")
.style("color", "black");



textarea
.append('div')
.attr("class", "fullname")
.style("font-size", "30px")
.append("text")
.attr("x", "100")
.attr("dy", "100")
.text(" ")
.style("fill-opacity", 1e-6);


textarea
.append('div')
.attr("class", "text")
.append("text")
.attr("x", "100")
.attr("dy", "100")
.text(" ")
.style("fill-opacity", 1e-6);

var svg = node1.append('svg')
    .attr("class", "col-sm-9")
    .style("flex", "0 0 60%")
    .attr('width', width)
    .attr('height', height);




// var textarea = d3.select(node).append('div').attr('class', 'textarea').text("aaa");


var initForce = function() {

    var w = width / 7;
    var h = height / 5;

//Engineering track
    //     var dataNodes = [
    //     { x: 3*w, y: 1*h, graph: "SDE", fullname: "Software Engineering", text: "SDE" },
    //     { x: 2*w, y: 2*h, graph: "INFO 206A", fullname: "Introduction to Programming and Computation", text: "This course introduces the basics of computer programming that are essential for those interested in computer science, data science, and information management. Students will write their own interactive programs (in Python) to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. "},
    //     { x: 4*w, y: 2*h, graph: "INFO 206B", fullname: "Introduction to Data Structures and Analytics", text: "This course introduces the core programming skills needed to develop information management applications.  Students learn to design algorithms and implement them using the Python programming language. Lessons progress rapidly from primitive objects to larger code structures including functions, modules, and classes. Students solve problems to gain confidence and understand the application of computer science principles. The course ends with a final project that emphasizes object-oriented design. "},
    //     { x: 1*w, y: 3*h, graph: "CS 61A", fullname: "The Structure and Interpretation of Computer Programs", text: "An introduction to programming and computer science focused on abstraction techniques as means to manage program complexity. Techniques include procedural abstraction; control abstraction using recursion, higher-order functions, generators, and streams; data abstraction using interfaces, objects, classes, and generic operators; and language abstraction using interpreters and macros. The course exposes students to programming paradigms, including functional, object-oriented, and declarative approaches. It includes an introduction to asymptotic analysis of algorithms. There are several significant programming projects." },
    //     { x: 2*w, y: 3*h, graph: "CS 61B", fullname: "Data Structures", text: "Fundamental dynamic data structures, including linear lists, queues, trees, and other linked structures; arrays strings, and hash tables. Storage management. Elementary principles of software engineering. Abstract data types. Algorithms for sorting and searching. Introduction to the Java programming language. " },
    //     { x: 3*w, y: 3*h, graph: "INFO 253A", fullname: "Front-End Web Architecture", text: "This course is a survey of technologies that power the user interfaces of web applications on a variety of devices today, including desktop, mobile, and tablet devices. This course will delve into some of the core Front-End languages and frameworks (HTML/CSS/JS/React/Redux), as well as the underlying technologies enable web applications (HTTP, URI, JSON). The goal of this course is to provide an overview of the technical issues surrounding user interfaces powered by the web today, and to provide a solid and comprehensive perspective of the Web's constantly evolving landscape." },
    //     { x: 4*w, y: 3*h, graph: "INFO 253B", fullname: "Back-End Web Architecture", text: "This course is a survey of web technologies that are used to build back-end systems that enable rich web applications. Utilizing technologies such as Python, Flask, Docker, RDBMS/NoSQL databases, and Spark, this class aims to cover the foundational concepts that drive the web today. This class focuses on building APIs using micro-services that power everything from content management systems to data engineering pipelines that provide insights by processing large amounts of data. The goal of this course is to provide an overview of the technical issues surrounding back-end systems today, and to provide a solid and comprehensive perspective of the web’s constantly evolving landscape." },
    //     { x: 5*w, y: 3*h, graph: "INFO 257", fullname: "Database Management", text: "Introduction to relational, hierarchical, network, and object-oriented database management systems. Database design concepts, query languages for database applications (such as SQL), concurrency control, recovery techniques, database security. Issues in the management of databases. Use of report writers, application generators, high-level interface generators. " },
    //     { x: 1*w, y: 4*h, graph: "INFO 251", fullname: "Applied Machine Learning", text: "Provides a theoretical and practical introduction to modern techniques in applied machine learning. Covers key concepts in supervised and unsupervised machine learning, including the design of machine learning experiments, algorithms for prediction and inference, optimization, and evaluation. Students will learn functional, procedural, and statistical programming techniques for working with real-world data." },
    //     { x: 2*w, y: 4*h, graph: "INFO 159", fullname: "Natural Language Processing", text: "This course introduces students to natural language processing and exposes them to the variety of methods available for reasoning about text in computational systems. NLP is deeply interdisciplinary, drawing on both linguistics and computer science, and helps drive much contemporary work in text analysis (as used in computational social science, the digital humanities, and computational journalism). We will focus on major algorithms used in NLP for various applications (part-of-speech tagging, parsing, coreference resolution, machine translation) and on the linguistic phenomena those algorithms attempt to model. Students will implement algorithms and create linguistically annotated data on which those algorithms depend. " },
    //     { x: 3*w, y: 4*h, graph: "EECS 289", fullname: "Introduction to Machine Learning", text: "This course provides an introduction to theoretical foundations, algorithms, and methodologies for machine learning, emphasizing the role of probability and optimization and exploring a variety of real-world applications. Students are expected to have a solid foundation in calculus and linear algebra as well as exposure to the basic tools of logic and probability, and should be familiar with at least one modern, high-level programming language. " },
    //     { x: 4*w, y: 4*h, graph: "EECS 170", fullname: "Efficient Algorithms and Intractable Problems", text: "Concept and basic techniques in the design and analysis of algorithms; models of computation; lower bounds; algorithms for optimum search trees, balanced trees and UNION-FIND algorithms; numerical and algebraic algorithms; combinatorial algorithms. Turing machines, how to count steps, deterministic and nondeterministic Turing machines, NP-completeness. Unsolvable and intractable problems. " },
    //     { x: 5*w, y: 4*h, graph: "EECS 280", fullname: "Computer Vision", text: "Paradigms for computational vision. Relation to human visual perception. Mathematical techniques for representing and reasoning, with curves, surfaces and volumes. Illumination and reflectance models. Color perception. Image segmentation and aggregation. Methods for bottom-up three dimensional shape recovery: Line drawing analysis, stereo, shading, motion, texture. Use of object models for prediction and recognition." },
    //     { x: 6*w, y: 4*h, graph: "EECS 161", fullname: "Computer Security", text: "Introduction to computer security. Cryptography, including encryption, authentication, hash functions, cryptographic protocols, and applications. Operating system security, access control. Network security, firewalls, viruses, and worms. Software security, defensive programming, and language-based security. Case studies from real-world systems. " }
    // ];

//PM track
        var dataNodes = [
        { x: 1*w, y: 1*h, graph: "PM", fullname: "Product Management", text: "pm" },
        { x: 1*w, y: 2*h, graph: "INFO 290M", fullname: "Lean and Agile Product Management", text: "This course is designed to give participants a practical overview of the modern lean/agile product management paradigm based on contemporary industry practice. We cover the complete lifecycle of product management, from discovering your customers and users through to sales, marketing and managing teams. We'll take an experimental approach throughout, showing how to minimize investment and output while maximizing the information we discover in order to support effective decision-making. During the course, we'll show how to apply the theory through hands-on collaborative problem-solving activities. There will also be guest lectures from industry experts."},
        { x: 2*w, y: 2*h, graph: "INFO 213", fullname: "User Interface Design and Development ", text: "Three hours of lecture per week. User interface design and human-computer interaction. Examination of alternative design. Tools and methods for design and development. Human computer interaction. Methods for measuring and evaluating interface quality."},
        { x: 3*w, y: 2*h, graph: "INFO 232", fullname: "Applied Behavioral Economics ", text: "Behavioral Economics is one important perspective on how information impacts human behavior. The goal of this class is to deploy a few important theories about the relationship between information and behavior, into practical settings — emphasizing the design of experiments that can now be incorporated into many 'applications' in day-to-day life. Truly 'smart systems' will have built into them precise, testable propositions about how human behavior can be modified by what the systems tell us and do for us. So let's design these experiments into our systems from the ground up! This class develops a theoretically informed, practical point of view on how to do that more effectively and with greater impact." },
        { x: 4*w, y: 2*h, graph: "INFO 271B", fullname: "Quantitative Research Methods for Information Systems and Management", text: "Introduction to many different types of quantitative research methods, with an emphasis on linking quantitative statistical techniques to real-world research methods. Introductory and intermediate topics include: defining research problems, theory testing, causal inference, probability and univariate statistics. Research design and methodology topics include: primary/secondary survey data analysis, experimental designs, and coding qualitative data for quantitative analysis. No prerequisites, though an introductory course in statistics is recommended." },
        { x: 1*w, y: 3*h, graph: "INFO 290M", fullname: "Agile Engineering Practices", text: "In this course you’ll learn industry-standard agile and lean software development techniques such as test-driven development, refactoring, pair programming, and specification through example. You’ll also learn good object-oriented programming style. We’ll cover the theory and principles behind agile engineering practices, such as continuous integration and continuous delivery." },
        { x: 2*w, y: 3*h, graph: "INFO 290", fullname: "Product Design Studio", text: "This course gives participants hands-on software product design experience based on current industry practice. The course is project-based with an emphasis on iteration, practice, and critique from experienced industry designers. During the course, participants work iteratively on a series of design projects (both solo and in groups) through a full design process, including developing appropriate design deliverables and gathering feedback. We’ll also cover specific topics, including design and prototyping tools, working with and developing design systems, typical phases and deliverables of the design process, and designing in different contexts (e.g. startups vs. larger companies). There will also be guest lectures from industry experts." },
        { x: 3*w, y: 3*h, graph: "INFO 257", fullname: "Database Management ", text: "Introduction to relational, hierarchical, network, and object-oriented database management systems. Database design concepts, query languages for database applications (such as SQL), concurrency control, recovery techniques, database security. Issues in the management of databases. Use of report writers, application generators, high level interface generators." },
        { x: 4*w, y: 3*h, graph: "INFO 214", fullname: "User Experience Research", text: "This course addresses concepts and methods of user experience research, from understanding and identifying needs, to evaluating concepts and designs, to assessing the usability of products and solutions. We emphasize methods of collecting and interpreting qualitative data about user activities, working both individually and in teams, and translating them into design decisions. Students gain hands-on practice with observation, interview, survey, focus groups, and expert review. Team activities and group work are required during class and for most assignments. Additional topics include research in enterprise, consulting, and startup organizations, lean/agile techniques, mobile research approaches, and strategies for communicating findings." },
        { x: 5*w, y: 3*h, graph: "INFO 205", fullname: "Information Law and Policy", text: "This course uses examples from various commercial domains — retail, health, credit, entertainment, social media, and biosensing/quantified self — to explore legal and ethical issues including freedom of expression, privacy, research ethics, consumer protection, information and cybersecurity, and copyright. The class emphasizes how existing legal and policy frameworks constrain, inform, and enable the architecture, interfaces, data practices, and consumer facing policies and documentation of such offerings; and, fosters reflection on the ethical impact of information and communication technologies and the role of information professionals in legal and ethical work." },
        { x: 6*w, y: 3*h, graph: "INFO 233", fullname: "Social Psychology and Information Technology", text: "Discusses application of social psychological theory and research to information technologies and systems; we focus on sociological social psychology, which largely focuses on group processes, networks, and interpersonal relationships. Information technologies considered include software systems used on the internet such as social networks, email, and social games, as well as specific hardware technologies such as mobile devices, computers, wearables, and virtual/augmented reality devices. We examine human communication practices, through the lens of different social psychology theories, including: symbolic interaction, identity theories, social exchange theory, status construction theory, and social networks and social structure theory." },
        { x: 7*w, y: 3*h, graph: "INFO 203", fullname: "Social Issues of Information", text: "This course is designed to be an introduction to the topics and issues associated with information and information technology and its role in society. Throughout the semester we will consider both the consequence and impact of technologies on social groups and on social interaction and how society defines and shapes the technologies that are produced. Students will be exposed to a broad range of applied and practical problems, theoretical issues, as well as methods used in social scientific analysis. The four sections of the course are: 1) theories of technology in society, 2) information technology in workplaces 3) automation vs. humans, and 4) networked sociability." },
        { x: 1*w, y: 4*h, graph: "INFO 225", fullname: "Managing in Information-Intensive Companies", text: "This course focuses on managing people in information-intensive firms and industries, such as information technology industries. Topics include managing knowledge workers; managing teams (including virtual ones); collaborating across disparate units, giving and receiving feedback; managing the innovation process (including in eco-systems); managing through networks; and managing when using communication tools (e.g., tele-presence). The course relies heavily on cases as a pedagogical form. " },
        { x: 2*w, y: 4*h, graph: "INFO 234", fullname: "Information Technology Economics, Strategy, and Policy", text: "Application of economic tools and principles, including game theory, industrial organization, information economics, and behavioral economics, to analyze business strategies and public policy issues surrounding information technologies and IT industries. Topics include: economics of information; economics of information goods, services, and platforms; strategic pricing; strategic complements and substitutes; competition models; network industry structure and telecommunications regulation; search and the long tail; network cascades and social epidemics; network formation and network structure; peer production and crowdsourcing; interdependent security and privacy." },
        { x: 3*w, y: 4*h, graph: "INFO 239", fullname: "Technology and Delegation ", text: "The introduction of technology increasingly delegates responsibility to technical actors, often reducing traditional forms of transparency and challenging traditional methods for accountability. This course explores the interaction between technical design and values including: privacy, accessibility, fairness, and freedom of expression. We will draw on literature from design, science and technology studies, computer science, law, and ethics, as well as primary sources in policy, standards and source code. We will investigate approaches to identifying the value implications of technical designs and use methods and tools for intentionally building in values at the outset." }
        // { x: 5*w, y: 4*h, graph: "EWMBA 295T", fullname: "Lean LaunchPad", text: "This course is not about how to write a business plan but provides hands-on learning on what it’s like to start a high-tech company. The goal is to create an entrepreneurial experience with all of the pressures and demands in an actual early-stage startup. You will work in teams to talk to customers, partners, competitors, as you encounter the chaos and uncertainty of how a startup works, and learn how to turn a great idea into a great company. You will use a business model to brainstorm each part of a company and customer development to get out of the classroom to see whether anyone would want/use your product. Finally, based on the customer and market feedback gathered, you will use agile development to rapidly iterate your product to build something customers would want to use or buy." },
        // { x: 5*w, y: 4*h, graph: "EWMBA 295M", fullname: "Business Model Innovation & Entrepreneurial Strategy ", text: "The course examines innovation in business models as a critical aspect of successfully starting new enterprises. It reviews the business models of over 50 companies, new entrants and incumbents, and explores the successful strategies of entrant firms and the reactions of incumbents. Students learn how new enterprises use innovative business models to obtain success and avoid the challenges put forth by incumbents. The class uses case studies, short lectures, discussions and guest speakers to reinforce frameworks and showcase actual business examples. Students apply the models developed by the course to their own ventures and fields of interest." },
        // { x: 5*w, y: 4*h, graph: "MBA 252", fullname: "Negotiation and Conflict Resolution ", text: "Paradigms for computational vision. Relation to human visual perception. Mathematical techniques for representing and reasoning, with curves, surfaces and volumes. Illumination and reflectance models. Color perception. Image segmentation and aggregation. Methods for bottom-up three dimensional shape recovery: Line drawing analysis, stereo, shading, motion, texture. Use of object models for prediction and recognition." },
        // { x: 5*w, y: 4*h, graph: "MBA 295C", fullname: "Opportunity Recognition: Technology and Entrepreneurship in Silicon Valley", text: "Paradigms for computational vision. Relation to human visual perception. Mathematical techniques for representing and reasoning, with curves, surfaces and volumes. Illumination and reflectance models. Color perception. Image segmentation and aggregation. Methods for bottom-up three dimensional shape recovery: Line drawing analysis, stereo, shading, motion, texture. Use of object models for prediction and recognition." }
    ];

//Engineering track
    // var dataLinks =  [
    //     { source: 1, target: 5},
    //     { source: 2, target: 6},
    //     { source: 2, target: 7}
    // ];

//PM track
    var dataLinks = [
        { source: 1, target: 5},
        { source: 2, target: 6},
        { source: 2, target: 7},
        { source: 3, target: 6},
        { source: 4, target: 8},
        { source: 5, target: 12},
        { source: 5, target: 13},
        { source: 6, target: 13}
    ];


    force = d3.layout.force()
        .size([width, height])
        .nodes(dataNodes)
        .links(dataLinks);


    force.gravity(0);

    

    force.linkDistance(height/6);


    force.linkStrength(0.1);

  

    force.charge(function(node) {
       return node.graph === 0 ? -30 : -300;
    });

    links = svg.selectAll('.link')
        .data(dataLinks)
        .enter().append('line')
        .attr('class', 'link')
        .attr('x1', function(d) { return dataNodes[d.source].x; })
        .attr('y1', function(d) { return dataNodes[d.source].y; })
        .attr('x2', function(d) { return dataNodes[d.target].x; })
        .attr('y2', function(d) { return dataNodes[d.target].y; });

    nodes = svg.selectAll('.node')
        .data(dataNodes)
        .enter().append('g');

    nodes.append('circle')
        .attr('class', 'node')
        .attr('r', width/70)
        .attr('cx', function(d) { return d.x; })
        .attr('cy', function(d) { return d.y; })
        .on("click", function(d, i){
            d3.select(".fullname")
            // .append("text")
            // .attr("x", "100")
            // .attr("dy", "100")
            .text(d.fullname)
            .style("fill-opacity", 1e-6);

            d3.select(".text")
            // .append("text")
            // .attr("x", "100")
            // .attr("dy", "100")
            .text(d.text)
            .style("fill-opacity", 1e-6);
    });

    nodes.append('text')
          .text(function(d) {
            return d.graph;
          })
          .attr('x', function(d) {
            return d.x + 22;
          })
          .attr('y', function(d) {
            return d.y + 5;
          });

};


initForce();

export default node
