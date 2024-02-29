import React from 'react';

const withGlobalWrapper = (Story) => (
  <div className="container">
    <Story />
  </div>
);

export { withGlobalWrapper };
