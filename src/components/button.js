import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../theme';

const Wrapper = styled.a`
  cursor: pointer;
  position: relative;
  font-size: 1rem;
  padding: 0.5em 2em;
  background: ${props => props.inverse ? colors.white : colors.accent};
  color: ${props => props.inverse ? colors.accent : colors.white} !important;
  border-radius: 0.2rem;
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease-in-out;
  user-select: none;
  box-shadow: 0 0.2rem 0 0 rgba(42, 9, 27, 0.2);

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(1.04);
  }
`;

const Text = styled.span`
  display: block;
  font-family: ${fonts.title};
  font-size: 1.5rem;
  line-height: 1.5rem;
`;

const Button = ({ target, children, inverse }) => (
  <Wrapper inverse={inverse} target="_blank" rel="noopener" href={target}>
    <Text>{children}</Text>
  </Wrapper>
);

export default Button;