import React from 'react';

const withGlobalWrapper = (Story) => (
  <div className="container">
    <Story />
  </div>
);

const withBackground = (Story) => (
  <div className="bg-ucla-blue p-5">
    <Story />
  </div>
);

const SantaBarbaraSandBg = (Story) => (
  <div className="bg-santa-barbara-sand layout--onecol p-10">
    <Story />
  </div>
);

const VeniceCanalBg = (Story) => (
  <div className="bg-venice-canal layout--onecol p-10">
    <Story />
  </div>
);

export { withGlobalWrapper, withBackground, SantaBarbaraSandBg, VeniceCanalBg};
