var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Home = require('Home');
var Scheduler = require('Scheduler');
var Fleet = require('Fleet');
var Floatila = require('Floatila');
var Profile = require('Profile');
var About = require('About');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path="scheduler" component={Scheduler}/>
        <Route path="fleet" component={Fleet}/>
        <Route path="floatila" component={Floatila}/>
        <Route path="about" component={About}/>
        <Route path="profile" component={Profile}/>
        <IndexRoute component={Home}/>
    </Route>
</Router>, document.getElementById('app'));
