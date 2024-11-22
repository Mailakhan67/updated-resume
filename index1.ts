const outputElement = document.getElementById("resume");
const actionButtons = document.createElement("div");
actionButtons.id = " buttonsContainer";
outputElement?.appendChild(actionButtons);

// // //         //pdf download  button //
const pdfDownloadButton = document.createElement("button");
pdfDownloadButton.innerText = "Download as PDF";
pdfDownloadButton.style.backgroundColor = "green";
console.log(pdfDownloadButton);
pdfDownloadButton.style.fontSize = "20px";
pdfDownloadButton.style.animation = "2sc";
pdfDownloadButton.style.cursor = "pointer";
pdfDownloadButton.style.fontWeight = "bolder";
document.querySelector("body")?.append(pdfDownloadButton);

pdfDownloadButton.addEventListener("click", () => {
  window.print();
});
actionButtons.appendChild(pdfDownloadButton);

// ///////////////////////////

// Create a button to trigger PDF download

// Create a button to trigger PDF download

//add shareable link button
// const copyLinkButton = document.createElement("button");
// copyLinkButton.innerText = "Copy link";
// copyLinkButton.style.fontSize = "20px";
// copyLinkButton.addEventListener("click", async () => {
//   try {
//     const shareableLink = `https://yourdomain.com/resumes ${name.replace(
//       /\s+/g,
//       "_"
//     )}_cv.html `;
//     await navigator.clipboard.writeText(shareableLink);
//     alert("sharable link copied to clipboard");
//   } catch (error) {
//     console.error("Failed to copy link", error);
//     alert("Failed to copy link to clipboard, please try again ");
//   }
// });
///////////////////////
// Select the parent element where the button will be added
const app = document.getElementById("resume");

// Create a button element
const copyLinkButton = document.createElement("button");
copyLinkButton.innerText = "Copy Shareable Link";
copyLinkButton.style.fontSize = "20px";
// copyLinkButton.style.padding = "10px 20px";
copyLinkButton.style.fontWeight = "bolder";
copyLinkButton.style.marginLeft = "8px";
copyLinkButton.style.cursor = "pointer";

// Add an event listener to handle the button click
copyLinkButton.addEventListener("click", async () => {
  try {
    // Define the name and shareable link
    const name = "John Doe"; // Replace with dynamic input if needed
    const shareableLink = `https://yourdomain.com/resumes/${name.replace(
      /\s+/g,
      "_"
    )}_cv.html`;

    // Copy the link to clipboard
    await navigator.clipboard.writeText(shareableLink);
    alert("Sharable link copied to clipboard: " + shareableLink);
  } catch (error) {
    console.error("Failed to copy link", error);
    alert("Failed to copy link. Please try again.");
  }
});

// Append the button to the parent element
if (app) {
  app.appendChild(copyLinkButton);
}
