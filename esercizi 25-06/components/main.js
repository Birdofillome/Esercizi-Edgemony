const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts';

async function getMainHTML(){
    const sidebarHTML = getSidebarHTML();

const posts = await fetch(POST_API_URL)
.then((res) => res.json())
.catch((error) => {
console.error(error);
return [];
});

const postsHTML = getPostsHTML({posts});

console.log({posts});

    return `
        <main>
        <div class="container">
        <div class="main-grid">
        ${sidebarHTML}
            ${postsHTML}
            </div>
            </div>
        </main>
    `;
}

function getSidebarHTML() {
return `<aside>Sono la sidebar</aside>`;
}

function getPostsHTML(props) {
const { posts = [] } = props;
    
const postsHTML = posts.slice(0, 10).map(function (post){
    return ` 
<article role="listitem">
<h3>${post.title}</h3>
<p>${post.body}</p>
<div>
<small>user: ${post.userId}</small>
</div>
</article>
    `
}).join("");

return `
<section>
<h2>Lista post</h2>
<div role="list">
${postsHTML}
</div>
</section>`;
}

export { getMainHTML };