document.addEventListener('DOMContentLoaded', function() {
    const transactionType = document.getElementById('transactionType');
    const transactionAmount = document.getElementById('transactionAmount');
    const transactionReference = document.getElementById('transactionReference');
    const transactionCategory = document.getElementById('transactionCategory'); 
    const addTransactionBtn = document.getElementById('addTransaction');
    const incomeTotalAmount = document.getElementById('incomeTotalAmount');
    const expenseTotalAmount = document.getElementById('expenseTotalAmount');
    const transactionList = document.querySelector('.transactionList');
    const transactionMessage = document.getElementById('transactionMessage'); 

    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    savedTransactions.forEach(transaction => {
        renderTransaction(transaction);
    });

    addTransactionBtn.addEventListener('click', function() {
        const type = transactionType.value;
        const amount = parseFloat(transactionAmount.value);
        const reference = transactionReference.value;
        const category = transactionCategory.value;

        if (!isNaN(amount)) {
            const transactionData = {
                type,
                amount,
                reference,
                category
            };

            savedTransactions.push(transactionData);
            localStorage.setItem('transactions', JSON.stringify(savedTransactions));

            renderTransaction(transactionData);

            transactionAmount.value = '';
            transactionReference.value = '';
        }
    });

    function renderTransaction(transactionData) {
        const { type, amount, reference, category } = transactionData;
        const transactionItem = document.createElement('div');
        transactionItem.className = 'transactionItem';
    
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.className = 'deleteButton';
    
        deleteButton.addEventListener('click', function() {
            removeTransaction(transactionItem, transactionData);
        });
    
        transactionItem.appendChild(deleteButton);
    
        const transactionText = document.createElement('span');
        transactionText.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} ${type.charAt(0).toUpperCase() + type.slice(1)} - £${amount.toFixed(2)}`;
    
        if (reference) {
            transactionText.textContent += ` | ${reference}`;
        }
    
        transactionItem.appendChild(transactionText);
    
        transactionList.appendChild(transactionItem);
    
        if (type === 'income') {
            transactionItem.style.color = '#4ceda5';
        } else if (type === 'expense') {
            transactionItem.style.color = '#eb5e5e';
        }
    
        if (transactionList.childElementCount > 0) {
            transactionMessage.textContent = '';
        }
    }    
    
    function removeTransaction(transactionItem, transactionData) {
        const index = savedTransactions.indexOf(transactionData);
        if (index !== -1) {
            savedTransactions.splice(index, 1);
            localStorage.setItem('transactions', JSON.stringify(savedTransactions));
        }
        transactionList.removeChild(transactionItem); 
    }
});
