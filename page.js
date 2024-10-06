const navbarToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');

navbarToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});

// Download PDF
document.getElementById('download-btn').addEventListener('click', () => {
    const element = document.body; 
    html2pdf()
        .from(element)
        .save();
});
