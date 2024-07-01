// AllPosts.js
import React from 'react'; // Importing React for component creation
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import PostsGrid from './PostsGrid'; // Importing PostsGrid component
import classes from './all-posts.module.css'; // Importing CSS module for styling

/**
 * Component for rendering all posts.
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.posts - Array of post objects
 * @returns {JSX.Element} A section containing all posts
 */
function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} /> {/* Passing the posts prop to PostsGrid */}
    </section>
  );
}

// Adding prop types validation
AllPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired, // Each post must have a slug of type string
    title: PropTypes.string.isRequired, // Each post must have a title of type string
    image: PropTypes.string.isRequired, // Each post must have an image of type string
    excerpt: PropTypes.string.isRequired, // Each post must have an excerpt of type string
    date: PropTypes.string.isRequired, // Each post must have a date of type string
  })).isRequired, // posts prop is required and must be an array of objects with the specified shape
};

export default AllPosts;
