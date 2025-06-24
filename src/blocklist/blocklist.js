import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", function (){
    // Identify relevant DOM areas by their ID
    const blockedWebsitesTextArea = document.getElementById("blocklist-text")
    const saveButton = document.getElementById("blocklist-button")

    // Populate the blocklist text area with the domains the user wants blocked
    const blockedWebsites = localStorage.getItem("blockedWebsites")
    if (blockedWebsites != null){
        console.log("in here");
        blockedWebsitesTextArea.value = blockedWebsites.split(",").join("\n");
    }
   
    // When the save button is clicked, store blocklist websites in local browser storage
    saveButton.addEventListener("click", function() {
        console.log("button clicked!");
        const blockedWebsites = blockedWebsitesTextArea.value.split("\n");
        localStorage.setItem("blockedWebsites", blockedWebsites);
	browser.storage.local.set({"blockedWebsites", blockedWebsites});
    });
});
