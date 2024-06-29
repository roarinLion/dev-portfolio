import React from 'react'
import classes from './featured-posts.module.css'
import PostsGrid from '../Posts/PostsGrid'

function FeaturedPosts() {
    return (
        <section className={classes.latest}><h2>Featured Posts</h2>
        <PostsGrid posts />
        </section>
    )
}

export default FeaturedPosts