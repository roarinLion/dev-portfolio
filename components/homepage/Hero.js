import React from 'react'
import Image from 'next/image'
import classes from './Hero.module.css'

function Hero() {
    return (
        <section className={classes.hero}>
            Hero
            <div className={classes.image}>
                <Image src="/images/site/logo.png" alt="Joshua Aaron Logo" width={200} height={50} />
            </div>
            <h1>Hi, I'm Joshua</h1>
            <p>I blog about web development - especially frontend frameworks like React</p>
        </section>
    )
}

export default Hero