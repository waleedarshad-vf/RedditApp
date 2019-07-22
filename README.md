# RedditApp
# Implementation
* Best Practices regarding react Native
Created app folder to hold all of our source files
* assets =>  holds fonts, icons, and images
* components => This is where you’ll place all your shared React components
* config => configuration of our app like production and development environments
* views => These are our application screens


# Redux (To hold application state)
## Store
   * ---- Action trigger's a request to mutate the state of the store, keep in mind store state is immutable and only can be replaced by the new state. 
   * ----- Reducer is at the receiving end and listening to any change requests.   
# Middleware
* redux-logger => LogRocket is a production Redux logging tool that lets you replay problems as if they happened in your own browser
* redux-thunk => Redux Thunk middleware allows you to write action creators that return a function instead of an action

# Testing Frameworks
## Jest & Enzyme 
* Jest  is a delightful JavaScript Testing Framework with a focus on simplicity. Jest acts as a test runner, assertion library, and mocking library
* Enzyme is a delightful JavaScript Testing Framework with a focus on simplicity. Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components’ output
How to run App
* yarn install
* 
# How to run Test   
 yarn run test -u
  
   
