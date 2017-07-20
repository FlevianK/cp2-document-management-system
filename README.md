[![Coverage Status](https://coveralls.io/repos/github/FlevianK/cp2-document-management-system/badge.svg?branch=feature/#146512103/client-side )](https://coveralls.io/github/FlevianK/cp2-document-management-system?branch=feature/#146512103/client-side )

# DMS
DMS is a document management system. The system makes it easy for users to keep track of their documents and also share with each other depending on the the document access type selected; the options are: private public and role. The users are grouped into groups using role type, this makes it easy for them to share with each other documents depending on their roles and also the documents are private to that group since only members of that group and admin can view. Also, a user can have privates documents which are viewed by the user who created it and the admin only. Public documents are viewed by all users in the system. A document is managed by the user who created it since the creater is the only one who can delete or update the document's content.

The system allow people to become its users by registering and the new member is given a default role after successful registration. There after administrator of the system can update the role of the user depending on the group the user wants to join. Administrator is the only who has the permissions to update user role or delete a user excluding default user who is the system administrator whereas a user can update his/her details except role. The roles are managed by the administrator who has the permission to create, update role description and delete a role excluding default roles which are regular and admin

## Built With
### backend
* Node
* Express
* Sequelize

### Frontend
* React
* Redux
* material-ui
* materialize-css
* webpack
* ES6
* babel

## Agile
This project was managed using [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2041339)

## Procedure for running the system locally
Follow the steps below systematically to have system in your machine and operate as expected

### Prerequisites
Ensure you have `Node.js` and `Postgresql` installed.

### Installing
1. Open to tab/window on your terminal
2. Clone this [repository](https://github.com/FlevianK/cp2-document-management-system.git)
3. Navigate to the root folder of the system on your terminal and perform the following operations:
* Install the necessary packages by running the following command: `npm install`
* Create database by the following comand: `createdb database_development`
* Set up the database by the following command: `npm run migrate`

### Run on the browser
1. Open to tabs/windows on your terminal
2. Navigate to the root folder of the system on your terminal and perform the following operation on the first tab/window: `npm start`
3. Navigate to the root folder of the system on your terminal and perform the following operation on the second tab/window: `nodemon app.js`
4. Open your browser and writing the following url to use the system: `http://localhost:8080/`

#### Admistrator access
To login in as an admin use the following credentials
* email: admin@dms.com
* password: Admin@1

## Testing
Testing is achieved through use of `enzyme`, `mocha` and `chai` packages; `mocha` is the testing framework, `enzyme` simulates react events while testing and `chai` is the exception library.

### To perform the test 
1. Open to tab/window on your terminal
2. Navigate to the root folder of the system on your terminal and perform the following operations:
* Create database by the following comand: `createdb database_test` 
* Run the test by the following command: `npm run test:app`

## Deployment
The system is hosted on Heroku

The backend and front end are hosted independly but are integrate and the system oparates fully.
* The system [backend](https://dms-flev-backend.herokuapp.com/)
* The system [frontend](https://dms-flev.herokuapp.com/) 

Find the app on [Heroku](https://dms-flev.herokuapp.com/) 
 

## Author
* Flevian Kanaiza
