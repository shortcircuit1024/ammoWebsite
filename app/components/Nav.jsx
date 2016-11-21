var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <nav className="navbar navbar-dark bg-inverse" style={{ fontFamily: 'Electrolize' }}>
          <img src="/assets/favicon_v3.png" width="30" height="30" alt=""/>
          <span>   </span>
            <IndexLink to="/" className="nav-item" style={{ fontSize: '115%', color: '#FFFFFF'}} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45'
            }}>Home</IndexLink>
            <span>   </span>
            <IndexLink to="/scheduler" className="nav-item" style={{ fontSize: '115%', color: '#FFFFFF'}} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45'
            }}>Scheduler</IndexLink>
            <span>   </span>
            <IndexLink to="/floatila" className="nav-item" style={{ fontSize: '115%', color: '#FFFFFF'}} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45'
            }}>Solo Flotilia</IndexLink>
            <span>   </span>
            <IndexLink to="/fleet" className="nav-item" style={{ fontSize: '115%', color: '#FFFFFF'}} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45'
            }}>Main Fleet</IndexLink>
            <span>   </span>
            <IndexLink to="/profile" className="nav-item" style={{ fontSize: '115%', color: '#FFFFFF'}} activeClassName="nav-item active" activeStyle={{
                color: '#F59B45'
            }}>Profile</IndexLink>
        </nav>
    );
};

module.exports = Nav;
