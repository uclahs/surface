import parse from 'html-react-parser';

import article from './article-teaser.twig';
import data from './article-teaser.yml';

const settings = {
  title: 'Collections/Article teaser',
};

export const ArticleTeaser = {
  name: 'Article teaser',
  args: { ...data },
  render: (args) => parse(article(args)),
};

export const ArticleList = {
  ...ArticleTeaser,
  name: 'Article list',
  args: {
    ...data,
    modifier: 'article-listing',
    image: '',
  },
};

export default settings;
