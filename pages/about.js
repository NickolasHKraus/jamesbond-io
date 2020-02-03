import React from 'react';
import styled from 'styled-components';

import {GlobalStyle} from '../components/Utils';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar';

const AboutContainer = styled.div`
    padding-top: 80px;
    font-family: 'Rubik';
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    flex: 1;
    margin: 0 auto;
    max-width: 690px;
    width: 100%;

    @media (min-width: 690px) {
        padding-top: 120px;
    }
`;

const About = styled.main`
    background-color: white;
    border-radius: 5px;
    padding: 24px;
    box-shadow: 2px 2px 4px 0px #cfd8dc;

    p {
        margin-bottom: 34px;
    }

    @media (min-width: 500px) {
        padding: 30px 75px;
    }
`;

const StyledLink = styled.a`
    color: #184a89;
    text-decoration: none;
    transition: all 0.15s ease;

    :hover {
        text-decoration: underline;
        transition: all 0.15s ease;
    }
`;

const InnovationIowa = styled.img`
    margin: 0 auto;
    max-width: 200px;
    display: flex;

    @media (min-width: 737px) {
        margin: 0 auto;
    }
`;

const ProgrammerSvg = styled.img`
    max-width: 400px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    margin-bottom: 50px;
`;

const Page = () => (
    <>
        <GlobalStyle />
        <NavBar />
        <AboutContainer>
          <About>
            <p>
              {`
              When building a static website for myself or a client, it is
              sometimes necessary that I alter the underlying functionality of
              the Hugo theme. In such case, I create a clean fork of the
              desired theme, make my alteration, and open-source the result.
              `}
            </p>
            <p>
              {`
              This website is a gallery of the Hugo themes I have forked,
              extended, or modified. Acknowledges are given in the README.md
              and content of the resulting demo website to the original author
              of the theme.
              `}
            </p>
            <p>
              {`
              All works are licensed under MIT License. Feel free to use,
              modify, and distribute any themes on this site.
              `}
            </p>
          </About>
        </AboutContainer>
        <Footer />
    </>
);

export default Page;
