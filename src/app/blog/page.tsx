import { Metadata } from 'next';
import Articles from '../components/pages/articles';
import { Fragment } from 'react';
import articlesData from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Personal Blog',
  description: 'A personal blog that outlines my journey as a full-stack developer curated with my experiences and what i have learnt. Built with Next.js and Nest.js',
  keywords: 'web development, web design, blog, technical writer, react, javascript, nextjs, typescript, solidity, node.js, html, css, nest.js, technical, styled-components',
};

const ArticlePage = () => {
  const allPost = articlesData;
  const tags = Array.from(new Set(allPost.flatMap((article) => article.tags.map((tag) => tag.name)))).map((name, id) => ({ id, name }));

  return <Fragment>{<Articles allPost={allPost} tags={tags} />}</Fragment>;
};

export default ArticlePage;
