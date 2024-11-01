// Select the menu icon and sidebar elements
const menuIcon = document.querySelector('.icon-menu'); // Menu icon
const sidebar = document.querySelector('.nav-links-mb'); // Sidebar

// Open or close the sidebar when clicking the menu icon
menuIcon.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent click event from closing sidebar immediately
  sidebar.classList.toggle('active'); // Toggle 'active' class to open/close the sidebar
});

// Close the sidebar when clicking a link in the menu
sidebar.addEventListener('click', (event) => {
  if (event.target.matches('a')) { // Check if the clicked element is a link
    sidebar.classList.remove('active'); // Remove 'active' class when clicking a link
  }
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
    sidebar.classList.remove('active'); // Close sidebar when clicking outside
  }
});
