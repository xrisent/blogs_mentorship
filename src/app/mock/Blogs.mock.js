export let Blogs = [
{    
    id: 1,
    name: "The Rise of JavaScript",
    description: "An in-depth look at how JavaScript became the dominant language for web development.",
    short_desc: "How JavaScript took over the web."
},
{
    id: 2,
    name: "Understanding React Hooks",
    description: "A comprehensive guide to using React Hooks effectively in your projects.",
    short_desc: "Mastering React Hooks."
},
{
    id: 3,
    name: "Async/Await in JavaScript",
    description: "Learn how async/await makes handling asynchronous operations easier in JavaScript.",
    short_desc: "Simplify async code with async/await."
},
{
    id: 4,
    name: "Functional vs Object-Oriented Programming",
    description: "Comparing functional and object-oriented programming paradigms in JavaScript.",
    short_desc: "OOP vs Functional Programming."
},
{
    id: 5,
    name: "Building a Simple REST API with Node.js",
    description: "Step-by-step guide to creating a RESTful API using Express and Node.js.",
    short_desc: "Create a REST API in Node.js."
},
{
    id: 6,
    name: "State Management in React",
    description: "Exploring different approaches to managing state in React applications.",
    short_desc: "Handling state in React."
},
{
    id: 7,
    name: "CSS Grid vs Flexbox",
    description: "A comparison of CSS Grid and Flexbox for modern web layouts.",
    short_desc: "Grid vs Flexbox: Which one to use?"
},
{
    id: 8,
    name: "Web Performance Optimization",
    description: "Techniques to improve website performance and load times.",
    short_desc: "Speed up your website."
},
{
    id: 9,
    name: "How to Secure a Web Application",
    description: "Best practices for securing web applications from common threats.",
    short_desc: "Keep your web app safe."
},
{
    id: 10,
    name: "Getting Started with TypeScript",
    description: "An introduction to TypeScript and why it’s useful for JavaScript developers.",
    short_desc: "Learn the basics of TypeScript."
},
{
    id: 11,
    name: "Top 10 JavaScript Libraries in 2025",
    description: "A look at the most popular JavaScript libraries and frameworks in 2025.",
    short_desc: "Best JavaScript libraries this year."
},
{
    id: 12,
    name: "Responsive Web Design Tips",
    description: "Key principles and best practices for creating responsive websites.",
    short_desc: "Make your site mobile-friendly."
},
{
    id: 13,
    name: "GraphQL vs REST API",
    description: "A comparison of GraphQL and REST API architectures.",
    short_desc: "Which is better: GraphQL or REST?"
},
{
    id: 14,
    name: "Dark Mode in Web Design",
    description: "How to implement and design a great dark mode experience.",
    short_desc: "Adding dark mode to your site."
},
{
    id: 15,
    name: "Debugging JavaScript Code",
    description: "Tips and tools for debugging JavaScript effectively.",
    short_desc: "Debug JavaScript like a pro."
}
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