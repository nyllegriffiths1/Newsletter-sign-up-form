document.addEventListener("DOMContentLoaded", function(){
    const replaceContentBtn = document.getElementById("main-btn");
    const contentToReplace = document.getElementById("content");


replaceContentBtn.addEventListener("click", function(){
    // New container
    const newContent = document.createElement("div");
    // Create new img tag
    const newImg = document.createElement("img");
    newImg.src = "/Newsletter-sign-up-form/assets/images/icon-success.svg";
    // new heading
    const newHeading = document.createElement("h1");
    newHeading.textContent = "Thanks for subscribing!";
    // Add the <h2> and <img> elements to new content
    newContent.appendChild(newImg);
    newContent.appendChild(newHeading);
    // paragraph 
    const additionalContent = document.createElement("p");
    additionalContent.textContent = "A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription";
    newContent.appendChild(additionalContent);

    // button
    const newBtn = document.createElement("button");
    newBtn.textContent = "Dismiss message";
    newContent.appendChild(newBtn);

    // Add a class to the new content container
    newContent.classList.add("new-container");
    // Remove old class name
    contentToReplace.classList.remove("container");

    // Replace the existing content with the new content

    contentToReplace.innerHTML = " ";
    contentToReplace.appendChild(newContent);
    
    });

});