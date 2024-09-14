//listing element
document.getElementById('resume')?.addEventListener('submit',function(event){
    event.preventDefault();

    //giving references to form icons

    
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const candidateElement = document.getElementById('candidate') as HTMLInputElement;
    
    
    //provide all foam icons
    if (nameElement &&  emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement && candidateElement  ){

        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const address = addressElement.value ;
        const education = educationElement.value ;
        const experience = educationElement.value ;
        const skills = skillsElement.value ;

           //create resume output
    const resumeoutput =`
    <h2>Resume</h2>
    
    <p><strong>Name :</strong> <span id="edit-name" class="editable">${name}</span></p>
    <p><strong>Email :</strong> <span id="edit-email" class="editable"> ${email}</span></p>
    <p><strong>Phone :</strong> <span id="edit-phone" class="editable"> ${phone}</span></p>
    <p><strong>Address :</strong> <span id="edit-address" class="editable"> ${address}</span></p>
     
    
    <h3>Education</h3>
    <p <span id="edit-education" class="editable">>${education}</p>

     <h3>Experience</h3>
    <p <span id="edit-experience" class="editable">>${experience}</p>

     <h3>Skills</h3>
    <p <span id="edit-skills" class="editable">>${skills}</p>
 `;  

 //resume output
    const resumeoutputElement = document.getElementById('resumeoutput')
    if(resumeoutputElement){
        resumeoutputElement.innerHTML = resumeoutput;
        resumeoutputElement.classList.remove("hidden");

        //create continer for button

        const buttonsContainer = document.createElement("div");
        buttonsContainer.id ="buttonsContainer";
        resumeoutputElement.appendChild(buttonsContainer);

        // add Download PDF button

        const downloadButton = document.createElement("button");
        downloadButton.textContent  = "Downlod as PDF" ;
        downloadButton.addEventListener("click", () => {
        window.print();
        });
        buttonsContainer.appendChild(downloadButton);

        //Add Shareable link button

        const shareLinkButton = document.createElement("button");
        shareLinkButton.textContent = "Copy Shareable Link";
        shareLinkButton.addEventListener("click", async () => {
            try{
                // create a unique shareable link 
            const shareableLink = `http://yourdomain.com/resumes/${name.replace(
                /\s+/g,
                "_"
            )}_cv.html`;
            //use clipboard API to copy the shareable link
            await navigator.clipboard.writeText(shareableLink);
            alert("Shareable link copied to clipboard");
            }catch(err){
                console.error("Failed to copylink:",err);
                alert("Failed to copy link. please y=try again")
            }
        });
        buttonsContainer.appendChild(shareLinkButton);
     }else{
        console.error("Resume output container not found")
     }
   }else{
     console.error('form element are missing')
}
 });

                