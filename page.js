document.getElementById('download-btn').addEventListener('click', function() {
    const element = document.body;  
    html2pdf().from(element).save('MyPortfolio.pdf');
});
