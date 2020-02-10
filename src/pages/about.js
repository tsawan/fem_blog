import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const About = () => (
  <Layout>
    <h1>About Me</h1>
    <p>My personal website with gatsby and react.</p>
    <Link to="/">&larr; back to home</Link>
   </Layout>
);

export default About;
