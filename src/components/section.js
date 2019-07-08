import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../theme';

const Section = styled.section`
  margin-bottom: 4rem;
  font-family: ${fonts.body};
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.15rem;
  color: ${colors.black};

  a {
    color: ${colors.accent};
  }
`;

const Title = styled.h2`
  color: ${colors.accent};
  font-family: ${fonts.title};
  font-size: 2rem;
  font-weight: normal;
`;

export default ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    <hr />
    {children}
  </Section>
);