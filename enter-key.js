// Function to check the entered key
function checkKey() {
    const inputKey = document.getElementById('keyInput').value;
    const storedKey = localStorage.getItem('key');
    const expiry = localStorage.getItem('expiry');
    const errorMessage = document.getElementById('errorMessage');

    // Check if the entered key matches the stored key
    if (inputKey === storedKey) {
        const currentDate = new Date();

        if (expiry !== 'lifetime') {
            const expiryDate = new Date(parseInt(expiry));

            if (currentDate > expiryDate) {
                // Key has expired
                errorMessage.style.display = 'block';
                errorMessage.textContent = 'Your key has expired.';
                return;
            }
        }

        // Hide the key entry overlay and show the content
        document.getElementById('keyEntryOverlay').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    } else {
        // Invalid key
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Invalid key, please try again.';
    }
}
