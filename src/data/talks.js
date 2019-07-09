import React from  'react';
import imgBaxley from '../images/speakers/james-baxley.png';
import imgPhil from '../images/speakers/phil-pluckthun.jpg';
import imgMichelle from '../images/speakers/michelle-garrett.jpg';
import imgFaduma from '../images/speakers/faduma-faracalag.png';
import { fonts } from '../theme';

// yes I know this is not how you gatsby but i don't care
export default [
  {
    title: "Apollo Schema Federation",
    speakers: [
      {
        name: "James Baxley",
        twitter: "@jbaxleyiii",
        image: imgBaxley,
        shortBio: "Engineering Manager @ Apollo"
      }
    ],
    synopsis: <>
      <p>GraphQL allows organizations to expose their data in a single graph, instead of as independent endpoints that require clients to be aware of service boundaries and to follow relationships between entities manually. Defining and deploying your data graph in a monolithic schema doesn’t scale however.</p>
      <p>As GraphQL adoption within an organization grows, schema design shifts from being a single team responsibility to being an organization-wide concern. In this talk, I will introduce Apollo schema federation which is the evolution of schema stitching.</p>
    </>
  },
  {
    title: "Making of URQL",
    speakers: [
      {
        name: "Phil Pluckthun",
        twitter: "@_philpl",
        image: imgPhil,
        shortBio: "Technology Lead @ Formidable London"
      }
    ],
    synopsis: <>
      <p><a href="https://formidable.com/open-source/urql/" target="_blank">Urql</a> is a lightweight, batteries-included GraphQL client library that aims to make interfacing with GraphQL servers easy, without sacrificing flexibility as your app grows.</p>
      <p>Even the oldest GraphQL libraries are only a few years old, and we haven't found the optimal solutions, yet. In this talk, Phil, one of urql's core contributors, explains what sets it apart from other libraries such as Apollo and Relay, and how urql can foster experimentation across the entire GraphQL client community.</p>
    </>
  },

    {
    title: "Scaling GraphQL Beyond a Backend for Frontend",
    speakers: [
      {
        name: "Michelle Garrett",
        twitter: "@msmichellegar",
        image: imgMichelle,
        shortBio: "Condé Nast"
      },

      {
        name: "Faduma Faralacag",
        twitter: "@FadumaFaralacag",
        image: imgFaduma,
        shortBio: "Condé Nast"
      }
    ],
    synopsis: <>
      <p style={{ fontFamily: fonts.heading }}><i>Michelle and Faduma are Software Engineers at Condé Nast, building a (very high fashion) GraphQL API to serve content for brands like Vogue and GQ. They share a passion for GraphQL, JavaScript, lipstick and Beyoncé.</i></p>
      <p>What happens when the GraphQL layer you built as a Backend For Frontend (BFF) now needs to serve multiple consumers? How do you scale your GraphQL API beyond a single consumer, and abstract effectively to serve all your clients’ data needs?</p>
      <p>This talk will share the experience of transitioning a BFF GraphQL API into a more generic schema, navigating the tension between building something client-specific and client-agnostic. It’ll evaluate the best strategies for consuming a shared GraphQL API without compromising on client-specific concerns and data needs.</p>
      <p>You'll leave with an understanding of the challenges involved in scaling a GraphQL API beyond a single consumer, and an idea of how to transition your architecture to support this.</p>
    </>
  },


]