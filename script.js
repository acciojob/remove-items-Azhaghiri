function removeColor() {
            // Get the select element
            const colorSelect = document.getElementById('colorSelect');

            // Get the index of the selected option
            const selectedIndex = colorSelect.selectedIndex;

            // If an option is selected, remove it
            if (selectedIndex !== -1) {
                colorSelect.remove(selectedIndex);
            }
        }