import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../theme';
import Speaker from './speaker';

const Wrapper = styled.div`
  margin-bottom: 3rem;
`;

const Title = styled.h3`
  color: ${colors.black};
  font-family: ${fonts.heading};
  font-size: 1.2rem;
  text-transform: uppercase;
`;

const Synopsis = styled.div`
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.15rem;
  margin-top: 1rem;
`;

const Speakers = styled.div``;

const Talk = ({ title, synopsis, speakers }) => {
  return <Wrapper>
    <Title>{title}</Title>
    <Speakers>
      {speakers.map(speaker => <Speaker {...speaker} />)}
    </Speakers>
    <Synopsis>{synopsis}</Synopsis>
  </Wrapper>
};

export default Talk;