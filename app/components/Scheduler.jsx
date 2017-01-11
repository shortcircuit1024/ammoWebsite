var React = require('react');
var Clock = require('react-clock');
var UTCClock = require('UTCClock');

var Scheduler = React.createClass({
    render: function() {
        return (
            <div style={{
                padding: '53px'
            }}>
                <h3>Welcome to the AMMO Scheduler</h3>
            </div>
        );
    }

});

module.exports = Scheduler;
