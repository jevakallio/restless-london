import React from  'react';
import imgKylie from '../images/speakers/kylie.jpg';
import imgRyan from '../images/speakers/ryan.jpg';
import imgMatt from '../images/speakers/matt.jpg';

// yes I know this is not how you gatsby but i don't care
export default [
  {
    title: "Demystifying urql & urql-devtools",
    speakers: [
      {
        name: "Kylie Stewart",
        twitter: "@kyliestew",
        image: imgKylie,
        shortBio: "Software Engineer @ Formidable"
      }
    ],
    synopsis: <>
      <p><a href="https://formidable.com/open-source/urql/" target="_blank">urql</a> is a lightweight, batteries-included GraphQL client library that aims to make interfacing with GraphQL servers easy, without sacrificing flexibility as your app grows.</p>
      <p>In this talk you'll learn what urql and its devtools are all about and how the devtools can help you investigate what's happening in your GraphQL app.</p>
    </>
  },

    {
    title: "Tightening the Full-Stack Development Loop with Nexus & Prisma",
    speakers: [
      {
        name: "Ryan Chenkie",
        twitter: "@ryanchenkie",
        image: imgRyan,
        shortBio: "DevRel @ Prisma"
      }
    ],
    synopsis: <>
      <p>
        Developing a real-world full-stack app often involves tedious threading of data across multiple layers of the stack.
        This is particularly undesirable during prototyping phases where the main goal may be just to demonstrate an idea or design.
        It’s also risky when going to production since data inconsistencies between the layers can lead to bugs.
        We show one solution to this velocity and type-safety dilemma via Nexus combined with Prisma.
      </p>
    </>
  },
    {
    title: "Addressing the N+1 Problem",
    speakers: [
      {
        name: "Matt Hooper",
        image: imgMatt,
        shortBio: "Frontend Developer @ Ombud"
      }
    ],
    synopsis: <>
      <p>Approaches to efficiently retrieving data without over fetching or making unnecessary trips to the database.</p>
    </>
  },
]
