function showPopup(data) {
    if (data === 1) {
        document.getElementById("alertPopup").style.display = "block";
    }
}

function redirectToSuggestions() {
    window.location.href = '/path-to-suggestions-page'; // Replace with the actual path
}

function closePopup() {
    document.getElementById("alertPopup").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    showPopup(1);
 });
/* 
function fetchData() {
    // For testing
    const mockData = 1;
    showPopup(mockData);
    //for regular maybe???
    fetch('/path-to-your-data-endpoint/')
        .then(response => response.json())
        .then(data => {
            checkDataAndShowPopup(data.value); // Assuming your data has a 'value' property
        })
        .catch(error => console.error('Error:', error));
}

setInterval(fetchData, 5000); // Check every 5 seconds
*/