var React = require('react');
var {Link, IndexLink} = require('react-router');

var UTCClock = require('UTCClock');

var Nav = () => {
    return (
        <nav className="navbar navbar-fixed-top navbar-full navbar-dark bg-inverse row hidden-xs-down" style={{
            fontFamily: 'Electrolize',
            height:'50px'
        }}> <span className="col-sm-8">
            <IndexLink to="/"><img src="/assets/AMMO_no_writing.svg" className="float-xs-left" width="35" height="35" alt=""/></IndexLink>
            <IndexLink to="/" className="nav-item float-sm-left" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active float-sm-left" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Home</IndexLink>
            <IndexLink to="/scheduler" className="nav-item float-sm-left" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Scheduler</IndexLink>
            <IndexLink to="/floatila" className="nav-item float-sm-left" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Solo Flotilia</IndexLink>
            <IndexLink to="/fleet" className="nav-item float-sm-left" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Main Fleet</IndexLink>
          <IndexLink to="/about" className="nav-item float-sm-left" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   About</IndexLink></span>
          <div className="nav item float-sm-left col-sm-2" style={{padding: '7px'}}>    <UTCClock/></div><span className=" col-sm-2">
            <IndexLink to="/profile" className="nav-item float-sm-right hidden-xs-down" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>Profile</IndexLink></span>
        </nav>
    );
};

module.exports = Nav;
