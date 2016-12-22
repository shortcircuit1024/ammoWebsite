var React = require('react');

var Home = (props) => {
    return (
        <div className="row container-fluid" id="homeLanding">
          <div className="col-sm-8 offset-sm-2 text-lg-center">
            <h2 className="landingText" style={{ fontFamily: 'Electrolize', marginTop: '25%', color: 'white'}}>Armitage Mobile Militia Offensive</h2>
            <h1 className="landingText" style={{ fontFamily: 'Electrolize', marginTop: '0%', color: '#F59B45'}}>A.M.M.O.</h1>
            <p className="landingText"></p>
          </div>
        </div>
    )
};

module.exports = Home;
