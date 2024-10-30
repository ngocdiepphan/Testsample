// Chọn phần tử icon menu và sidebar
const menuIcon = document.querySelector('.icon-menu'); // Icon menu
const sidebar = document.querySelector('.nav-links-mb'); // Sidebar

// Mở sidebar khi click vào icon menu
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Thêm hoặc xóa class 'active' để mở/đóng sidebar
});

// Đóng sidebar khi click vào mục trong menu
sidebar.addEventListener('click', () => {
  sidebar.classList.remove('active'); // Xóa class 'active' khi click vào sidebar
});
