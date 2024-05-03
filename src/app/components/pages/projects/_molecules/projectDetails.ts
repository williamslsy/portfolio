import safeLaunch from '../../../../../../public/images/safeLaunch.png';
import ecfPlatform from '../../../../../../public/images/ecf-platform.png';
import pokemonDapp from '../../../../../../public/images/pokemon-dapp.png';
import zuzapp from '../../../../../../public/images/zuzapp.png';
import carbonVote from '../../../../../../public/images/carbon-vote.png';
import cryptoScreener from '../../../../../../public/images/crypto-screener.png';
import etherscanExplorer from '../../../../../../public/images/etherscan-explorer.png';
import wibeStudio from '../../../../../../public/images/wibe-studio.png';

export const projectDetails = [
  {
    id: 1,
    tag: 'web3',
    builtTool: ['Nextjs', 'Shadcn-ui', 'TailwindCSS', 'GraphQL', 'Redux', 'Typescript', 'MongoDB', 'Nestjs', 'PostMan', 'Ethersjs', 'Web3js'],
    name: 'ECF Platform',
    description:
      'a web app that provides a set of tools and features which enable its community of users to coordinate ideas, influence, and funds, that is peer-to-peer, open, and includes its own incentive system of user actions to ensure accountability, quality engagement and verifiable information over time.',
    image: ecfPlatform,
    repo: 'https://github.com/williamslsy',
    url: 'https://ecf-v1.vercel.app',
  },
  {
    id: 2,
    tag: 'web3',
    builtTool: ['Nextjs', 'Typescript', 'TailwindCSS', 'Radix-ui', 'ZK-PCD', 'Ethersjs', 'Wagmi', 'Viem', 'Zustand', 'Hardhat', 'Solidity'],
    name: 'CarbonVote 2.0',
    description:
      'serving as a platform for gauging community sentiment on proposals related to the Ethereum network and as a tool that can be used for similar purposes in other community affairs. This platform allows users to vote on issues offering a space for decentralized decision-making.',
    image: carbonVote,
    repo: 'https://github.com/EthereumCommunityFund/CarbonVote',
    url: 'https://beta.carbonvote.com',
  },
  {
    id: 3,
    tag: 'web3',
    builtTool: ['Nextjs-SSR', 'Shadcn-ui', 'TailwindCSS', 'Context-API', 'Typescript', 'Wagmi', 'Viem', 'Web3Modal', 'Hardhat', 'Solidity'],
    name: 'Pokemon Dapp',
    description:
      'I recently developed a decentralized application that allows users to collect Pokemon NFTs via MetaMask transactions. This project showcases my proficiency with: Next.js for server-side rendering Shadcn for UI components, and Tailwind CSS for design. It also integrates Wagmi/Viem and Web3Modal for wallet connections, and utilizes Hardhat and Solidity with OpenZeppelin for smart contract development on the Sepolia testnet.',
    image: pokemonDapp,
    repo: 'https://github.com/williamslsy/pokemon-dapp',
    url: 'https://pokemon-dapp.vercel.app',
  },
  {
    id: 4,
    tag: 'web3',
    builtTool: ['reactJS', 'typescript', 'tailwind-css', 'solidity', 'hardhat', 'framer-motion'],
    name: 'Dotlaunch',
    description:
      "I contributed to SafeLaunch, Dotlaunch's crypto token launchpad, addressing liquidity challenges in token launches. SafeLaunch enabled successful fundraising through its user-friendly interface, helping me achieve my project's goals.",
    image: safeLaunch,
    repo: 'https://github.com/williamslsy/dotlaunch',
    url: 'https://dotlaunch.netlify.app',
  },
  {
    id: 5,
    tag: 'web3',
    builtTool: ['Nextjs-SSR', 'Tailwind', 'Shadcn-ui', 'Tanstack-Query', 'Radix-ui', 'Supabase', 'Turborepo', 'Node', 'ZK-PCD', 'Vercel'],
    name: 'Zuzalu.city',
    description: 'a ZK-authenticated(Zupass) super events app for coordination efforts in the Zuzalu network state community',
    image: zuzapp,
    repo: 'https://github.com/EthereumCommunityFund/Zuzapp-v1',
    url: 'https://zuzalu.city',
  },
  {
    id: 6,
    tag: 'web3',
    builtTool: ['React', 'TailwindCSS', 'React Router', 'Recharts', 'Context API'],
    name: 'Crypto Screener App',
    description:
      'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.',
    image: cryptoScreener,
    repo: 'https://github.com/williamslsy/crypto_screener',
    url: 'https://crypto-bucks.netlify.app',
  },

  {
    id: 7,
    tag: 'web3',
    builtTool: ['Nextjs-SSR', 'TailwindCSS', 'Shadcn-ui', 'Context API'],
    name: 'Etherscan Explorer',
    description: 'a simple etherscan explorer built with Next.js',
    image: etherscanExplorer,
    repo: 'https://github.com/williamslsy/etherscan-explorer',
    url: 'https://sly-etherscan-explorer.vercel.app/',
  },
  {
    id: 8,
    tag: 'webApp',
    builtTool: ['React', 'Styled-Components', 'Locomotive Scroll', 'Framer-motion', 'GSAP'],
    name: 'Fashion Studio Website',
    description:
      'a stunning Fashion Studio Website Landing page with React JS. This website is created using locomotive-scroll for smooth scrolling. Also, GSAP and Framer-Motion for some custom animations and effects',
    image: wibeStudio,
    repo: 'https://github.com/williamslsy/wibe-studio',
    url: 'https://waliba-wibestudio.netlify.app/',
  },
];
