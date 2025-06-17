// Handles background tasks and browser events
let notificationsData = '';

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "productChanged") {
      // Save product name
      notificationsData = '';
      notificationsData = message.productName;

      // Show a notification
      chrome.notifications.create('productChanged', {
        type: "basic",
        iconUrl: "images/icon.jpeg",
        title: "New Product Detected",
        message: "Click to view sustainable alternatives.",
        buttons: [
          { title: 'Go' }
        ]
      });
    }
  });

chrome.notifications.onButtonClicked.addListener((notificationId) => {
  if (notificationId === 'productChanged') {
    // Open new tab
    chrome.tabs.create({ url: chrome.runtime.getURL("popup.html") });

    // Send API call to get data
  }
});