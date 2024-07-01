// PostItem.js
import Link from 'next/link'; // Importing Link for client-side navigation
import Image from 'next/image'; // Importing Image for optimized image handling
import PropTypes from 'prop-types'; // Importing PropTypes for prop validation
import classes from './post-item.module.css'; // Importing CSS module for styling

/**
 * Component for rendering a single post item.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.post - Post object
 * @param {string} props.post.title - Title of the post
 * @param {string} props.post.image - Image filename or URL for the post
 * @param {string} props.post.excerpt - Excerpt of the post
 * @param {string} props.post.date - Publication date of the post
 * @param {string} props.post.slug - Slug for the post URL
 * @returns {JSX.Element} A list item containing the post
 */
function PostItem({ post }) {
    const { title, image, excerpt, date, slug } = post; // Destructuring post properties

    // Formatting the date in a human-readable format
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    // Constructing paths for the image and link
    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <div className={classes.image}>
                    <Image
                        src={imagePath}
                        alt={title}
                        width={300}
                        height={200}
                        layout='responsive'
                        objectFit="cover" // Ensures the image covers its container
                    />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    );
}

// Adding prop types validation
PostItem.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired, // Title must be a string and is required
        image: PropTypes.string.isRequired, // Image must be a string and is required
        excerpt: PropTypes.string.isRequired, // Excerpt must be a string and is required
        date: PropTypes.string.isRequired, // Date must be a string and is required
        slug: PropTypes.string.isRequired, // Slug must be a string and is required
    }).isRequired,
};

export default PostItem;
