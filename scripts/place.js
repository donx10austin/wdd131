 // Example: Add a dynamic message to the footer
  const footer = document.querySelector('footer p');
  if (footer) {
    const year = new Date().getFullYear();
    footer.textContent = `© ${year} Madagascar Travel Guide. Enjoy your virtual journey!`;
  }

  // Example: Simple interaction - log when a info box is clicked
  const infoBoxes = document.querySelectorAll('.info-box');
  infoBoxes.forEach(box => {
    box.addEventListener('click', () => {
      console.log(`Info box "${box.querySelector('h2').textContent}" was clicked.`);
      // In a real application, this could trigger more complex interactions,
      // such as showing more details or playing an audio snippet.
    });
  });
