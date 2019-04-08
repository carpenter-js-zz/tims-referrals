# tims-referrals

## Problem and Solution
Problem - Tim needs a way to keep track of his referral links and visit their pages. <br>
Solution - Build a web app that can save new referral links, link to the referral landing pages, 
and keep track of how often the pages are visited. <br>

My solution is fullstack, using Django Rest Framework/Python for the backend, and React/Redux for the frontend.

## Technical Choices
I chose to use Django Rest Framework for the api because it is what I would be working with at Ambassador. <br>
This was my first Django app, I had a lot of fun learning it and am blown away by how fast Django Rest Framework lets
you build an api.

I chose to go fullstack instead of just backend because I know React and Redux and wanted to demonstrate that. <br>
I bundled my React app as a Django app alongside the api to keep the frontend and api close, and so I could deploy 
it all as one app on heroku. I used webpack and babel to bundle the frontend app. <br>
The api tests are in ./project/referrals/tests.py <br>

I chose to handle the increment click count functionality on the frontend with a PUT request in an onClick handler.<br>

The url shown in the browser is handled by react router's hash router to show {my_url}/{link_nme}, the backend urls 
are api/referrals and api/referrals/:id.

The next steps for this project would be to build out the error handling and to add a error component to show errors to the 
user, and to add tests to the frontend. <br>

Check out the deployed app at https://tims-referrals.herokuapp.com

<br>

I ran into some issues deploying to heroku because of my file structure, so I rebuilt the app with the correct structure
and A new github repo. You can check out the original repo here: https://github.com/carpenter-js/Ambassodor-code-challenge
to see my commit history and get an idea of my workflow. This taught me a lot about how to properly structure a Django project.

<br>

## Other projects

Velo Maps: https://github.com/carpenter-js/Velo-Maps -- a full stack app I built alone.
French Mate: https://github.com/carpenter-js/French-Mate-client -- a full stack app I built with a partner, I built the
backend with node/express and set up auth with passport and bcrypt.
Helpfull: https://github.com/carpenter-js/French-Mate-client -- full stack app built with a team of 5, I was the primary
frontend developer using react and react-hooks. I also did plenty of work with the backend node/express api.



