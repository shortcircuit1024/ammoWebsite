var React = require('react');
var {Link, IndexLink} = require('react-router');

var UTCClock = require('UTCClock');

var Nav = () => {
    return (
        <nav className="navbar navbar-fixed-top navbar-full navbar-dark bg-inverse" style={{
            fontFamily: 'Electrolize',
            height:'50px'
        }}>
            <IndexLink to="/"><img src="/assets/AMMO_no_writing.svg" className="float-xs-left" width="35" height="35" alt=""/></IndexLink>
            <IndexLink to="/" className="nav-item float-sm-left hidden-xs-down" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active float-sm-left hidden-xs-down" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Home</IndexLink>
            <IndexLink to="/scheduler" className="nav-item float-sm-left hidden-xs-down" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Scheduler</IndexLink>
            <IndexLink to="/floatila" className="nav-item float-sm-left hidden-xs-down" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Solo Flotilia</IndexLink>
            <IndexLink to="/fleet" className="nav-item float-sm-left hidden-xs-down" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   Main Fleet</IndexLink>
          <IndexLink to="/about" className="nav-item float-sm-left hidden-xs-down" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>   About</IndexLink>
          <div className="nav item float-sm-left hidden-xs-down" style={{color:'gray', padding: '7px'}}>    <UTCClock/></div>
            <IndexLink to="/profile" className="nav-item float-sm-right hidden-xs-down" style={{
                fontSize: '115%',
                color: '#FFFFFF',
                padding: '5px'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>Profile</IndexLink>

          <IndexLink to="/" className="nav-item float-xs-left hidden-sm-up" style={{
              fontSize: '115%',
              color: '#FFFFFF',
              padding: '5px'
          }} activeClassName="nav-item active float-xs-left hidden-sm-up" activeStyle={{
              color: '#F59B45',
              borderBottom: '4px solid #F59B45',
              textDecoration: 'none'
          }}><span className="fa fa-home" aria-hidden="true"></span></IndexLink>
          <IndexLink to="/scheduler" className="nav-item float-xs-left hidden-sm-up" style={{
              fontSize: '115%',
              color: '#FFFFFF',
              padding: '5px'
          }} activeClassName="nav-item active" activeStyle={{
              color: '#F59B45',
              borderBottom: '4px solid #F59B45',
              textDecoration: 'none'
          }}><span className="fa fa-calendar" aria-hidden="true"></span></IndexLink>
          <IndexLink to="/floatila" className="nav-item float-xs-left hidden-sm-up" style={{
              fontSize: '115%',
              color: '#FFFFFF',
              padding: '5px'
          }} activeClassName="nav-item active" activeStyle={{
              color: '#F59B45',
              borderBottom: '4px solid #F59B45',
              textDecoration: 'none'
          }}><span className="fa fa-user" aria-hidden="true"></span></IndexLink>
          <IndexLink to="/fleet" className="nav-item float-xs-left hidden-sm-up" style={{
              fontSize: '115%',
              color: '#FFFFFF',
              padding: '5px'
          }} activeClassName="nav-item active" activeStyle={{
              color: '#F59B45',
              borderBottom: '4px solid #F59B45',
              textDecoration: 'none'
          }}><span className="fa fa-users" aria-hidden="true"></span></IndexLink>
        <IndexLink to="/profile" className="nav-item float-xs-right hidden-sm-up" style={{
              fontSize: '115%',
              color: '#FFFFFF',
              padding: '5px'
          }} activeClassName="nav-item active" activeStyle={{
              color: '#F59B45',
              borderBottom: '4px solid #F59B45',
              textDecoration: 'none'
          }}><span className="fa fa-user-circle" aria-hidden="true"></span></IndexLink>
        </nav>
    );
};

module.exports = Nav;
