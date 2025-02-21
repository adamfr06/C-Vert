chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "convert",
        title: "C-Vert",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "convert") {
        chrome.action.openPopup();
    }
});
