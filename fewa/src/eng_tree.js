// this is the software developing engineer d3 tree
import d3 from 'd3';
var node = document.createElement('div');
var link = document.createElement('link');
d3.select(link).attr("href" , "https://fonts.googleapis.com/css?family=Headland+One&display=swap");
d3.select(link).attr("rel" , "stylesheet");

var width = 900,
    height = 400;

var animationStep = 400;

var force = null,
    nodes = null,
    links = null;

d3.select(node).attr("class", "container-fluid");
var node1 = d3.select(node).append("div")
.attr("class", "row");
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
.style("font-family", "Calibri")
.append("text")
.attr("x", "100")
.attr("dy", "100")
.text("")
.style("fill-opacity", 1e-6);

textarea
.append('div')
.attr("class", "text")
.append("text")
.attr("x", "100")
.attr("dy", "100")
.text("")
.style("fill-opacity", 1e-6);

var svg = node1.append('svg')
    .attr("class", "col-sm-9")
    .style("flex", "0 0 65%")
    .attr('width', width)
    .attr('height', height);




// var textarea = d3.select(node).append('div').attr('class', 'textarea').text("aaa");


var initForce = function() {

    var w = width / 8;
    var h = height / 5;

    // var dataNodes = [
    //     { x: 3*w, y: 1*h, graph: "SDE", text: "SDE" },
    //     { x: 2*w, y: 2*h, graph: "INFO 206A", text: "INFO 206A"},
    //     { x: 4*w, y: 2*h, graph: "INFO 206B", text: "INFO 206B"},
    //     { x: 1*w, y: 3*h, graph: "CS 61A", text: "CS 61A" },
    //     { x: 2*w, y: 3*h, graph: "CS 61B", text: "CS 61B" },
    //     { x: 3*w, y: 3*h, graph: "INFO 253A", graph: "INFO 253A" },
    //     { x: 4*w, y: 3*h, graph: "INFO 253B", graph: "INFO 253B" },
    //     { x: 5*w, y: 3*h, graph: "INFO database", graph: "INFO database" },
    //     { x: 1*w, y: 4*h, graph: "INFO AML", graph: "INFO AML" },
    //     { x: 2*w, y: 4*h, graph: "INFO NLP", graph: "INFO NLP" },
    //     { x: 3*w, y: 4*h, graph: "EECS 289", graph: "EECS 289" },
    //     { x: 4*w, y: 4*h, graph: "EECS 170", graph: "EECS 170" },
    //     { x: 5*w, y: 4*h, graph: "EECS cv", graph: "EECS cv" },
    //     { x: 6*w, y: 4*h, graph: "EECS Security", graph: "EECS Security" }
    // ];

        var dataNodes = [
        { x: 3*w, y: 1*h, graph: "SDE", fullname: "Software Engineering", text: "SDE" },
        { x: 2*w, y: 2*h, graph: "INFO 206A", fullname: "Introduction to Programming and Computation", text: "This course introduces the basics of computer programming that are essential for those interested in computer science, data science, and information management. Students will write their own interactive programs (in Python) to analyze data, process text, draw graphics, manipulate images, and simulate physical systems. Problem decomposition, program efficiency, and good programming style are emphasized throughout the course. "},
        { x: 4*w, y: 2*h, graph: "INFO 206B", fullname: "Introduction to Data Structures and Analytics", text: "This course introduces the core programming skills needed to develop information management applications.  Students learn to design algorithms and implement them using the Python programming language. Lessons progress rapidly from primitive objects to larger code structures including functions, modules, and classes. Students solve problems to gain confidence and understand the application of computer science principles. The course ends with a final project that emphasizes object-oriented design. "},
        { x: 1*w, y: 3*h, graph: "CS 61A", fullname: "The Structure and Interpretation of Computer Programs", text: "An introduction to programming and computer science focused on abstraction techniques as means to manage program complexity. Techniques include procedural abstraction; control abstraction using recursion, higher-order functions, generators, and streams; data abstraction using interfaces, objects, classes, and generic operators; and language abstraction using interpreters and macros. The course exposes students to programming paradigms, including functional, object-oriented, and declarative approaches. It includes an introduction to asymptotic analysis of algorithms. There are several significant programming projects." },
        { x: 2*w, y: 3*h, graph: "CS 61B", fullname: "Data Structures", text: "Fundamental dynamic data structures, including linear lists, queues, trees, and other linked structures; arrays strings, and hash tables. Storage management. Elementary principles of software engineering. Abstract data types. Algorithms for sorting and searching. Introduction to the Java programming language. " },
        { x: 3*w, y: 3*h, graph: "INFO 253A", fullname: "Front-End Web Architecture", text: "This course is a survey of technologies that power the user interfaces of web applications on a variety of devices today, including desktop, mobile, and tablet devices. This course will delve into some of the core Front-End languages and frameworks (HTML/CSS/JS/React/Redux), as well as the underlying technologies enable web applications (HTTP, URI, JSON). The goal of this course is to provide an overview of the technical issues surrounding user interfaces powered by the web today, and to provide a solid and comprehensive perspective of the Web's constantly evolving landscape." },
        { x: 4*w, y: 3*h, graph: "INFO 253B", fullname: "Back-End Web Architecture", text: "This course is a survey of web technologies that are used to build back-end systems that enable rich web applications. Utilizing technologies such as Python, Flask, Docker, RDBMS/NoSQL databases, and Spark, this class aims to cover the foundational concepts that drive the web today. This class focuses on building APIs using micro-services that power everything from content management systems to data engineering pipelines that provide insights by processing large amounts of data. The goal of this course is to provide an overview of the technical issues surrounding back-end systems today, and to provide a solid and comprehensive perspective of the web’s constantly evolving landscape." },
        { x: 5*w, y: 3*h, graph: "INFO 257", fullname: "Database Management", text: "Introduction to relational, hierarchical, network, and object-oriented database management systems. Database design concepts, query languages for database applications (such as SQL), concurrency control, recovery techniques, database security. Issues in the management of databases. Use of report writers, application generators, high-level interface generators. " },
        { x: 1*w, y: 4*h, graph: "INFO 251", fullname: "Applied Machine Learning", text: "Provides a theoretical and practical introduction to modern techniques in applied machine learning. Covers key concepts in supervised and unsupervised machine learning, including the design of machine learning experiments, algorithms for prediction and inference, optimization, and evaluation. Students will learn functional, procedural, and statistical programming techniques for working with real-world data." },
        { x: 2*w, y: 4*h, graph: "INFO 159", fullname: "Natural Language Processing", text: "This course introduces students to natural language processing and exposes them to the variety of methods available for reasoning about text in computational systems. NLP is deeply interdisciplinary, drawing on both linguistics and computer science, and helps drive much contemporary work in text analysis (as used in computational social science, the digital humanities, and computational journalism). We will focus on major algorithms used in NLP for various applications (part-of-speech tagging, parsing, coreference resolution, machine translation) and on the linguistic phenomena those algorithms attempt to model. Students will implement algorithms and create linguistically annotated data on which those algorithms depend. " },
        { x: 3*w, y: 4*h, graph: "EECS 289", fullname: "Introduction to Machine Learning", text: "This course provides an introduction to theoretical foundations, algorithms, and methodologies for machine learning, emphasizing the role of probability and optimization and exploring a variety of real-world applications. Students are expected to have a solid foundation in calculus and linear algebra as well as exposure to the basic tools of logic and probability, and should be familiar with at least one modern, high-level programming language. " },
        { x: 4*w, y: 4*h, graph: "EECS 170", fullname: "Efficient Algorithms and Intractable Problems", text: "Concept and basic techniques in the design and analysis of algorithms; models of computation; lower bounds; algorithms for optimum search trees, balanced trees and UNION-FIND algorithms; numerical and algebraic algorithms; combinatorial algorithms. Turing machines, how to count steps, deterministic and nondeterministic Turing machines, NP-completeness. Unsolvable and intractable problems. " },
        { x: 5*w, y: 4*h, graph: "EECS 280", fullname: "Computer Vision", text: "Paradigms for computational vision. Relation to human visual perception. Mathematical techniques for representing and reasoning, with curves, surfaces and volumes. Illumination and reflectance models. Color perception. Image segmentation and aggregation. Methods for bottom-up three dimensional shape recovery: Line drawing analysis, stereo, shading, motion, texture. Use of object models for prediction and recognition." },
        { x: 6*w, y: 4*h, graph: "EECS 161", fullname: "Computer Security", text: "Introduction to computer security. Cryptography, including encryption, authentication, hash functions, cryptographic protocols, and applications. Operating system security, access control. Network security, firewalls, viruses, and worms. Software security, defensive programming, and language-based security. Case studies from real-world systems. " }
    ];

    var dataLinks = [
        { source: 0, target: 1},
        { source: 2, target: 3},
        { source: 1, target: 4}

    ];

    // Now we create a force layout object and define its properties.
    // Those include the dimensions of the visualization and the arrays
    // of nodes and links.

    force = d3.layout.force()
        .size([width, height])
        .nodes(dataNodes)
        .links(dataLinks);

    // To keep the two distinct graphs from getting mixed up with
    // each other, we'll disable the `gravity` property. We'll explore
    // this property in a later example, but note that, in general,
    // you probably don't want to do this. We can get away with it
    // here because we're carefully controlling the graphs.

    force.gravity(0);

    // Define the `linkDistance` for both graphs. This is the
    // distance we desire between connected nodes.

    force.linkDistance(height/6);

    // To highlight the effect of `charge`, we reduce the rigidity
    // of the links. More about this property in another example.

    force.linkStrength(0.1);

    // Here's the part where we make the two graphs differ. Because
    // we're looking at the `charge` property, that's what we
    // want to vary between the graphs. Most often this property is
    // set to a constant value for an entire visualization, but D3
    // also lets us define it as a function. When we do that, we
    // can set a different value for each node.

    // Negative charge values indicate repulsion, which is generally
    // desirable for force-directed graphs. (Positive values indicate
    // attraction and can be helpful for other visualization types.)

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
