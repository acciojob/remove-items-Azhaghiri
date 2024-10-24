//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', function() {
    const selectElement = document.getElementById('colorSelect');
    const selectedIndex = selectElement.selectedIndex; // Get the index of the selected option
    
    if (selectedIndex !== -1) { // Ensure an option is selected
        selectElement.remove(selectedIndex); // Remove the selected option
    }
});
