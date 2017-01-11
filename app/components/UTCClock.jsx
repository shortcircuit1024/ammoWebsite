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

  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  output = {
    hours: h,
    minutes: m,
    seconds: s
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
    this.setState({ hours: output.hours, minutes: output.minutes, seconds: output.seconds});
  },
  render() {
    return (
      <span>
        { this.state.hours }:{ this.state.minutes }:{ this.state.seconds }
      </span>
    );
  }
});

module.exports = UTCClock;
