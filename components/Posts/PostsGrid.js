import React from 'react'
import classes from './posts-grid.module.css'
import PostItem from './PostItem'

function PostsGrid(props) {
    const { posts } = props
    
    return (
        <ul className={classes.grid}>
            {posts.map(post => (
                <PostItem key={post.slug}>{post.title}</PostItem>
            ))}
        </ul>
    )
}

export default PostsGrid