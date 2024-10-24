function removeSelectedOption() {
				const selectElement = document.getElementById('colorSelect');
				const selectedIndex = selectElement.selectedIndex; // Get the index of the selected option
				
				if (selectedIndex !== -1) { // Ensure an option is selected
					selectElement.remove(selectedIndex); // Remove the selected option
				}
			}

			// Attach the event listener to the button, using the named function
			const button = document.querySelector('input[type="button"]');
			button.addEventListener('click', removeSelectedOption);