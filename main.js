document.addEventListener('DOMContentLoaded', function() {
    // Accessing the form and the resume output area
    const resumeForm = document.getElementById('resumeForm');
    const resumeOutput = document.getElementById('generatedResume');

    // Check if the elements exist before proceeding
    if (resumeForm && resumeOutput) {
        // Event listener for form submission
        resumeForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the page from refreshing on form submission

            // Gathering input values from the form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const education = document.getElementById('education').value;
            const experience = document.getElementById('experience').value;
            const skills = document.getElementById('skills').value;
            const description = document.getElementById('description').value;

            // Building the resume output dynamically
            const resumeContent = `
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>

                <h3>Education</h3>
                <p>${education}</p>

                <h3>Work Experience</h3>
                <p>${experience}</p>

                <h3>Skills</h3>
                <p>${skills}</p>

                <h3>Description</h3>
                <p>${description}</p>
            `;

            // Inserting the generated resume into the resumeOutput div
            resumeOutput.innerHTML = resumeContent;
        });
    } else {
        console.error('Form or output div not found.');
    }
});
