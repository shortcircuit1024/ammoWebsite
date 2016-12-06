var React = require('react');

var aegisShips = {
  avengerTitan: {
    name: 'Avenger Titan',
    role: 'Cargo',
    classification: 'Fighter',
    crew: 1,
    lti: false,
    cargo: 4
  },
  avengerStalker: {
    name: 'Avenger Stalker',
    role: 'Interceptor',
    classification: 'Fighter',
    crew: 1,
    maxCrew: 7,
    lti: false,
    cargo: 4
  },
  avengerWarlock: {
    name: 'Avenger Warlock',
    role: 'E-Warfare',
    classification: 'Fighter',
    crew: 1,
    lti: false,
    cargo: 4
  },
  avengerRenegade: {
    name: 'Avenger Renegade',
    role: 'Unlisted',
    classification: 'Fighter',
    crew: 1,
    lti: false,
    cargo: 4
  },
  gladius: {
    name: 'Gladius',
    role: 'Patrol',
    classification: 'Fighter',
    crew: 1,
    lti: false,
    cargo: 0
  },
  gladiusValiant: {
    name: 'Gladius Valiant',
    role: 'Patrol',
    classification: 'Fighter',
    crew: 1,
    lti: false,
    cargo: 0
  },
  redeemer: {
    name: 'Redeemer',
    role: 'Dropship',
    classification: 'Gunship',
    crew: 5,
    maxCrew: 11,
    lti: false,
    cargo: 24
  },
  vanguardWarden: {
    name: 'Vanguard Warden',
    role: 'Long Range Fighter',
    classification: 'Heavy Fighter',
    crew: 2,
    lti: false,
    cargo: 0
  },
  vanguardHarbinger: {
    name: 'Vanguard Harbinger',
    role: 'Bomber',
    classification: 'Fighter Bomber',
    crew: 2,
    lti: false,
    cargo: 0
  },
  vanguardSentinel: {
    name: 'Vanguard Warden',
    role: 'E-Warfare',
    classification: 'Heavy Fighter',
    crew: 2,
    lti: false,
    cargo: 0
  },
  vanguardHopilite: {
    name: 'Vanguard Warden',
    role: 'Unlisted',
    classification: 'Fighter Dropship',
    crew: 2,
    lti: false,
    cargo: 0
  },
  sabre: {
    name: 'Sabre',
    role: 'Superiority fighter',
    classification: 'Heavy Fighter',
    crew: 1,
    lti: false,
    cargo: 0
  },
  sabreComet: {
    name: 'Sabre Comet',
    role: 'Superiority fighter',
    classification: 'Heavy Fighter',
    crew: 1,
    lti: false,
    cargo: 0
  },
  retaliatorBase: {
    name: 'Retaliator Base',
    role: '',
    classification: '',
    crew: 6,
    lti: false,
    cargo: 4
  },
  retaliatorBomber: {
    name: 'Retaliator Bomber',
    role: '',
    classification: '',
    crew: 6,
    lti: false,
    cargo: 4
  },
  reclaimer: {
    name: 'Reclaimer',
    role: 'Salvage',
    classification: '',
    crew: 5,
    lti: false,
    cargo: 6555
  },
  idrisP: {
    name: 'Idris-P',
    role: 'Peacekeeper',
    classification: 'Frigate',
    crew: 10,
    lti: false,
    cargo: 1720
  },
  idrisM: {
    name: 'Idris-M',
    role: 'Miitary',
    classification: 'Frigate',
    crew: 10,
    lti: false,
    cargo: 860
  },
  javelin: {
    name: 'Javelin',
    role: 'Military',
    classification: 'Destroyer',
    crew: 7,
    maxCrew: 30,
    lti: false,
    cargo: 5400
  }
};

var consoOutland = {
  mustangA: {
    name: 'Mustang Alpha',
    role: 'Starter',
    classification: 'Light Fighter',
    crew: 1,
    lti: false,
    cargo: 10
  },
  mustangB: {
    name: 'Mustang Beta',
    role: 'Exploration',
    classification: 'Light Fighter',
    crew: 1,
    lti: false,
    cargo: 10
  },
  mustangG: {
    name: 'Mustang Gamma',
    role: 'Racing',
    classification: 'Light Fighter',
    crew: 1,
    lti: false,
    cargo: 10
  },
  mustangD: {
    name: 'Mustang Delta',
    role: 'Fighter',
    classification: 'Light Fighter',
    crew: 1,
    lti: false,
    cargo: 860
  },
  mustangO: {
    name: 'Mustang Omega',
    role: 'Racing',
    classification: 'Light Fighter',
    crew: 1,
    lti: false,
    cargo: 5400
  }
};



var Floatila = (props) => {
    return (
        <div>
          <h3>Welcome to our Flotilia</h3>
        </div>
    )
};

module.exports = Floatila;
