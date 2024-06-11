// Mock data simulating API response
const articlesData = [
  {
    id: 'article1',
    title: 'Demystifying Custom Hooks in React',
    description: 'Explore the power of custom hooks in React to simplify your code and make it more reusable.',
    readTime: 10,
    createdAt: '2024-01-28T00:00:00Z',
    tags: [
      { id: 1, name: 'React' },
      { id: 2, name: 'Hooks' },
    ],
    url: 'https://dev.to/dev_waliba/demystifying-custom-hooks-in-react-38md',
    contentBlocks: [{ content: 'Introduction to Custom Hooks' }, { content: 'How to create a Custom Hook' }],
    cover_image: 'https://example.com/path/to/image.jpg',
  },
  {
    id: 'article2',
    title: 'Mint your Own NFTs with Wagmi — A Beginner’s Guide.',
    description: 'A step-by-step guide to developing your own NFTs using the Wagmi library.',
    readTime: 13,
    createdAt: '2024-06-11T00:00:00Z',
    tags: [
      { id: 3, name: 'Blockchain' },
      { id: 4, name: 'NFTs' },
    ],
    url: 'https://medium.com/@donwaleyb/mint-your-own-nfts-with-wagmi-a-beginners-guide-6148f9ee324f',
    contentBlocks: [{ content: 'Getting Started with NFTs' }, { content: 'Using Wagmi for NFT development' }],
    cover_image: 'https://example.com/path/to/nft/image.jpg',
  },
];

export default articlesData;
