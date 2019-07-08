import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../theme';

const Wrapper = styled.div`
  font-family: ${fonts.body};
  font-size: 0.9rem;
  line-height: 1.15rem;
  margin-bottom: 2rem;
`;

const ContentItem = styled.div`
  margin-bottom: 0.75rem;
  font-family: ${fonts.heading};
  a {
    color: ${colors.accent}
  }
`;

const Row = ({ label, children }) => (
  <ContentItem>
    <label><b>{label}:</b></label>
    <span>{children}</span>
  </ContentItem>
)

export default ({ event }) => (
  <Wrapper>
    {event.description}
    <Row label="Date">{event.date}</Row>
    <Row label="Location">{event.host}, <a href={event.maps}>{event.address}</a></Row>
    <Row label="Doors open">{event.doors}</Row>
    <Row label="First talk">{event.start}</Row>
    <Row label="Audience">{event.audience}</Row>
    <Row label="Good to know">{event.amenities}</Row>
  </Wrapper>
);