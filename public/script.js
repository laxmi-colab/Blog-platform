const API =
    "http://localhost:5000/api/posts";

async function loadPosts() {

    const res = await fetch(API);
    const posts = await res.json();

    const postDiv =
        document.getElementById("posts");

    postDiv.innerHTML = "";

    posts.forEach(post => {

        postDiv.innerHTML += `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `;
    });
}

async function createPost() {

    const title =
        document.getElementById("title").value;

    const content =
        document.getElementById("content").value;

    const token =
        localStorage.getItem("token");

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type":
                "application/json",
            Authorization: token
        },
        body: JSON.stringify({
            title,
            content
        })
    });

    loadPosts();
}

const samplePosts = [
    {
        title: "Getting Started with Web Development",
        content: "Web development is the process of creating websites and web applications. It involves frontend and backend technologies."
    },
    {
        title: "Benefits of Learning JavaScript",
        content: "JavaScript enables developers to build interactive websites, servers, mobile apps, and desktop applications."
    },
    {
        title: "Introduction to MongoDB",
        content: "MongoDB is a NoSQL database that stores information in flexible JSON-like documents."
    },
    {
        title: "Why Full Stack Development Matters",
        content: "Full stack developers work on both frontend and backend systems, making them highly versatile."
    },
    {
        title: "Future of Artificial Intelligence",
        content: "AI is revolutionizing industries through automation, data analysis, and intelligent decision-making."
    },
    {
        title: "Introduction to HTML",
        content: "HTML (HyperText Markup Language) is the standard language used to create web pages. It provides the structure of a webpage using elements such as headings, paragraphs, images, and links. Learning HTML is the first step toward becoming a web developer.",
    }
];

function loadPosts() {
    const postDiv = document.getElementById("posts");

    samplePosts.forEach(post => {
        postDiv.innerHTML += `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `;
    });
}

loadPosts();