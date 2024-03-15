import parse from 'html-react-parser';

import person from './related-content.twig';
import data from './related-content.yml';

const settings = {
  title: 'Collections/Related content',
  render: (args) => parse(person(args)),
  args: { ...data },
};

const RelatedContent = {
  name: 'Related content',
  args: { ...data },
};

export default settings;
export { RelatedContent };
