export let Blogs = [
]

export function removeBlog(id) {
    Blogs = Blogs.filter(item => item.id !== id);
}

export function putBlog(id, newData) {
    const index = Blogs.findIndex(item => item.id === id);
    if (index !== -1) {
        Blogs[index] = { ...Blogs[index], ...newData };
    }
}