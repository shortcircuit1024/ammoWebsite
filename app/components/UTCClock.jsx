import React from 'react';
var output;

const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = [];
  },

  componentWillUnmount() {
    this.intervals.map(clearInterval);
  },

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }
};

const renderTime = () => {
  const currentTime = new Date();
  var h = currentTime.getUTCHours();
  var m = currentTime.getUTCMinutes();
  var s = currentTime.getUTCSeconds();
  var d = currentTime.getUTCDate();
  var mo = currentTime.getUTCMonth() + 1;
  var y = currentTime.getUTCFullYear();


  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  if (d < 10) {
    d = '0' + d;
  }
  if (mo < 10) {
    mo = '0' + mo;
  }

  output = {
    hours: h,
    minutes: m,
    seconds: s,
    day: d,
    month: mo,
    year: y
  };
  return output;
};

const UTCClock = React.createClass({
  mixins: [SetIntervalMixin],
  getInitialState() {
    return { time: renderTime() };
  },
  componentDidMount() {
    this.setInterval(this.tick, 1000);
  },
  tick() {
    renderTime();
    this.setState({ hours: output.hours, minutes: output.minutes, seconds: output.seconds, day: output.day, month: output.month, year: output.year});
  },
  render() {
    return (    <span className="row">
        <span id="utcTime" className="col-sm-6" style={{color:'white'}}>{ this.state.hours }:{ this.state.minutes }:{ this.state.seconds }</span> <span id="utcDate" style={{color:'#F59B45'}}>{ this.state.day }/{ this.state.month }/{ this.state.year }</span>
      </span>
    );
  }
});

module.exports = UTCClock;
