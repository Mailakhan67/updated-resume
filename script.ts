document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    const profilePic = document.getElementById(
      "profilePic"
    ) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const lastNameElement = document.getElementById(
      "last-name"
    ) as HTMLInputElement;
    const ageElement = document.getElementById("age") as HTMLInputElement;
    const educationElement = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillElement = document.getElementById("skills") as HTMLInputElement;

    if (
      profilePic &&
      nameElement &&
      emailElement &&
      phoneElement &&
      lastNameElement &&
      ageElement &&
      educationElement &&
      experienceElement &&
      skillElement 
    ) {

      //get values from form
      const name = nameElement.value;
      const email = emailElement.value;
      let phone = phoneElement.value;
      let lastName = lastNameElement.value;
      let age = ageElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillElement.value;
      

      // profile
      const profilePicture = profilePic.files?.[0];
      const profilePicUrl = profilePicture
        ? URL.createObjectURL(profilePicture)
        : " ";

      // create resume output
      const resumeOutput = ` <h2>Resume</h2>
      ${profilePicUrl ? `<img src="${profilePicUrl}" class="profilePic">` : ""}
  <p><strong>Name:</strong>${name} </p> 
   <p><strong>Email:</strong> ${email}</p> 
  <p><strong>Phone:</strong>${phone}</p>
  <p><strong>Last Name:</strong>${lastName}</p>
  <p><strong>age:</strong> ${age}</p>
  <h3>Education</h3>
   <p>${education}</p>
     <h3>Experience</h3>
   <p> ${experience}</p>
     <h3>Skills</h3>
   <p > ${skills}</p>
   `;

      //*****************************************************************************
      //display the resume in the output container

      const documentOutputElement = document.getElementById("resumeOutput");
      if (documentOutputElement) {
        documentOutputElement.innerHTML = resumeOutput;
        documentOutputElement.classList.remove("hidden");

        //create container for button
        const actionButtons = document.createElement("div");
        actionButtons.id = " buttonsContainer";
        documentOutputElement.appendChild(actionButtons);

        //pdf download  button
        const pdfDownloadButton= document.createElement("button");
        pdfDownloadButton.textContent = "Download as PDF";
        pdfDownloadButton.style.fontSize = "20px";  

        pdfDownloadButton.addEventListener("click", () => {
          window.print();
        });
        actionButtons.appendChild(pdfDownloadButton);

        //add shareable link button
        const copyLinkButton = document.createElement("button");
        copyLinkButton.textContent = "Copy link";
        copyLinkButton.style.fontSize = "20px"; 
        copyLinkButton.addEventListener("click", async () => {
          try {
            const shareableLink = `https://resume-lilac-one.vercel.app/ ${name.replace(
              /\s+/g,
              "_"
            )}_cv.html `;
            await navigator.clipboard.writeText(shareableLink);
            alert("sharable link copied to clipboard");
          } catch (error) {
            console.error("Failed to copy link", error);
            alert("Failed to copy link to clipboard, please try again ");
          }
        });
        actionButtons.appendChild(copyLinkButton);
      } else {
        console.error("Resume output container not found");
      }
    } else {
      console.error("Form elements are missing");
    }
  });
