// PostHeader.js
import Image from 'next/image'; // Importing the Next.js Image component for optimized images
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation

// Importing styles from the CSS module
import classes from './post-header.module.css';

/**
 * Component for rendering the header of a post.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - Title of the post
 * @param {string} props.image - Image URL for the post
 * @returns {JSX.Element} A header containing the post title and image
 */
function PostHeader({ title, image }) {
  return (
    <header className={classes.header}>
      {/* Rendering the post title */}
      <h1>{title}</h1>
      {/* Rendering the post image using Next.js Image component */}
      <Image 
        src={image} // Setting the image source
        alt={title} // Setting the alt text for accessibility
        width={200} // Setting the image width
        height={150} // Setting the image height
      />
    </header>
  );
}

// Adding prop types validation
PostHeader.propTypes = {
  title: PropTypes.string.isRequired, // Title must be a string and is required
  image: PropTypes.string.isRequired, // Image must be a string and is required
};

export default PostHeader;
