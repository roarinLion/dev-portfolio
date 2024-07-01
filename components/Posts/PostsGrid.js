// PostsGrid.js
import React from 'react'; // Importing React for component creation
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import classes from './posts-grid.module.css'; // Importing CSS module for styling
import PostItem from './PostItem'; // Importing the PostItem component

/**
 * Component for rendering a grid of posts.
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.posts - Array of post objects
 * @param {string} props.posts[].slug - Slug for the post URL
 * @param {string} props.posts[].title - Title of the post
 * @param {string} props.posts[].image - Image filename or URL for the post
 * @param {string} props.posts[].excerpt - Excerpt of the post
 * @param {string} props.posts[].date - Publication date of the post
 * @returns {JSX.Element} A list of posts displayed in a grid
 */
function PostsGrid({ posts }) {
    // Check if posts is an array and not empty
    if (!Array.isArray(posts) || posts.length === 0) {
        return <p>No posts available</p>;
    }

    return (
        <ul className={classes.grid}>
            {posts.map(post => (
                <PostItem key={post.slug} post={post} /> // Rendering PostItem for each post
            ))}
        </ul>
    );
}

// Adding prop types validation
PostsGrid.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        slug: PropTypes.string.isRequired, // Each post must have a slug of type string
        title: PropTypes.string.isRequired, // Each post must have a title of type string
        image: PropTypes.string.isRequired, // Each post must have an image of type string
        excerpt: PropTypes.string.isRequired, // Each post must have an excerpt of type string
        date: PropTypes.string.isRequired, // Each post must have a date of type string
    })).isRequired // posts prop is required and must be an array of objects with the specified shape
};

export default PostsGrid;
