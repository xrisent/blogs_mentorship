// import React, { useEffect } from 'react';
import './SectionBlogs.css'
import axios from 'axios';

const SectionBlogs = () => {
    // c

    // useEffect(()=>{
    //     axios('http://localhost:3001/api/blogs')
    //     .then(({data})
    // },[])

    return (
        <section className='SectionBlogs'>
            <div className="container">
                <div className="SectionBlogs__box">
                    <h2 className='SectionBlogs__name'>Blog 1</h2>
                    <p className='SectionBlogs__name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vitae repudiandae assumenda veritatis blanditiis inventore sapiente ducimus placeat facilis quae!</p>
                </div>
            </div>
        </section>
    );
};

export default SectionBlogs;