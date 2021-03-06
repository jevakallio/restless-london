import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Section from '../components/section';
import Organizers from '../components/organizers';
import Talk from '../components/talk';
import EventDetails from '../components/event-details';
import Button from "../components/button";
import Sponsors from "../components/sponsors";
import talks from '../data/talks';
import event from '../data/event';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section title="Next event">
      <EventDetails event={event} />
      <Button  target={event.signup}>
        {event.longCta}
      </Button>
    </Section>
    <Section title="Talks">
      { talks.map(talk => <Talk {...talk} />) }
      {/* <Button  target={event.signup}>
        {event.longCta}
      </Button> */}
    </Section>

    <Section title="Code of Conduct">
      <p>
        <b>RESTless London is an open and inclusive event for everyone.</b>
      </p>
      <p>
        We follow and enforce the <a href="https://berlincodeofconduct.org/" target="_blank" rel="noopener">Berlin Code of Conduct</a>.
        If you think someone violated this Code of Conduct, or you have any questions,
        please contact <b>uk.events@formidable.com</b> or speak to any
        of the following event organisers:
      </p>
      <Organizers />
    </Section>

    <Section title="">
      <Sponsors />
    </Section>
  </Layout>
)

export default IndexPage
