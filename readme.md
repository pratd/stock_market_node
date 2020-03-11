# Project: Stock Market - Assembler School
- Develop a REST API for delivering stock market data (DBMS of our won choice)
- Develop a Vue.js SPA that consumes the data provided by the API (Using Charts.js)
- Develop a NodeJS/Express app that consumes the data from the API(Using Charts.js and render engine from our own choice)

## Introduction
The initial organisation document has to reflect the way in which the project is going to be developed. The main goal is to prevent comments like:
- I'm on 4/5 day and I'm not sure on how to technically carry out this project.
- I haven't talked to any collegue about this project yet.
- I have several questions on the project and I haven't cleared them out in time to finish the project.
- All the organisation is in my mind but I don't know who to write it down.
- I asume I have enough time to do de project in time and because of that, I decide to work on non related project and in the end, I don't have time enough.
- I din't take into account the events and masterclasses that have been going on during the week.
- I didn't take into account the chance of something going wrong on my initial organisation plan.
- I didn't know that the project had to cover some feature.
- One certain feature took so much time that prevented me from carrying out the whole of the project.

## To take into account
In order to avoid the previous kind of behavious, the first part of the project will be to obtain a document that reflects how the project is going to be carried out. That's why it's so important that the Project Manager (hereinafter PM) and the team define what tasks have to develop by each member of the team taking into account that the following requirements have to be properly followed.

PM:
- Coordination within the team
- Task supervision
- Conflict resolution
- The plan has to be properly followed
- Convey possible incidents to Assembler team if required
- Team leadership
- Define appointments with date, time and objectives
- Decision making
- Leader the communication within teams
- Pick up feedback from the team
- Design use cases
- Database design
- API design (create POSTMAN / SWAGGER collection)
- Wireframing APP and SPA
- Research on possible technologies, libraries and features
- Planning fases and tasks
- Estimate time of the project development. Assembler team will validate the estimation.
- Hosting and deployment
- Design how the different applications will be deployed to Heroku

IMPORTANT: It won't be allowed to imnplement nor develop any feature of the project during the organisation phase. It's important to understand that the development phase will depend 100% on its organisation and it will have to be validated by the Assembler Team.


## Arquitecture, technologies and applications
In this project we are going to develop a REST API that will provide data for 2 extra apps: a NodeJS/Express app and a VueJS SPA:

WEB API:
- Implement a DB. (You can decide which DBMS to use and whether if your DB has to be relational or non relational)
- Backend has to be developed in PHP / Laravel v.7.

APP - COMPANY1
- This is a hypothetical customer for the API.
- It has to be developed in NodeJS to query the API so the responsability to obtain data relapse on the backend. It's important to properly design Classes and Methods that abstract data the cleaner the better.
- It won't be using AJAX as data will be consumed from the Backend and will be conveyed to the views.
- Views have to be responsive being Bootstrap allowed.
- It has to use Chart.js as a requirement.

SPA APP - Company2
- Create a SPA (Single Page Application)
- Implement VueJS and query data from the WEB API using AJAX.
- Using npm, webpack and sass is mandatory
- It has to use Chart.js as a requirement.

## Data Arquitecture
Analise and design a storage and control system that fulfills this requirements:

Values/Actions / Company
- Name of the action, for instance: TESLA MOTORS, IBEX 35, GOLD, etc
- Unic code pro example: TESLA, IBEX35, etc
- Description
- Logo or img
- Current price:
- qty / current price
- Relationship with the value / Action to which it belongs
- Datatype that includes microseconds


## Requirements and features of the WEB API
Using Laravel for the WEB API is mandatory. You must use all good practices that Laravel provide (Eloquent, Migrations, Routing, Controllers, etc.)
The main goal of the WEB API is to provide the client with endpoints to allow:
- List all Values / Actions / Companies available.
- List all registered prices within a date range. (Maximum 1 year)
- View detailed Value/ Action / Company (name, description, etc)
- List the values / Actions / Company that have increased the most in the last 24H


## Requirements and features of the APP - Market Basket
The application in NodeJS has to query the API from the BACKEND. It's important that all printed data comes from the NodeJS and not from the AJAX.
It must cover:
- Show value listing (including the last registered price)
- Top results page
- Detailed value page with its corresponding graphic
- Search results view + search form
- Menu bar with access to all of the pages



## Requirements and features of the SPA APP - Visual Market
The SPA built in VueJS will have to query the API from the FrontEnd by using AJAX. You are not allowed to use any Backend language to query the WEB API within the SPA.
It must cover:
- Show value listing
- Top results page
- Detailed value page with its corresponding graphic
- Add a value to be follwed
- Searcher Form
- Search results view

All of those must be in the same view.
Think wisely on the architecture of the components so responsabilities are isolated

## Constraints
- Team members cannot talk to any other team members
- Only PM can talk to other PMs.
- Members of the team cannot talk to Assember to ask for guidance nor help (the issue has to be conveyed to the corresponding PM)
- Only PMs can talk to Assembler
- If a member of a team considers the team needs help from another team member the procedure is to talk to the corresponding PM so that he convinces the other PM to share resources.

IMPORTANT: The incompliment of those rules will carry out a penalisation in the evaluation of the project.


## Project Organisation
Make a document with the following contents:
- Project description,requirements and tools used
- List of tasks to be performed
    - Priority of each task
    - Title and description of each of them
    - Difficulty level
    - Estimated time for each task
- Record of incidents that were detected during project execution
- Schedule or Calendar of the project. (Choose the one you consider most chosen given the size of the project)
- Record of lessons learned

## Requirements
- Use GIT and write commit messages that are the most xplicit as possible
- Code and comments have to be written in english
- Use a clear and ordered directory structure
- Use camelCase on both variable name and function names
- Never use inline styling when writting HTML
- Divide tasks in subtasks and make try to make a commit for each of them
- Delete unused files

## Deliverables
- Presentation on the organisation of the project within the team
    - Summary on the prviously mentioned keypoints
    - Roles and tasks that each member has
    - Time estimate based on which the team has to deliver the project.
- Full documentation with all required explanations on the project
- The code: WEB API, Vue SPA and NODEJS APP.


## Links that helped us developing this project

## Authors
* **Tech Lead: Axel Louis Fernández Brink**
* **Product Owner, Deployment Officer: Cristina Moreno Medran**
* **Prattya Datta**
* **Mani Tahriri**
* **André Joyo**