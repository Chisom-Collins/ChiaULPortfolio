const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class to show/hide menu
});

// Download PDF
document.getElementById('download-btn').addEventListener('click', () => {
    const element = document.body; // You can customize what part of the document to include in the PDF
    html2pdf()
        .from(element)
        .save();
});
