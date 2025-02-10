export let Blogs = [
    {
        id:1,
        name:"Blog 1",
        description: "Blog desc",
        short_desc: "Blog short desc"
    }
]

export function removeBlog(id) {
    Blogs = Blogs.filter(item => item.id !== id);
}

export function putBlog(id, newData) {
    const index = Blogs.findIndex(item => item.id === parseInt(id));
    if (index !== -1) {
        Blogs[index] = { ...Blogs[index], ...newData };
    }
}