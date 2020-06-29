import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../theme';


const Wrapper = styled.div`
  color: ${colors.black};
  font-family: ${fonts.heading};
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  margin: 0 0.75rem 0 0;
  border: 1px solid #eee;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Bio = styled.div``;


const Content = styled.div``;

const Speaker = ({ name, twitter, image, shortBio}) => {
  return (
    <Wrapper>
      <Image src={image} />
      <Content>
        <Name>{name}</Name>
        <Bio>{shortBio}</Bio>
      </Content>
    </Wrapper>
  )
};

export default Speaker;
