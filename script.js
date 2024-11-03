document.getElementById("generateButton").addEventListener("click", generateResume);

function generateResume(event) {
    event.preventDefault();
     


    // Collecting Personal Information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    // Education Information
    const highschoolInstitution = document.getElementById("highschool-institution").value.trim();
    const highschoolYear = document.getElementById("highschool-year").value.trim();
    const highschoolCgpa = document.getElementById("highschool-cgpa").value.trim();

    const universityInstitution = document.getElementById("university-institution").value.trim();
    const universityDegree = document.getElementById("university-degree").value.trim();
    const universityYear = document.getElementById("university-year").value.trim();
    const universityCgpa = document.getElementById("university-cgpa").value.trim();

     // Project Information
     const projectName = document.getElementById("project-name").value.trim();
     const techStack = document.getElementById("tech-stack").value.trim();
     const projectDescription = document.getElementById("project-description").value.trim();

    // Links
    const github = document.getElementById("github").value.trim();
    const linkedin = document.getElementById("linkedin").value.trim();
    const leetcode = document.getElementById("leetcode").value.trim();
    const gfg = document.getElementById("gfg").value.trim();

    // Work Experience
    const company = document.getElementById("company").value.trim();
    const position = document.getElementById("position").value.trim();
    const expYear = document.getElementById("exp_year").value.trim();

    // Skills and Hobbies
    const skills = document.getElementById("skills").value.trim();
    const hobbies = document.getElementById("hobbies").value.trim();
   
    // Technical Skills
    const technicalSkills = document.getElementById("technicalSkills").value.trim();


    // Validate required fields
    if (!name || !email || !phone) {
        alert("Please fill in the required fields: Name, Email, Phone.");
        return;
    }

    // Get selected resume format
    const resumeFormat = document.querySelector('input[name="resumeFormat"]:checked').value;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const marginLeft = 20;
    let yPosition = 20;

    
    // Resume Format Layout
    if (resumeFormat === "format1") {
        // Name and Contact Information (Centered Header)
        doc.setFont("times", "bold");
        doc.setFontSize(20);
        doc.text(name.toUpperCase(), 105, yPosition, { align: "center" });
        yPosition += 10;
        doc.setFontSize(12);
        doc.setFont("times", "normal");
        doc.text(`${address} |  ${phone} |  ${email}`, 105, yPosition, { align: "center" });
        yPosition += 15;
        
        // Education Section
        doc.setFont("times", "bold");
        doc.setFontSize(14);
        doc.text("EDUCATION", marginLeft, yPosition);
        doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
        yPosition += 10;

        doc.setFont("times", "normal");
        doc.setFontSize(12);
        doc.text("High School:", marginLeft, yPosition);
        yPosition += 6;
        doc.text(highschoolInstitution, marginLeft + 30, yPosition);
        yPosition += 6;
        doc.text(`Year of Passing: ${highschoolYear} | CGPA: ${highschoolCgpa}`, marginLeft + 30, yPosition);
        yPosition += 10;

        doc.text("University:", marginLeft, yPosition);
        yPosition += 6;
        doc.text(universityInstitution, marginLeft + 30, yPosition);
        yPosition += 6;
        doc.text(`Degree: ${universityDegree} | Year: ${universityYear} | CGPA: ${universityCgpa}`, marginLeft + 30, yPosition);
        yPosition += 15;
      
         
        // Skills Section
        doc.setFont("times", "bold");
        doc.setFontSize(14);
        doc.text(" SKILLS", marginLeft, yPosition);
        doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
        yPosition += 10;
        doc.setFont("times", "normal");
        doc.setFontSize(12);
        // Use splitTextToSize to wrap skills text
        const skillsText = skills.split(',').map(skill => skill.trim()).join('  • ');  // Format skills with bullets or commas
        const skillsLines = doc.splitTextToSize(skillsText, 160);  // Adjust 160 to match your page layout
        doc.text(skillsLines, marginLeft, yPosition);
        yPosition += skillsLines.length * 8;  // Adjust line height for each wrapped line
  

        // Work Experience Section
        doc.setFont("times", "bold");
        doc.setFontSize(14);
        doc.text("WORK EXPERIENCE", marginLeft, yPosition);
        doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
        yPosition += 10;
        doc.setFont("times", "normal");
        doc.setFontSize(12);
        doc.text(`Company: ${company}`, marginLeft, yPosition);
        yPosition += 6;
        doc.text(`Position: ${position} | Years of Experience: ${expYear}`, marginLeft, yPosition);
        yPosition += 15;


    // Projects Section
        doc.setFont("times", "bold");
        doc.setFontSize(14);
        doc.text("PROJECTS", marginLeft, yPosition);
      
        doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
        yPosition += 10;
        doc.setFontSize(12);

        // Set up project name and tech stack as before
        doc.text(` ${projectName}  |  ${techStack}`, marginLeft, yPosition);
        yPosition += 8;
        doc.setFont("times", "normal");
        // Use splitTextToSize for project description to wrap text within a specified width
        const descriptionLines = doc.splitTextToSize(projectDescription, 160);  // 160 adjusts width to fit within margins
        doc.text(descriptionLines, marginLeft, yPosition);
        yPosition += descriptionLines.length * 8;  // Adjust line height for each wrapped line

        // Technical Skills
        doc.setFontSize(14);
        doc.setFont("times", "bold");
        doc.text("TECHNICAL SKILLS", marginLeft, yPosition);
        doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
        doc.setFont("times", "normal");
        yPosition += 10;
        doc.setFontSize(12);
        doc.text(technicalSkills, marginLeft, yPosition);
        yPosition += 15; 



        // Links Section
        doc.setFont("times", "bold");
        doc.setFontSize(14);
        doc.text("PROFILE LINKS", marginLeft, yPosition);
        doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
        yPosition += 10;
        doc.setFont("times", "normal");
        doc.setFontSize(12);
        doc.text(`GitHub: ${github}`, marginLeft, yPosition);
        yPosition += 6;
        doc.text(`LinkedIn: ${linkedin}`, marginLeft, yPosition);
        yPosition += 6;
        doc.text(`LeetCode: ${leetcode}`, marginLeft, yPosition);
        yPosition += 6;
        doc.text(`GeeksforGeeks: ${gfg}`, marginLeft, yPosition);
        yPosition += 15;

    

        // Hobbies Section
        doc.setFont("times", "bold");
        doc.setFontSize(14);
        doc.text("HOBBIES", marginLeft, yPosition);
        doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
        yPosition += 10;
        doc.setFont("times", "normal");
        doc.setFontSize(12);
        const hobbyLines = hobbies.split(',').map(hobby => hobby.trim()).join(' • ');
        doc.text(hobbyLines, marginLeft, yPosition);

}
else if(resumeFormat === "format2"){
// Define colors
const headerColor = "#E74C3C"; // Red color for headers
const normalColor = "#34495E"; // Dark gray color for normal text
const pageCenter = 105; // Center of the page

// Name and Contact Information (Centered Header)
doc.setFont("Arial", "bold");
doc.setFontSize(20);
doc.setTextColor(normalColor); // Dark gray color for name
doc.text(name.toUpperCase(), pageCenter, yPosition, { align: "center" });
yPosition += 10;

doc.setFontSize(12);
doc.setFont("Arial", "normal");
doc.setTextColor(normalColor); // Dark gray color for contact information
doc.text(`${address} | ${phone} | ${email}`, pageCenter, yPosition, { align: "center" });
yPosition += 15;

// Education Section
doc.setFont("Arial", "bold");
doc.setTextColor(headerColor); // Header color for section title
doc.setFontSize(12);
doc.text("EDUCATION", pageCenter, yPosition, { align: "center" }); // Center align
doc.line(marginLeft, yPosition - 5, 190, yPosition - 5); // Horizontal line under the title
doc.line(marginLeft, yPosition + 2, 190, yPosition + 2); // Horizontal line under the title
yPosition += 10;

doc.setFont("Arial", "normal");
doc.setTextColor(normalColor); // Normal text color for content
doc.setFontSize(12);
doc.text("High School:", marginLeft, yPosition);
doc.text(highschoolInstitution, marginLeft + 50, yPosition);
yPosition += 6;
doc.text(`Year of Passing: ${highschoolYear} | CGPA: ${highschoolCgpa}`, marginLeft + 50, yPosition);
yPosition += 10;

doc.text("University:", marginLeft, yPosition);
doc.text(universityInstitution, marginLeft + 50, yPosition);
yPosition += 6;
doc.text(`Degree: ${universityDegree} | Year: ${universityYear} | CGPA: ${universityCgpa}`, marginLeft + 50, yPosition);
yPosition += 15;

// Skills Section
doc.setFont("Arial", "bold");
doc.setTextColor(headerColor);
doc.setFontSize(12);
doc.text("SKILLS", pageCenter, yPosition, { align: "center" }); // Center align
doc.line(marginLeft, yPosition - 5, 190, yPosition - 5);
doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
yPosition += 10;

doc.setFont("Arial", "normal");
doc.setTextColor(normalColor);
doc.setFontSize(12);
const skillsText = skills.split(',').map(skill => skill.trim()).join(' • ');
const skillsLines = doc.splitTextToSize(skillsText, 160);
doc.text(skillsLines, marginLeft, yPosition);
yPosition += skillsLines.length * 8;

// Work Experience Section
doc.setFont("Arial", "bold");
doc.setTextColor(headerColor);
doc.setFontSize(12);
doc.text("WORK EXPERIENCE", pageCenter, yPosition, { align: "center" }); // Center align
doc.line(marginLeft, yPosition - 5, 190, yPosition - 5);
doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
yPosition += 10;

doc.setFont("Arial", "normal");
doc.setTextColor(normalColor);
doc.setFontSize(12);
doc.text(`Company: ${company}`, marginLeft, yPosition);
yPosition += 6;
doc.text(`Position: ${position} | Years of Experience: ${expYear}`, marginLeft, yPosition);
yPosition += 15;

// Projects Section
doc.setFont("Arial", "bold");
doc.setTextColor(headerColor);
doc.setFontSize(12);
doc.text("PROJECTS", pageCenter, yPosition, { align: "center" }); // Center align
doc.line(marginLeft, yPosition - 5, 190, yPosition - 5);
doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
yPosition += 10;

doc.setFont("Arial", "bold");
doc.setTextColor(normalColor);
doc.setFontSize(12);
doc.text(`${projectName}  |  ${techStack}`, marginLeft, yPosition);
yPosition += 8;
doc.setFont("Arial", "normal");
const descriptionLines = doc.splitTextToSize(projectDescription, 160);
doc.text(descriptionLines, marginLeft, yPosition);
yPosition += descriptionLines.length * 8;

// Technical Skills Section
doc.setFont("Arial", "bold");
doc.setTextColor(headerColor);
doc.setFontSize(12);
doc.text("TECHNICAL SKILLS", pageCenter, yPosition, { align: "center" }); // Center align
doc.line(marginLeft, yPosition - 5, 190, yPosition - 5);
doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
yPosition += 10;

doc.setFont("Arial", "normal");
doc.setTextColor(normalColor);
doc.setFontSize(12);
doc.text(technicalSkills, marginLeft, yPosition);
yPosition += 15;

// Links Section
doc.setFont("Arial", "bold");
doc.setTextColor(headerColor);
doc.setFontSize(12);
doc.text("PROFILE LINKS", pageCenter, yPosition, { align: "center" }); // Center align
doc.line(marginLeft, yPosition - 5, 190, yPosition - 5);
doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
yPosition += 10;

doc.setFont("Arial", "normal");
doc.setTextColor(normalColor);
doc.setFontSize(12);
doc.text(`GitHub: ${github}`, marginLeft, yPosition);
yPosition += 6;
doc.text(`LinkedIn: ${linkedin}`, marginLeft, yPosition);
yPosition += 6;
doc.text(`LeetCode: ${leetcode}`, marginLeft, yPosition);
yPosition += 6;
doc.text(`GeeksforGeeks: ${gfg}`, marginLeft, yPosition);
yPosition += 15;

// Hobbies Section
doc.setFont("Arial", "bold");
doc.setTextColor(headerColor);
doc.setFontSize(12);
doc.text("HOBBIES", pageCenter, yPosition, { align: "center" }); // Center align
doc.line(marginLeft, yPosition - 5, 190, yPosition - 5);
doc.line(marginLeft, yPosition + 2, 190, yPosition + 2);
yPosition += 10;

doc.setFont("Arial", "normal");
doc.setTextColor(normalColor);
doc.setFontSize(12);
const hobbyLines = hobbies.split(',').map(hobby => hobby.trim()).join(' • ');
doc.text(hobbyLines, marginLeft, yPosition);



}
    // Save the PDF
    doc.save(`${name}_Resume.pdf`);
}
