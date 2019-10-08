const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" }
];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                posts.push(post);
                resolve();
            }
            else {
                reject('Error: Oh no');
            }
        }, 3000)
    })
}
/*
createPost({
    title: 'Post Three', body: 'This is Post Three'
}).then(getPosts) */


async function init() {
    await createPost({
        title: 'Post Three', body: 'This is Post Three'
    });
    getPosts();
}

init();

function filtered_id(obj) {
    delete obj['email', 'name', 'address', 'company', 'website'];
    return obj.id === 1 || obj.id === 2;
}


async function getUsers() {
    let res = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await res.json();
    let modUser = data.filter(filtered_id)
    console.log(modUser)

    return data;
}


getUsers();