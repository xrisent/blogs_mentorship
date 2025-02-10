'use client'

import React, { useEffect, useState } from 'react';
import './SectionBlogs.css'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SectionBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const router = useRouter()
    

    useEffect(()=>{
        axios('http://localhost:3000/api/blogs')
        .then(({data})=> setBlogs(data))
    },[])

    const itemsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blogs.length / itemsPerPage);
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = blogs.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <section className='SectionBlogs'>
            <div className="container">
                {currentItems.map((el, idx) => (
                    <div key={idx} className="SectionBlogs__box">
                        <h2 className='SectionBlogs__name'>{el.name}</h2>
                        <p className='SectionBlogs__desc'>{el.short_desc}</p>
                        <button onClick={()=>router.push(`/blogs/${el.id}`)} className='SectionBlogs__btn'>Перейти</button>
                    </div>  
                ))}
            </div>
            
            <div className="SectionBlogs__pagination">
                <button 
                    className='S__pagination__btn1'
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                >
                    Назад
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button 
                className='S__pagination__btn2'
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                    disabled={currentPage === totalPages}
                >
                    Вперёд
                </button>
            </div>
        </section>
    );
};


export default SectionBlogs;