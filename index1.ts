const outputElement = document.getElementById("resume");
const actionButtons = document.createElement("div");
actionButtons.id = " buttonsContainer";
outputElement?.appendChild(actionButtons);

//pdf download  button //
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

const app = document.getElementById("resume");
const copyLinkButton = document.createElement("button");
copyLinkButton.innerText = "Copy Shareable Link";
copyLinkButton.style.fontSize = "20px";
copyLinkButton.style.fontWeight = "bolder";
copyLinkButton.style.marginLeft = "8px";
copyLinkButton.style.cursor = "pointer";

copyLinkButton.addEventListener("click", async () => {
  try {
    const name = "John Doe";
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

if (app) {
  app.appendChild(copyLinkButton);
}