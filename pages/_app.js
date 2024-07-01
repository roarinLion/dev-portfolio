import Layout from '../components/layout/layout'; // Importing the Layout component
import '../styles/globals.css'; // Importing global CSS styles

/**
 * Main application component.
 * Wraps all pages with a layout.
 * @component
 * @param {Object} props - Component props
 * @param {JSX.Element} props.Component - The active page component
 * @param {Object} props.pageProps - Props for the active page component
 * @returns {JSX.Element} The application wrapped with the layout
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
