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
