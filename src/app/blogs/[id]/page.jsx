"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import './singleBlog.css'
import { useRouter } from "next/navigation";

export default function SingleBlog(){
    const id = useParams().id;
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [short_desc, setShort_Desc] = useState()
    const router = useRouter()

    useEffect(()=>{
        if(id){
            const fetchBlog = async () => {
                try {
                  const response = await fetch('/api/blogs/');
                  if (!response.ok) {
                    throw new Error('Failed to fetch service data');
                  }
                  const data = await response.json();
                  const found = data.filter((el)=>{
                    if(el.id === parseInt(id)){
                        return el
                    }
                  })

                  setName(found[0]?found[0].name:null)
                  setDescription(found[0]?found[0].description:null)
                  setShort_Desc(found[0]?found[0].short_desc:null)
                } catch (error) {
                  console.error("Error:", error.message);
                }
              };
            fetchBlog()
        }
    },[id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('/api/blogs/', {
                method: 'PUT',
                body: JSON.stringify({ id, name, description, short_desc }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return(
        <main>
            <div className="container">
                <div className="singleBlog">
                    {name || description || short_desc?<>
                    
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                            <textarea name="short_desc" value={short_desc} onChange={(e) => setShort_Desc(e.target.value)}></textarea>
                            <button type="submit">Изменить</button>
                        </form>
                    </>:<h1>Not found</h1>}
                </div>
                
            </div>
        </main>
    )
}