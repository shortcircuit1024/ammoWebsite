var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
      <div class="container-fluid">
          <Nav/>
          {props.children}
      </div>
  );
}

module.exports = Main;
