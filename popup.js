document.addEventListener("DOMContentLoaded", function () {
    const exportButton = document.getElementById("exportButton");

    exportButton.addEventListener("click", function () {
        // Execute your content script to export conversations
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, { file: "content.js" });
        });
    });
});
