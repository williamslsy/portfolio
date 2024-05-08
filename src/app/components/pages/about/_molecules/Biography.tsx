import Letter from '@/app/components/Common/AnimatedLetter';
import React from 'react';
import { styled } from 'styled-components';
import ContentCard from '../../_molecules/ContentCard';
import NumberCountAnimation from '@/app/components/Common/NumberCountAnimation';
import { motion } from 'framer-motion';
import Sylvester from '@/images/olawale.jpg';

const Biography = () => {
  return (
    <MainContainer>
      <Letter text="Crafting Digital Experiences with Passion." />
      <ContentContainer>
        <ImageContainer>
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100 }}>
            <ContentCard img={Sylvester} alt="A picture of Sylvester Olawale" borderRadius priority={true} fullWidth imageAvail />
          </motion.div>
        </ImageContainer>
        <BiographyContainer>
          <motion.h3 initial={{ y: '30%', opacity: 0 }} animate={{ y: '0', opacity: 1 }}>
            quick biography
          </motion.h3>
          <motion.p initial={{ y: '30%', opacity: 0 }} animate={{ y: '0', opacity: 1 }} transition={{ delay: 0.5 }}>
            Hello, I am Sylvester Olawale, a seasoned FE heavy Full-stack DApp engineer with over 7 years of extensive experience in developing robust, scalable, and user-centric web applications. My
            career has been driven by a continuous pursuit of excellence and a deep commitment to leveraging decentralized technology to creating functional, beautiful and secure digital experiences
            that center on user needs and business goals. I’m passionate about creating innovative solutions that push the boundaries of what’s possible and deliver exceptional value. I am relentless
            in my mission to achieve my clients&apos; goals with precision, speed, robust security, and scalability.
          </motion.p>
          <motion.p initial={{ y: '30%', opacity: 0 }} animate={{ y: '0', opacity: 1 }} transition={{ delay: 1 }}>
            Beyond coding and design, my career reflects continuous growth and adaptability. Starting with web development and moving into decentralized applications, every step has been crucial for
            my development. I&apos;ve honed my skills in creating flawless user interfaces and explored the complex blockchain space, blending technology with creativity. This comprehensive approach
            allows me to add versatility to every project, turning abstract concepts into practical digital solutions.
          </motion.p>
          <motion.p initial={{ y: '30%', opacity: 0 }} animate={{ y: '0', opacity: 1 }} transition={{ delay: 1.5 }}>
            As the digital space continues to expand, my journey as a developer thrives on endless curiosity. I’ve taken on the challenge of building detailed backend systems and designing user
            interfaces that captivate. Juggling the precise demands of technology with the beauty of design, I work with a broad spectrum of tools from Next.js, Typescript, Tailwind CSS and UI
            libraries of sorts to Node.js, SQL/NoSQL DBs and cutting-edge blockchain technologies like Solidity, Hardhat, Ethers libraries, Wagmi/Viem. My dedication extends beyond just writing code;
            I’m committed to creating stories and experiences that better the world through decentralization and the proliferation of public goods enabling positive-sum games.
          </motion.p>
        </BiographyContainer>
        <Stats>
          <div>
            <span>
              <span>{<NumberCountAnimation value={35} />}</span>+
            </span>
            <h4>happy clients 😋</h4>
          </div>
          <div>
            <span>
              <span>{<NumberCountAnimation value={40} />}</span>+
            </span>
            <h4>projects completed 👨‍💻</h4>
          </div>
          <div>
            <span>
              <span>{<NumberCountAnimation value={7} />}</span>+
            </span>
            <h4>years of experience 🔬</h4>
          </div>
        </Stats>
      </ContentContainer>
    </MainContainer>
  );
};

export default Biography;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.2rem;
`;

const ContentContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  row-gap: 5rem;
  column-gap: 8rem;

  @media (max-width: 50em) {
    column-gap: 0;
    row-gap: 4rem;
  }
`;

const ImageContainer = styled.div`
  grid-column: span 3 / span 3;
  width: 100%;

  @media (max-width: 50em) {
    grid-column: span 8 / span 8;
  }
`;

const BiographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.4rem;
  grid-column: span 5 / span 5;

  h3 {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 2.4rem;
  }

  @media (max-width: 50em) {
    grid-column: span 8 / span 8;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2.4rem;
  align-items: center;
  grid-column: span 8 / span 8;

  > div {
    text-align: center;
    span {
      font-size: 6rem;
      font-weight: 600;
      margin: 0;
    }

    h4 {
      opacity: 0.7;
      font-size: 2rem;
      text-transform: capitalize;
    }
  }

  @media (max-width: 50em) {
    > div {
      span {
        font-size: 4rem;
      }
    }
  }

  @media (max-width: 50em) {
    flex-direction: column;
  }
`;
