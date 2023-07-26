// Insert your auto form filler bot code here
// For simplicity, you can use the FormFillerBot code from the previous response.

// Example usage:
// const bot = new FormFillerBot();

// Function to handle form filling when the extension icon is clicked
function fillFormOnIconClick() {
    // Your form data here
    const form_data = {
      'vrushab': 'zaveri',
      'test1': 'test2',
      'hii': 'hello',
      'sumit': 'submit',
      'checkbox tick': 'checked',
    };
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: () => {
          // Inject and execute the auto form filler bot logic
          // Replace this with your actual FormFillerBot code
          // Example:
          // bot.fillForm(form_data);
        },
      });
    });
  }
  
  // Event listener for the extension icon click
  chrome.action.onClicked.addListener(fillFormOnIconClick);
  