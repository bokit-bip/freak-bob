// Function to generate a key based on duration
function generateKey() {
    const duration = document.getElementById('duration').value;
    const generatedKeyElement = document.getElementById('generatedKey');
    const messageElement = document.getElementById('message');
    
    if (!duration) {
        return;
    }

    let expiryDate;

    // Determine expiration based on the selected duration
    if (duration === '1') {
        // 1 day expiration
        expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 1);
    } else if (duration === '7') {
        // 1 week expiration
        expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
    } else if (duration === '365') {
        // 1 year expiration
        expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
    } else if (duration === 'lifetime') {
        // Lifetime expiration (no expiration)
        expiryDate = null;
    }

    // Generate a key based on the current date and the expiration date
    const currentDate = new Date();
    const key = `${currentDate.getTime()}-${expiryDate ? expiryDate.getTime() : 'lifetime'}`;

    // Display the generated key
    generatedKeyElement.textContent = `Your generated key: ${key}`;

    // Store the generated key and its expiration date in localStorage
    if (expiryDate) {
        localStorage.setItem('key', key);
        localStorage.setItem('expiry', expiryDate);
    } else {
        localStorage.setItem('key', key);
        localStorage.setItem('expiry', 'lifetime');
    }

    // Provide the user with confirmation and a link to the enter key page
    messageElement.textContent = "Key generated successfully! Now you can go to the <a href='enter-key.html'>Enter Key page</a> to unlock the content.";
}
