// Inject the roaming character
const character = document.createElement('img');
character.id = 'filra-character';
character.src = chrome.runtime.getURL('character.gif'); // Your downloaded animated GIF of the running anime character
character.onload = () => console.log('Filra GIF loaded successfully');
character.onerror = () => console.log('Filra GIF failed to load - check file path or format');
character.style.position = 'fixed';
character.style.top = '50px';
character.style.left = '50px';
character.style.width = '50px';
character.style.height = '50px';
character.style.zIndex = '9999';
character.style.pointerEvents = 'none'; // Doesn't interfere with page interactions
character.style.transition = 'left 2s ease-in-out, top 2s ease-in-out'; // Smooth movement for running effect
document.body.appendChild(character);

// Function to move the character randomly
function moveCharacter() {
  const x = Math.random() * (window.innerWidth - 50);
  const y = Math.random() * (window.innerHeight - 50);
  character.style.left = x + 'px';
  character.style.top = y + 'px';
}

// Move every 1.5 seconds for more dynamic running
setInterval(moveCharacter, 1500);