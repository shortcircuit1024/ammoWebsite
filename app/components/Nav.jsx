var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <nav className="navbar navbar-full navbar-dark bg-inverse" style={{
            fontFamily: 'Electrolize'
        }}>
            <img src="/assets/AMMO_writing.svg" width="35" height="35" alt=""/>
            <span></span>
            <IndexLink to="/" className="nav-item" style={{
                fontSize: '115%',
                color: '#FFFFFF'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>Home</IndexLink>
            <span></span>
            <IndexLink to="/scheduler" className="nav-item" style={{
                fontSize: '115%',
                color: '#FFFFFF'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>Scheduler</IndexLink>
            <span></span>
            <IndexLink to="/floatila" className="nav-item" style={{
                fontSize: '115%',
                color: '#FFFFFF'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>Solo Flotilia</IndexLink>
            <span></span>
            <IndexLink to="/fleet" className="nav-item" style={{
                fontSize: '115%',
                color: '#FFFFFF'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>Main Fleet</IndexLink>
            <span></span>
            <IndexLink to="/profile" className="nav-item float-xs-right" style={{
                fontSize: '115%',
                color: '#FFFFFF'
            }} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45',
                borderBottom: '4px solid #F59B45',
                textDecoration: 'none'
            }}>Profile</IndexLink>
        </nav>
    );
};

module.exports = Nav;
