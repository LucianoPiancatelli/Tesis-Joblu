async function test() {
    try {
        const response = await fetch('http://localhost:3000/api/jobs');
        console.log('Status of /api/jobs:', response.status);
        const data = await response.json();
        if (response.status !== 200) console.log('Error data:', data);

        const responsePosts = await fetch('http://localhost:3000/api/community/posts');
        console.log('Status of /api/community/posts:', responsePosts.status);
        const dataPosts = await responsePosts.json();
        if (responsePosts.status !== 200) console.log('Error data posts:', dataPosts);

    } catch (err) {
        console.error('Fetch Error:', err.message);
    }
}

test();
