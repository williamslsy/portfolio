import React, { Fragment } from 'react';
import Article from '@/app/components/pages/articles/article';
import articlesData from '@/lib/constants'; // Ensure the data is correctly imported
import { Metadata, ResolvingMetadata } from 'next';

// Define the props type for the page component
interface ArticleSinglePageProps {
  params: {
    slug: string;
  };
}

// Define the structure of the data used in articles
interface ArticleData {
  id: string;
  title: string;
  contentBlocks: { content: string }[];
  cover_image: string;
  tags: { name: string }[];
}

// Define props for metadata generation function
interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Generate metadata for SEO and social sharing
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const result = articlesData.find((article) => article.id === params.slug) as ArticleData;
  if (!result) throw new Error('Article not found');

  return {
    title: result.title,
    description: result.contentBlocks[1]?.content || '',
    keywords: result.tags.map((tag) => tag.name).join(','),
    authors: [{ name: 'Waliba', url: 'https://github.com/williamslsy' }],
    publisher: 'Waliba',
    openGraph: {
      title: result.title,
      description: result.contentBlocks[1]?.content || '',
      type: 'article',
      url: `/blog/${params.slug}`,
      images: [result.cover_image],
      siteName: 'Waliba',
      locale: 'en_US',
    },
  };
}

// Component that renders a single article
const ArticleSinglePage = ({ params: { slug } }: ArticleSinglePageProps) => {
  const result = articlesData.find((article) => article.id === slug) as ArticleData;
  if (!result) throw new Error('Article not found');

  return <Fragment>{<Article post={result} />}</Fragment>;
};

export default ArticleSinglePage;
