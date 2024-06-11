'use client';
import { useSearchParams } from 'next/navigation';
import { styled } from 'styled-components';
import PageContainer from '../_molecules/PageContainer';
import ContentCard from '../_molecules/ContentCard';
import CardContent from './_molecules/CardContent';
import Category from './_molecules/Category';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Iprops {
  tags: { id: number; name: string }[];
  allPost: any[];
  params?: string;
}

const Articles = ({ tags, allPost, params }: Iprops) => {
  const [allPosts, setAllPosts] = useState(allPost);
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');

  const blogPosts = [
    {
      createdAt: new Date('2024-01-28').getTime(),
      title: 'Demystifying Custom Hooks in React',
      description: '',
      readTime: 10,
      tags: [],
      url: 'https://dev.to/dev_waliba/demystifying-custom-hooks-in-react-38md',
    },
    {
      createdAt: new Date('2024-06-11').getTime(),
      title: 'Mint your Own NFTs with Wagmi — A Beginner’s Guide.',
      description: '',
      readTime: 13,
      tags: [],
      url: 'https://medium.com/@donwaleyb/mint-your-own-nfts-with-wagmi-a-beginners-guide-6148f9ee324f',
    },
  ];

  return (
    <PageContainer>
      <InnerContainer>
        <InnerContent>
          <Section>
            {params && <h3>{`${params} tag with (${allPosts.length}) articles`}</h3>}
            {blogPosts.map((post) => (
              <SectionBlog key={post.title}>
                <Link href={post.url}>
                  <ContentCard fullWidth ExtraComp={<CardContent title={post.title} description={post.description} tags={post.tags} createdAt={post.createdAt} readTime={post.readTime} />} />
                </Link>
              </SectionBlog>
            ))}
          </Section>
          <AsideSection>
            <Aside>
              <h2>Tags</h2>
              <Categories>
                {tags.map((tag) => (
                  <Link key={tag.id} href={`/blog?tag=${tag.name}`}>
                    <Category title={tag.name} />
                  </Link>
                ))}
              </Categories>
            </Aside>
          </AsideSection>
        </InnerContent>
      </InnerContainer>
    </PageContainer>
  );
};

export default Articles;

const InnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 2.4rem;
  display: flex;
  padding-bottom: 10rem;

  @media (max-width: 1100px) {
    height: auto;
  }
`;

const InnerContent = styled.main`
  width: 100%;
  padding: 0 6rem;
  display: grid;
  grid-template-columns: minmax(78rem, 1fr) 1fr;
  column-gap: 3rem;
  grid-template-areas: 'post side';

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  @media (max-width: 725px) {
    padding: 0;
  }
`;

const Section = styled.section`
  overflow: auto;
  grid-area: post / post / post / post;

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;

const SectionBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  > a {
    margin-bottom: 2rem;
  }
`;

const AsideSection = styled.section`
  grid-area: side / side / side / side;
`;

const Aside = styled.aside`
  width: 100%;
  position: sticky;
  top: 16rem;

  h2 {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;

const Categories = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
`;
