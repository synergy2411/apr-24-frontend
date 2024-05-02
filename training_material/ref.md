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
