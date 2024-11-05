// Existing generateCV function
function generateCV() {
    document.getElementById('cv-name').textContent = document.getElementById('name').value;
    document.getElementById('cv-mobile').textContent = `Mobile: ${document.getElementById('mobile').value}`;
    document.getElementById('cv-email').textContent = `Email: ${document.getElementById('email').value}`;
    document.getElementById('cv-course').textContent = document.getElementById('course').value;
    document.getElementById('cv-careerObjective').textContent = document.getElementById('careerObjective').value;

    document.getElementById('cv-generalInfo').textContent = `
        Father's Name: ${document.getElementById('fatherName').value}
        Mother's Name: ${document.getElementById('motherName').value}
        DOB: ${document.getElementById('dob').value}
    `;

    document.getElementById('cv-education').textContent = document.getElementById('education').value;
    document.getElementById('cv-professional').textContent = document.getElementById('professional').value;
}

// New function to download CV as PDF
function downloadCV() {
    const element = document.getElementById('cv-preview'); // The CV preview section to convert to PDF
    const options = {
        margin:       0.5,
        filename:     'Mousumi_Ghosh_CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // Generate the PDF
    html2pdf().set(options).from(element).save();
}
