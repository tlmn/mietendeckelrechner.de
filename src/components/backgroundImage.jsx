import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bg-mietendeckel.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid;
      return (
        <BackgroundImage fluid={imageData} style={{ position: 'sticky' }}>
          {children}
        </BackgroundImage>
      );
    }}
  />
);
