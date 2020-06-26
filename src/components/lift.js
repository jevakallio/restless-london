import React from 'react';
import styled from 'styled-components';
import { colors, fonts, breakpoints } from '../theme';
import event from '../data/event';
import Button from './button';
const Wrapper = styled.div`
  background-color: ${colors.accentDark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 960px;

  @media only screen and (max-width: ${breakpoints.wide}px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Section = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 30px 20px;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: ${breakpoints.wide}px) {
    padding: 20px 15px;
    &:first-child {
      padding: 20px 15px 0px 15px;
    }
  }
`;

const Text = styled.div`
  color: ${colors.white};
  font-family: ${fonts.heading};
`;

const Lift = () => {
  return (
    <Wrapper>
      <Content>
        <Section>
          <Text>
          <b>Thursday, July 16th, 6PM</b><br />
          Online, Worldwide, on YouTube Live
          </Text>
        </Section>
        <Section >
          <Button inverse target={event.signup}>
            {event.shortCta}
          </Button>
        </Section>
      </Content>
    </Wrapper>
  )
};

export default Lift;
