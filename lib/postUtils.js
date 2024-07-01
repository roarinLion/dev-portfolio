import fs from 'fs'; // Node.js file system module for reading and writing files
import path from 'path'; // Node.js path module for handling and transforming file paths
import matter from 'gray-matter'; // Library for parsing front matter from markdown files

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Retrieves all markdown files from the posts directory.
 * @returns {string[]} Array of post filenames.
 */
export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

/**
 * Retrieves the data of a specific post based on the post identifier (slug).
 * @param {string} postIdentifier - The slug of the post.
 * @returns {Object} Post data.
 */
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

/**
 * Retrieves all posts sorted by date in descending order.
 * @returns {Object[]} Array of all post data.
 */
export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return sortedPosts;
}

/**
 * Retrieves all featured posts.
 * @returns {Object[]} Array of featured post data.
 */
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
