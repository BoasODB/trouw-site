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


// let isScrolling = false;

// window.addEventListener('wheel', (event) => {
//     if (isScrolling) return; // Prevent multiple triggers during animation

//     isScrolling = true;

//     // Get all pages and current scroll position
//     const pages = document.querySelectorAll('.page');
//     const currentScroll = window.scrollY;
//     const viewportHeight = window.innerHeight;

//     // Calculate the current page index
//     const currentPageIndex = Math.round(currentScroll / viewportHeight);

//     // Determine the scroll direction
//     const direction = event.deltaY > 0 ? 1 : -1;

//     // Calculate the target page index
//     const targetPageIndex = Math.max(
//         0,
//         Math.min(currentPageIndex + direction, pages.length - 1)
//     );

//     // Scroll to the target page
//     const targetPosition = targetPageIndex * viewportHeight;
//     window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth',
//     });

//     // Reset scrolling lock after a delay
//     setTimeout(() => {
//         isScrolling = false;
//     }, 1000); // Adjust timing to match animation duration
// });

document.addEventListener('DOMContentLoaded', () => {
    // Menu toggle functionality
    const menu = document.querySelector('.menu');
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('menu-expanded');
    });

    // Scroll to page on menu item click
    const menuItems = document.querySelectorAll('.menu-items a');
    menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const pageId = item.getAttribute('data-page');
            const targetPage = document.getElementById(pageId);

            if (targetPage) {
                targetPage.scrollIntoView({ behavior: 'smooth' });
                menu.classList.remove('menu-expanded'); // Close the menu after selection
            }
        });
    });
});

