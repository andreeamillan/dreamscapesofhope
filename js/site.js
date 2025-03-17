// Define the subpages (you can change these URLs to whatever subpages you want)
const subpages = [
    'page1.html', // For the button in container1
    'page2.html', // For the button in container2
    'page3.html', // For the button in container3
    'page4.html', // For the button in container4
    'page5.html', // For the button in container5
    'page6.html'  // For the button in container6
];

// Function to make each button link to a subpage
function linkButtonsToSubpages() {
    // Get all container elements with class "container" and loop through them
    const containers = document.querySelectorAll('div[class^="container"]');
    
    containers.forEach((container, index) => {
        // Get the button inside the current container
        const button = container.querySelector('.btn');
        
        // Set the button's click event to redirect to the corresponding subpage
        button.addEventListener('click', function() {
            window.location.href = subpages[index]; // Redirect to the subpage
        });
    });
}

// Initialize the linking when the page loads
linkButtonsToSubpages();

// If you want to dynamically add buttons (e.g., using the add button), you can also update the subpage list accordingly
document.getElementById('addButton').addEventListener('click', function() {
    // If you add more buttons, update the subpages list and reinitialize the links
    subpages.push('page7.html'); // Example for adding a new subpage
    linkButtonsToSubpages();
});
