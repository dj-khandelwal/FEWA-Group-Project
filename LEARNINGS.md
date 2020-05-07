# project-5consonants
project-5consonants created by GitHub Classroom

## Team Members: 
Changran Hu,
Dheeraj Khandelwal,
Mandy Leung,
Ryan Yenchen Liu,
Sijia Xiao

## Description
The interdisciplinary nature of the MIMS program allows students to take a broad cross-section of classes within the ISchool and across campus. While this breadth of choice affords rich educational opportunities, it can also present challenges for students attempting to craft their learning journeys in a focused way. Our goal was to create a website that could serve as a resource for MIMS students as they plan their academic careers. We planned to present four professional tracks that students may pursue within the MIMS program (user experience design, software engineering, product management and data science) and present information about recommended classes and classes trajectory for each track. The user flow is as below:
We had hoped to use Berkeley’s classes API to provide interactive content for the track trees, but were unable to procure approval in time for the project’s due date. We then tried to use APIs from EdX and Udemy as means of providing external resources for students interested in learning more about particular topics. Unfortunately, Udemy rejected our requests twice and constraints with EdX’s API prevented us from featuring content in a way that would have been  useful to end user. We finally turned to the Google Maps API to incorporate a campus map that would show the locations of key buildings on campus. 

![image](https://github.com/UCB-INFO-FRONTEND-WEBARCH/project-5consonants/blob/master/images/overview.png)


Our initial proposal included a plan to use the UC Berkeley [Class](https://api-central.berkeley.edu/api/45) and [Course](https://api-central.berkeley.edu/api/46) APIs to fetch comprehensive information around the classes offered by various UC Berkeley departments. We planned to use this source of data combined with crowdsourced knowledge to build the directions and the “professional tracks” as a part of our trees. This information would be used to provide interactivity on the content for the trees. The Student Tech Council however needs 6+ weeks of processing time to generate API credentials and hence, we decided to move to our Plan ‘B’.

The Plan ‘B’ for use was the use of API(s) from online education websites (edx/Udemy etc) to suggest relevant online courses for students interested in particular fields. We were unable to make this work due to edx API limitations that only allowed restricted searches through user defined catalogs (not the whole pool of courses). Udemy on the other hand, did not authorise our usage of their APIs. We finally ended up turning to the Google Maps and Geocoder APIs to incorporate a campus map that would show the locations of key buildings on campus. 

Without API access to Berkeley’s catalog of classes, we manually retrieved class information for two tracks: software engineering and product management. In future iterations, our site could include recommended classes for user experience and data science. We used the class data for software engineering and product management to build visualizations in D3 and incorporated them into other pages that were created using React. In sum, our site features the following functionality: 

  - Main page that shows four tracks: user experience, software engineering, product management and data science.
  - Two career paths in software engineering track: front end and back end.
  - Course tree of front end developer path. The depth indicates difficulty level of course, the lines connect potential   -   - prerequisite courses and the courses followed.
  - After clicking on each dot represents a course, a detailed description will appear on the left.
  - After clicking on the map icon, users can select the course location from a drop down list. 
  - Users can click the home icon to return to main page.




## Web Technologies

### React 
React powers most of our site. We used changes in state to re-render the DOM and trigger page transitions. 

### Javascript / JSX
The methods/functions we have implemented in the React Components are in JavaScript. We also used JavaScript XML as the base elements for some parts of the web pages.

### React-Bootstrap
We used the library to power certain styles in the react pages. This library excels at creating a fluent transition between pages and a clear UI interface while not competing manipulating DOM with React.

### Bootstrap
The native Bootstrap library features flexible customization that colors our website. It goes well with a static page since its built-in Grid system and responsive nature will manipulate the DOM, which makes the React behavior unpredictable.

### HTML
We used HTML as the base elements for some parts of the web pages.

### CSS
With the exception of the home landing page (greeting.js), our entire site uses custom CSS. This provided us with greater flexibility and control over the display when combining React components, D3, and Google maps.

### React-d3-library / D3
We integrate D3 with react using React-d3-library. It somehow solves the issue that D3 and React compete for DOM control, but we still have to customize [force directed graph](https://github.com/d3/d3-force) in D3 to build the course tree.

### Google-maps-react
This is Google’s react library that allowed us to render the map and the markers that showed the locations of the campus buildings that were searched. 

### Geocode
The Geocoder is a service that gets us the longitude and latitude of any textual address that we provide as a request. We can use the geocoder to quickly scale our campus map to the whole campus. We need not worry about the lat/long of the buildings, we only need to provide the name of the building and the geocoder takes care of the rest!

### Figma
We used Figma to create a medium-fi prototype before launching the site build. Figma offers affordable wireframing functions that give us a better picture of the entire structure of the website.

### Firebase
We used Firebase as a container for potential data received from our Web API; we tested it using manually retrieved class data. Since we did not receive approval for the Berkeley Classes API, however, this was not used in the final version of our site. 
