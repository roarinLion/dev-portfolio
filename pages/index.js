import React from 'react'
import Hero from '../components/homepage/Hero'
import FeaturedPosts from '../components/homepage/FeaturedPosts'
import { getFeaturedPosts } from '../lib/postUtils'



const Homepage = (props) => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    )
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        },
    }
}

export default Homepage