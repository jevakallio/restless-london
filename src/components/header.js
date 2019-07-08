import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { colors, fonts } from "../theme";
import Logo from './logo';
import Lift from './lift';

const Wrapper = styled.header`
  background: ${colors.background};
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-family: ${fonts.title};
  font-size: 3rem;
  font-weight: normal;
  color: ${colors.white};
  line-height: 3rem;
  text-align: center;
`;
const TitleWord = styled.span`
  display: block;
  position: relative;
  left: ${props => props.offsetLeft || 0}px;
`;

const Accent = styled.span`
  color: ${colors.accent};
`;

const Subtitle = styled.div`
  font-family: ${fonts.heading};
  font-size: 1.2rem;
  color: ${colors.white};
  margin-top: 10px;
`;

const Header = ({ siteTitle }) => (
  <>
  <Wrapper>
    <Logo hostClassName="zdog-logo" size={240} />
    <Title>
      <TitleWord>
        <Accent>Rest</Accent>less
      </TitleWord>
      <TitleWord offsetLeft={2}>
        <Accent>Lon</Accent>don
      </TitleWord>
    </Title>
    <Subtitle>
      A GraphQL meetup.
    </Subtitle>
  </Wrapper>
  <Lift />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
