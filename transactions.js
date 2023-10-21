document.addEventListener('DOMContentLoaded', function() {
    const transactionType = document.getElementById('transactionType');
    const transactionAmount = document.getElementById('transactionAmount');
    const transactionReference = document.getElementById('transactionReference');
    const transactionCategory = document.getElementById('transactionCategory'); // Added
    const addTransactionBtn = document.getElementById('addTransaction');
    const incomeTotalAmount = document.getElementById('incomeTotalAmount');
    const expenseTotalAmount = document.getElementById('expenseTotalAmount');
    const transactionList = document.querySelector('.transactionList');

    addTransactionBtn.addEventListener('click', function() {
        const type = transactionType.value;
        const amount = parseFloat(transactionAmount.value);
        const reference = transactionReference.value;
        const category = transactionCategory.value; // Added

        if (!isNaN(amount)) {
            const transactionItem = document.createElement('div');
            transactionItem.className = 'transactionItem';
            transactionItem.textContent = `${category.charAt(0).toUpperCase()  + category.slice(1)} ${type.charAt(0).toUpperCase() + type.slice(1)}  - £${amount.toFixed(2)}`;

            if (reference) {
                transactionItem.textContent += ` | ${reference}`;
            }

            transactionList.appendChild(transactionItem);

            if (type === 'income') {
                transactionItem.style.color = '#4ceda5';
            } else if (type === 'expense') {
                transactionItem.style.color = '#eb5e5e';
            }

            incomeTotalAmount.textContent = `$${incomeTotal.toFixed(2)}`;
            expenseTotalAmount.textContent = `$${expenseTotal.toFixed(2)}`;

            transactionAmount.value = '';
            transactionReference.value = '';
        }
    });
});
