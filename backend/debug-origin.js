async function testBrowserLike() {
    try {
        const response = await fetch('http://localhost:3000/api/community/posts', {
            headers: { 'Origin': 'http://localhost:5173' }
        });
        console.log('Status with Origin:', response.status);
        const data = await response.json();
    } catch (err) {
        console.error('Fetch Error:', err.message);
    }
}

testBrowserLike();
