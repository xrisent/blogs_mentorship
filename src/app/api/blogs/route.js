import { Blogs, putBlog, removeBlog } from "@/app/mock/Blogs.mock";
export async function GET(){
    return new Response(JSON.stringify(Blogs), {status:200})
}

export async function POST(req){
    try{
        const {name, description, short_desc} = await req.json()

        const id = Blogs.length+1
        
        Blogs.push({
            id:id,
            name: name,
            description: description,
            short_desc: short_desc
        })
        return new Response(JSON.stringify(Blogs), {status: 200})
    } catch(error){
        console.log(error)
        return new Response(JSON.stringify({error: "error"}), {status:400})
    }
}

export async function DELETE(req){
    try{
        const {id} = await req.json()

        removeBlog(id)

        return new Response(JSON.stringify(Blogs), {status:200})
    }catch(error){
        return new Response(JSON.stringify({error: "error"}), {status:400})
    }
}

export async function PUT(req){
    try{
        const {id, name, description, short_desc} = await req.json()

        putBlog(id, {
            name: name,
            description: description,
            short_desc: short_desc
        })

        return new Response(JSON.stringify(Blogs), {status:200})
    }catch(error){
        return new Response(JSON.stringify({error: "error"}), {status:400})
    }
}