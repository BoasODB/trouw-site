let currentPageIndex = 0; // Track the current page index

// Scroll to the next page
function scrollToNextPage() {
    const pages = document.querySelectorAll('.page');

    // If not at the last page
    if (currentPageIndex + 1 < pages.length) {
        currentPageIndex++; // Increment the page index
        pages[currentPageIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to the previous page
function scrollToPreviousPage() {
    const pages = document.querySelectorAll('.page');

    // If not at the first page
    if (currentPageIndex > 0) {
        currentPageIndex--; // Decrement the page index
        pages[currentPageIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent scrolling
}, { passive: false });

window.addEventListener('touchmove', function(event) {
    event.preventDefault(); // Prevent scrolling on touch devices
}, { passive: false });


function redirectToPage(event) {
    event.preventDefault();
    const userInput = document.getElementById('redirect-input').value;
    const url = `https://lisaenjarno.nl/${encodeURIComponent(userInput)}`;
    window.location.href = url;
}
