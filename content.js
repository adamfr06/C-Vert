document.addEventListener("mouseup", function () {
    let selectedText = window.getSelection().toString().trim();
    if (selectedText && !isNaN(selectedText)) {
        chrome.storage.local.set({ selectedNumber: selectedText });
    }
});
