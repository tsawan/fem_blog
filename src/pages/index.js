import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import ReadLink from '../components/read-link';

export default () => (
  <Layout>
    <h1>Home</h1>
    <p>Hello</p>
    <ReadLink to="/about/">Learn about me &rarr;</ReadLink>

      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
  </Layout>
);
