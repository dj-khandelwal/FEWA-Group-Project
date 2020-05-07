### Team Members: 
Changran Hu
Dheeraj Khandelwal
Mandy Leung
Ryan Yenchen Liu
Sijia Xiao

### Vision 
We want to develop a site to plan/map out learning journeys for ISchool students. A comparative product would be a tree to visualize learning paths. https://hkn.eecs.berkeley.edu/coursesurveys

### Website Goals 
The interdisciplinary nature of the MIMS program allows students to take a broad cross-section of classes within the ISchool and across campus. While this breadth of choice affords rich educational opportunities, it can also present challenges for students attempting to craft their learning journeys in a focused way. Our goal is to create a website that serves as a resource for MIMS students as they plan their academic careers. The site will present information about recommended classes and visualize the professional tracks that the students may pursue within the MIMS program. Some tracks that could be pursued by themselves or  as a combination: user experience design, user experience research, product design, data science, software engineering, cybersecurity, and product management.

Even within these respective tracks, the student may have a particular interest that they wish to pursue (e.g.: Professional roles around Backend/FrontEnd/Web Development/DevOps/Database/etc. are all typically categorised under Software Engineering). We wish to provide students the resources to take an informed decision over the courses that they might be interested in around they field of choice.

### User group
MIMS students (Other potential users: MIDS, MICS, 5th-year MIDS, students pursuing ISchool Certificates)

### Features 
On the landing page, we will list all the tracks provided by the MIMS program. For each track,we want to provide the following functions for users to explore:

- Courses tree for each track:
  - Recommended timeline, priority, prerequisites
  - Possible pop-up bubble or redirect to different pages with information about class such as offered semester, workload, skills learned, & tips (i.e. long waiting list)
    - Resource: https://classes.berkeley.edu/
    - We would use UC Berkeley’s Courses API to retrieve this information: https://api-central.berkeley.edu/api/46
- Other potential resources to include in information display:
  - iSchool, Jacobs, EECS, and Haas’s website
  - D-Lab, X-Lab, Jacobs’ Maker Space, CITRIS
  - Online Resources
  - DeCal
  - Certificates program, ex: Graduate Certificate in Applied Data Science
