// Global decorators.
const withGlobalWrapper = (Story) => `
  <div class="container">
    ${Story()}
  </div>
`;

const withBackground = (Story) => `
  <div class="bg-ucla-blue p-5">
    ${Story()}
  </div>
`;

const SantaBarbaraSandBg = (Story) => `
  <div class="bg-santa-barbara-sand layout--onecol p-10">
    ${Story()}
  </div>
`;

const VeniceCanalBg = (Story) => `
  <div class="bg-venice-canal layout--onecol p-10">
    ${Story()}
  </div>
`;

export { withGlobalWrapper, withBackground, SantaBarbaraSandBg, VeniceCanalBg };
