import React from 'react';
import styled from 'styled-components';
import { colors, fonts, breakpoints } from "../theme";
import sponsorFormidable from '../images/sponsors/formidable.png';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: ${breakpoints.wide}px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Thanks = styled.div`
  font-family: ${fonts.heading};
  font-size: 1.2rem;
  text-align: center;
  color: ${colors.black};
  margin: 40px 0;
`;


const SponsorImage = styled.img`
  width: 300px;
  @media only screen and (max-width: ${breakpoints.medium}px) {
    width: 50vw;
  }
`;

export default () => (
  <>
  <Wrapper>
    <a href="https://formidable.com">
      <SponsorImage src={sponsorFormidable}></SponsorImage>
    </a>
  </Wrapper>
  </>
)
