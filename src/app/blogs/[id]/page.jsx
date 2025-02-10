"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import './singleBlog.css'

export default function SingleBlog(){
    const id = useParams();
    const [blog, setBlog] = useState()

    useEffect(()=>{
        if(id){
            const fetchBlog = async () => {
                try {
                  const response = await fetch('/api/blogs/');
                  if (!response.ok) {
                    throw new Error('Failed to fetch service data');
                  }
                  const data = await response.json();
                  console.log(data)
                  const found = data.filter((el)=>{
                    if(el.id === parseInt(id.id)){
                        return el
                    }
                  })

                  setBlog(found[0])
                } catch (error) {
                  console.error("Error:", error.message);
                }
              };
            fetchBlog()
        }
    },[id])

    return(
        <main>
            <div className="container">
                <div className="singleBlog">
                    {blog?<>
                        <h1>{blog.name}</h1>
                        <p>{blog.description}</p>
                        <p>{blog.short_desc}</p>
                    </>:<h1>Not found</h1>}
                </div>
                
            </div>
        </main>
    )
}