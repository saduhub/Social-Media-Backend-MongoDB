// Highlight nav links
document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
      }
    });
});
// Update display after each action
function updateDisplay(updateToDocuments) {
  const displayDiv = document.getElementById('display');
  const formattedJson = JSON.stringify(updateToDocuments, null, 2);
  displayDiv.querySelector('code').textContent = formattedJson;
}

window.updateDisplay = updateDisplay;
