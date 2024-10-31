// Select the menu icon and sidebar elements
const menuIcon = document.querySelector('.icon-menu'); // Menu icon
const sidebar = document.querySelector('.nav-links-mb'); // Sidebar

// Open the sidebar when clicking the menu icon
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Toggle 'active' class to open/close the sidebar
});

// Close the sidebar when clicking an item in the menu
sidebar.addEventListener('click', () => {
  sidebar.classList.remove('active'); // Remove 'active' class when clicking inside the sidebar
});
