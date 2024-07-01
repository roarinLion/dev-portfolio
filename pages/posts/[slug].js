import Head from 'next/head';
import PostContent from '../../components/Posts/PostDetail/PostContent';
import { getPostData, getPostsFiles } from '../../lib/postUtils';

/**
 * Post Detail Page Component.
 * @param {Object} props - Component props.
 * @param {Object} props.post - Post data.
 * @returns {JSX.Element} The Post Detail Page.
 */
function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

/**
 * Fetches post data at build time.
 * @param {Object} context - Context object.
 * @returns {Object} Static props.
 */
export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

/**
 * Generates paths for all post detail pages.
 * @returns {Object} Paths and fallback setting.
 */
export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
