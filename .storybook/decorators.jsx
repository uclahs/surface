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

export { withGlobalWrapper, withDarkMode};
