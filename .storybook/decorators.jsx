import React from 'react';

const withGlobalWrapper = (Story) => (
  <div className="container">
    <Story />
  </div>
);

const withBackground = (Story) => (
  <div style={{ background: '#2874af', padding: '40px' }}>
    <Story />
  </div>
);

const SantaBarbaraSandBg = (Story) => (
  <div className="bg-santa-barbara-sand layout--onecol" style={{ background: '#F6F4EE', padding: '40px' }}>
    <Story />
  </div>
);

const VeniceCanalBg = (Story) => (
  <div className="bg-venice-canal layout--onecol"  style={{ background: '#1A7E89', padding: '40px' }}>
    <Story />
  </div>
);

export { withGlobalWrapper, withBackground, SantaBarbaraSandBg, VeniceCanalBg};
