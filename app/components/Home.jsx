var React = require('react');

var Home = (props) => {
    return (
        <div className="row container-fluid" id="homeLanding">
          <div className="col-sm-8 offset-sm-2 text-lg-center">
            <h3 className="landingText" style={{ fontFamily: 'Electrolize', textAlign: 'center', marginTop: '25%', color: 'white'}}>Armitage Mobile Militia Offensive</h3>
            <h1 className="landingText" style={{ fontFamily: 'Electrolize', textAlign: 'center', marginTop: '0%', color: '#F59B45'}}><b> A . M . M . O . </b></h1>
            <p className="landingText"></p>
          </div>
        </div>
    )
};

module.exports = Home;
