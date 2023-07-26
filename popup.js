// Function to trigger form filling on the current page when the button is clicked
function fillForm() {
    // Call the auto form filler bot logic here
    // Example:
    // chrome.scripting.executeScript({
    //   function: () => {
    //     bot.fillForm(form_data);
    //   },
    // });
  
    // Display a message to the user that the form has been filled
    alert('Form filled!');
  }
  
  // Event listener for the "Fill Form" button click
  document.getElementById('fillFormButton').addEventListener('click', fillForm);
  