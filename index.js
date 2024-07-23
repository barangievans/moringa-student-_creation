document.addEventListener('DOMContentLoaded', function() {
    const addItemBtn = document.getElementById('addItemBtn');
    const clearListBtn = document.getElementById('clearListBtn');
    const itemInput = document.getElementById('itemInput');
    const shoppingList = document.getElementById('shoppingList');

    addItemBtn.addEventListener('click', function() {
        const newItemText = itemInput.value.trim();
        if (newItemText !== '') {
            addItemToList(newItemText);
            itemInput.value = '';
        }
    });

    clearListBtn.addEventListener('click', function() {
        shoppingList.innerHTML = '';
    });

    shoppingList.addEventListener('click', function(event) {
        if (event.target && event.target.matches('li')) {
            event.target.classList.toggle('purchased');
        } else if (event.target && event.target.matches('button.markPurchasedBtn')) {
            const listItem = event.target.parentNode;
            listItem.classList.toggle('purchased');
        }
    });

    function addItemToList(itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;
        shoppingList.appendChild(li);

        const markPurchasedBtn = document.createElement('button');
        markPurchasedBtn.textContent = 'Mark Purchased';
        markPurchasedBtn.className = 'markPurchasedBtn';
        li.appendChild(markPurchasedBtn);
    }
});
