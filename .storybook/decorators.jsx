import React from 'react';

const withGlobalWrapper = (Story) => (
  <div className="container">
    <Story />
  </div>
);

const withDarkMode = (Story) => (
  <div style={{ background: '#2874af', padding: '40px' }}>
    <Story />
  </div>
);

const SantaBarbaraSandBg = (Story) => (
  <div className="bg-santa-barbara-sand.layout--onecol" style={{ background: 'hsl(45 31% 95%)', padding: '40px' }}>
    <Story />
  </div>
);

const VeniceCanalBg = (Story) => (
  <div className="bg-venice-canal.layout--onecol"  style={{ background: 'hsl(186 68% 32%)', padding: '40px' }}>
    <Story />
  </div>
);

export { withGlobalWrapper, withDarkMode, SantaBarbaraSandBg, VeniceCanalBg};
