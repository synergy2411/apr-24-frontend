# JavaScript Library/Framework

- React (25-30kb): to create/render the UI quickly and efficiently
  > State Management - Redux library
  > Form Validation - formik, react-form-hook, yup, joe, etc
  > Single Page App - React Router DOM
  > Remote Server Call - fetch API, Axios, jQuery etc
- Angular : Framework. consist of several libraries;
  > Component based
  > Shadow DOM
  > Two way data binding (ZoneJS)
  > Remote Server Calls (@angular/http)
  > Create Single Page Apps (@angular/router)
  > Dom manipulation (mini jQuery)
  > State Management (Services)
  > Animation (@angular/animation)
  > Form Validation (@angular/form)
  > more features etc
- Vue : Framework
  > Virtual DOM
- Backbone
  > Provide client side MVC Pattern
- Knockout
  > Two way data binding
  > MVVM Pattern at client side
- jQuery
  > DOM Manipulation
  > Animation
  > AJAX Calls
- Stencil
  > to custom web components
- Polymar : to createrich web components
- Preact : small library based on React. 5kb

# Server side scripting

- NodeJS : Platform
- ExpressJS / Koa / Hapi / Sails / Kraken : WEb Application Framework for NodeJS Platform

# Atomic Web Designing Principle

- Atom : smallest element. eg. a button, one input field
- Molecule : combo of atoms. eg. A searchbar (one input element + one button), Navigation Link (One icon + one text element)
- Organism : combo of molecules. eg. Navigation bar (Several Links)
- Template : combo of Organism. eg. Form ()
- Page : A Complete Page

# Thinking in React way

- If the peice of code is reusable, make it a component

# DOM - Document Object Model

- Hierarchical represenatation of HTML Elements

# To create React Project

> Option 1

- npx create-react-app frontend

> Option 2

- npm install -g create-react-app
- create-react-app frontend

# To start React App

- cd frontend
- npm start

# To install Bootstrap

- npm install bootstrap

# Props : way to supply data from Parent component to Child Component

# State : Data to managed in component

- Changing state will re-render the component with latest state value

const [stateVariable, stateChangingFunction] = useState(initValue)

const [show, setShow] = useState(false);

# To install UUID

- npm install uuid

Component
Props
State
Component Communication : Props

# Lifting up the state -> Sending the value from Child component to Parent component

# Controlled vs Uncontrolled

- Controlled
  > updated value for every key stroke
  > Error Message & Validations
  > Lots of Code
  > eg. Registration Form
- Uncontrolled
  > Less Code : no handler function, no state management, no useState()
  > eg. Login Form

# Class based component - to manage the state & to perform side effects

- Component Life-cycle Methods
- Mounting : Constructor, Render, ComponentDidMount
- Updating : shouldComponentUpdate, Render, ComponentDidUpdate
- Unmounting : componentWillUnmount
- Render Phase : no side-effect operation
- Commit Phase : can run side-effect

# Controlled & Uncontrolled Elements

- Controlled - State is managed by React Component; useState() + ChangeHandler Function
- Uncontrolled - State is managed by DOM itself; useRef()

# Lifting up the State : using functional props

- useRef() : used to receive the reference of DOM element

---

# Common Hooks

- useState()
- useRef()
- useEffect()
- useContext()
- useReducer()
- useCallback()
- useMemo()

# Create Single Page Apps

# State Management using Redux

# useEffect() flavours -

- useEffect(cb)
  > cb executes for initial rendering of component
  > cb executes for all the subsequent rendering of the component
- useEffect(cb, []) - componentDidMount
  > cb executes for initial rendering of component
  > cb will executes only ONCE
- useEffect(cb, [Dependencies]) - componentDidUpdate
  > cb executes for initial rendering of component
  > cb executes whenever the dependency will change
- useEffect(cb => cleanUpFn, [Dependencies]) - componentWillUnmount
  > cb executes for initial rendering of component
  > dependency will change
  > cleanUpFn will execute
  > cb executes after the cleanUpFn
  > CleanUpFn will also executes when component is about to unload

Typeahead Suggestion / Autocomplete suggestion
https://api.github.com/users/mojombo/repos

# Context API

- Solves the problem of Prop-drilling

- CompA -> CompB -> CompC

# State Management

- useState() : Manage the state for one component
- useReducer() : Manage Complex state for a component
- Context API : Manage the state for component branch
  > Not highly optimized
  > Complex to manage
  > user preferences eg. favorate color, theme
  > JWT Token
- Redux : Manage the state for the complete application
  > Performant
  > complex state logic
  > Async task / side effects
  > frequent change in data

# JavaScript DataTypes

- Primitive : String, Number, Boolean, BigInt, Symbol
- Reference : Object, Array, Functions, Date

useCallback() ->

- Functions Reference Type
- Returns memozied value for inline functions
  useMemo() ->
- works with all reference types
- Return memoized value which is returned by the inline/callback function

useMemo(() => () => {}) === useCallback(() => {})

# To install JSON Server

- npm install json-server@0.17.4 -g
- json-server --version
- json-server --watch --port=3030 db.json

DOCTORS
POST /doctors
GET /doctors
GET /doctors/doctorId

# Single Page Applications

- Rendering the components conditionally
- Does not reload / refresh in browser
- Better User Experience / Interaction
- Decrease Network bandwidth
- Fast
- Complete page information is sent to client in one go

http://www.example.com -> index.html, css, javaScript

- Hashbang mode : http://www.example.com/#/products
- HTML5Mode (default): regular : http://www.example.com/products

---

> npx create-react-app frontend
> npm create vite@latest

# to install react-router-dom

- npm install react-router-dom
- npm run dev

# Routing Terminologies

- <Outlet /> : provides the space to load the child page
- <RouterProvider /> : injects the routing configuration in React app
- loaders : ensures the data in the routes before it gets loaded in the UI
- actions : submits the form to the route; Use of <Form> Component from react-router-dom

- Route Parameter : Dynamic segment of the URL
- useNavigate() : used for programmatic navigation
- useSubmit() : programmatically submit the form to the actions
- useRouteError() : populates the error object if any error occured in routes
- useNavigation() : navigation state : idle, submitting, loading

# COURSES : http://localhost:3030/courses

GET - /courses - all courses available
GET - /courses/coursesId - Single Course details
POST - /courses - add new Course
PATCH - /courses - update the existing course
DELETE - /delete/courseId - delete the single course

http://localhost:5173/courses > list of available courses

http://localhost:5173/courses/:courseId > details of selected course

http://localhost:5173/courses/new > Add New Course

http://localhost:5173/courses/:courseId/edit > edit the existing course

# Axios : library for making remote server calls (XHR Calls)

---

- Redux
- Testing

# Single Source of Truth

let store = {
counter : 0,
result : [],
todos : [],
expenses : [],
token : "",
getCounter : () => this.counter,
dispatch : (action) => {}
}

let user1 = {
name : "John Doe"
}

user.age = 32 // Mutable Change

let user2 = {
...user1,
age : 32
}

# Genrate package.json file

> npm init -y
> npm install @reduxjs/toolkit

# Create React Project

- npx create-react-app react-redux-app
- npm install @reduxjs/toolkit react-redux
- npm install bootstrap

# React Redux Library

- useSelector() : to select the state from the Redux Store
- useDispatch() : to dispatch the action from the component

---

# Install Firebase SDK

- npm install firebase

# Firebase Credentials

# Enabling email/password Authentication

# Install React Spinners

- npm install react-spinners

---

# Redux - Predictable State Management Container

- Should we use Redux?
- Runs everywhere (Client, Server, Native)
- Live code editing and time travelling debugger (Redux DevTools)
- Libraries : react-redux, @reduxjs/toolkit
- Building Blocks: Action, Reducer, Store, Middleware
- createSlice(), createAsyncThunk()
- useSelector(), useDispatch()

---

# React Component Testing

- TDD : Test Driven Development

  > Write the Tests, make them Fail, write the Code, make them Pass
  > AAA : Arrange > Act > Assert

- BDD : Behaviour Driven Development

# Queries in React Testing Library

- getAllBy
- queryAllBy
- findBy : async await

- npm test -- --coverage --watchAll=false

# Cloud Concepts

# Docker Concepts

---

# Generate Code Coverage

- npm run test -- --coverage --watchAll=false

---

# AWS Concepts

- IAM : Identity & Access Manager
  > Users, Group, Role, Permissions
- EC2 : Elastic Cloud Compute
  > Virtual Server
- S3 : Simple Storage Service
  > to store unlimited data
- Elastic Load Balancers
  > to distribute load among Virtual Servers
- Route 53
  > DNS Registration and Management
- Elastic BeanStalk
  > App Deployment with various Platform
- Database Service
  > RDS : Relational Databases eg. MySQL, SQL Server, PostgreSQL, mariaDB, Aurora
  > DynamoDB : NoSQL Database

---

# CI/CD : DevOps

- CI: Continuous Integration
- CD: Continuous Deployment

# Docker

---

# CICD Steps using AWS CodeBuild, CodePipeline & Github

1. Create React App [COMPLETED]
2. Create new Github Repo [COMPLETED]
3. Push App to Github [COMPLETED]
4. Create S3 Bucket
   4.1 - Allow Static Website Hosting [COMPLETED]
   4.2 - Allow Permissions on Bucket (added bucket policy) [COMPLETED]
5. Create CodeBuild
   5.1 - Access React App from Github [COMPLETED]
   5.2 - Build the React Project [COMPLETED]
   5.3 - Stores build artifacts in S3 bucket [COMPLETED]
   5.4 - Deploy the App [COMPLETED]
6. Create PipeLine
   6.1 - Access the React App from Github [COMPLETED]
   6.2 - Use CodeBuild to access latest changes [COMPLETED]

---

# Docker Command

- Docker CLI
- Docker Deamon/Server
- Docker Hub
- Image
- Container
- Commands
  > docker run <image-name>
  > docker create <image-name>
  > docker start -a <container-id>
  > docker ps : running containers
  > docker ps --all : all containers (running / exited)
  > docker exec -it <container-id> <command>
  > docker stop <container-id>
  > docker kill <container-id>
  > docker system prune : deletes all the containers from local machine
  > docker build -t <docker-id>/<image-name>:version .
  > docker run -p 8080:8080 <image-name>
