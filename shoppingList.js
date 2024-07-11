 // Initialize items array
 let itemsArray = [];

 // Function to save items to localStorage
 function saveToLocalStorage() {
     localStorage.setItem('shoppingList', JSON.stringify(itemsArray));
 }

 // Function to load items from localStorage
 function loadFromLocalStorage() {
     const storedItems = localStorage.getItem('shoppingList');
     if (storedItems) {
         itemsArray = JSON.parse(storedItems);
     } else {
         itemsArray = [];
     }
     renderList(); // Render the list after loading from localStorage
 }

 // Function to render the shopping list
 function renderList() {
     const shoppingList = document.getElementById('shoppingList');
     shoppingList.innerHTML = ''; // Clear existing list items
     itemsArray.forEach((item, index) => {
         const listItem = document.createElement('li');
         listItem.textContent = item.name;
         if (item.purchased) {
             listItem.classList.add('purchased');
         }
         shoppingList.appendChild(listItem);
     });
 }

 // Function to add a new item to the list
 function addItem() {
     const newItemName = document.getElementById('itemInput').value.trim();
     if (newItemName !== '') {
         const newItem = { name: newItemName, purchased: false };
         itemsArray.push(newItem);
         saveToLocalStorage();
         renderList();
         document.getElementById('itemInput').value = ''; // Clear input field after adding
     }
 }

 // Example of marking all items as purchased and updating localStorage
 function markAllAsPurchased() {
     itemsArray.forEach(item => {
         item.purchased = true;
     });
     saveToLocalStorage();
     renderList();
 }

 // Example of clearing the entire list and updating localStorage
 function clearList() {
     itemsArray = [];
     localStorage.removeItem('shoppingList');
     renderList();
 }

 // Load items from localStorage on page load
 loadFromLocalStorage();