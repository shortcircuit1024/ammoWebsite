var React = require('react');
var Clock = require('react-clock');

var Scheduler = React.createClass({
    render: function() {
      var d = new Date();
      var n = d.getTimezoneOffset();
      var s = d.toTimeString();
        return (
            <div style={{padding: '53px'}}>
                <h3>Welcome to the AMMO Scheduler</h3>
                <Clock />
                <p>{s}</p>
                <p>Offset {(n/60) * -1}</p>
            </div>
        );
    }

});

module.exports = Scheduler;
