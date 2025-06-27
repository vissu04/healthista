// Function to create a new user message
function createUserMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message');
    messageElement.textContent = message;
    return messageElement;
  }

//   // Function to create a new bot message
  function createBotMessage(message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', 'bot-message');
    messageElement.textContent = message;
    return messageElement;
  }

// Function to handle user input
async function handleUserInput() {
  var userInput = document.getElementById('user-input').value;
  console.log(createUserMessage(userInput))
  
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': '74e08c8d1dmshc3c3b3d2a461171p1baf7fjsnd8f3e40e57e1',
      'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      messages: [
        {
          role: 'user',
          content: userInput
        }
      ]
    })
  };
  try {
    const response = await fetch('https://open-ai21.p.rapidapi.com/conversationpalm2', options);
    const result = await response.text()
    console.log(result)
    createBotMessage(result)
  } catch (err) {
    console.log(err);
  }
}





// async function createResponse(message) {
//   const options = {
//     method: 'POST',
//     headers: {
//       'x-rapidapi-key': '74e08c8d1dmshc3c3b3d2a461171p1baf7fjsnd8f3e40e57e1',
//       'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
//       'Content-Type': 'application/json'
//     },
//     body: {
//       messages: [
//         {
//           role: 'user',
//           content: message
//         }
//       ]
//     }
//   };
//   try {
//     const response = await fetch('https://open-ai21.p.rapidapi.com/conversationpalm2', options);
//     console.log(response.text)
//   } catch (err) {
//     console.log(err);
//   }
// }

// Event listener for send button
document.getElementById('send-btn').addEventListener('click', handleUserInput);

// Event listener for Enter key press
document.getElementById('user-input').addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});
