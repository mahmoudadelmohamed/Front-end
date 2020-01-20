class UI {
  constructor() {
    this.budgetInput = document.getElementById('budget-input');
    this.budgetFeedback = document.querySelector('.budget-feedback');
    this.budgetAmount = document.getElementById('budget-amount');
    this.balanceAmount = document.getElementById('balance-amount');
    this.balance = document.getElementById('balance');
    this.expenseInput = document.getElementById('expense-input');
    this.amountInput = document.getElementById('amount-input');
    this.expenseFeedback = document.querySelector('.expense-feedback');
    this.expenseList = document.getElementById('expense-list');
    this.expenseAmount = document.getElementById('expense-amount');
    this.itemId = 0;
    this.itemList = [];
  }
  BudgetForm() {
    let val = this.budgetInput.value;
    if (val < 0 || val === '') {
      this.budgetFeedback.innerHTML = `<p>Value Cannot Be Empty Or Negative</p>`;
      this.budgetFeedback.classList.remove('budget-feedback');
      let self = this;
      setTimeout(function() {
        self.budgetFeedback.classList.add('budget-feedback');
      }, 2000)
    } else {
      this.budgetAmount.innerHTML = val;
      this.budgetInput.value = '';
      this.Showbalance();
    }
  }
  /* showRed showGreen showBlack */
  Showbalance() {
    let expense = this.totalExpense();
    let total = parseInt(this.budgetAmount.innerHTML - expense);
    this.balanceAmount.textContent = total;
    if (total < 0) {
      // console.log('Red');
      this.balance.classList.remove('showGreen', 'showBlack');
      this.balance.classList.add('showRed');
      // console.log(this.balance);
    } else if (total > 0) {
      // console.log('Green');
      this.balance.classList.remove('showRed', 'showBlack');
      this.balance.classList.add('showGreen');
      // console.log(this.balance);
    } else if (total === 0) {
      // console.log('Black');
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack');
      // console.log(this.balance);
    }
  }
  ExpenseForm() {
    let exInput = this.expenseInput.value;
    let amInput = this.amountInput.value;
    if (exInput === '' || amInput < 0 || amInput === '') {
      // console.log('Alert');
      this.expenseFeedback.innerHTML = `<p>Value Cannot Be Empty Or Negative</p>`;
      this.expenseFeedback.classList.remove('expense-feedback');
      let self = this;
      setTimeout(function() {
        self.expenseFeedback.classList.add('expense-feedback');
      }, 2000)
    } else {
      let amount = parseInt(amInput);
      // console.log(amount, exInput, this.itemId);
      let expenseObject = {
        id: this.itemId,
        title: exInput,
        amount: amount
      };
      // console.log(expenseObject);
      this.addExpense(expenseObject);
      this.itemList.push(expenseObject);
      // console.log(this.itemList);
      this.itemId++;
      this.expenseInput.value = '';
      this.amountInput.value = '';
      this.Showbalance();
    }
  }
  addExpense(object) {
    // console.log('Hello', object);
    const div = document.createElement('div');
    div.className = 'expense';
    div.innerHTML = `
  <div class="expense-item d-flex justify-content-between align-items-baseline">
     <h6 class="expense-title mb-0 text-uppercase list-item">- ${object.title}</h6>
     <h5 class="expense-amount mb-0 list-item">${object.amount}</h5>
     <div class="expense-icons list-item">
      <a href="#" class="edit-icon mx-2" data-id="${object.id}">
       <i class="fas fa-edit" id="edit"></i>
      </a>
      <a href="#" class="delete-icon" data-id="${object.id}">
       <i class="fas fa-trash" id="delete"></i>
      </a>
     </div>
    </div>
    `;
    this.expenseList.appendChild(div);
  }
  totalExpense() {
    let total = 0;
    for (var i = 0; i < this.itemList.length; i++) {
      total += parseInt(this.itemList[i].amount);
    }
    this.expenseAmount.innerHTML = total;
    return total;
  }
  deleteExpence(element) {
    console.log(element);
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    this.expenseList.removeChild(parent);
    let temp = this.itemList.filter(function(item) {
      return item.id !== id;
    })
    this.itemList = temp;
    console.log(this.itemList);
    this.Showbalance();
  }
  editExpence(element) {
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    this.expenseList.removeChild(parent);
    let expense = this.itemList.filter(function(item) {
      return item.id === id;
    })
    this.expenseInput.value = expense[0].title;
    this.amountInput.value = expense[0].amount;

    let temp = this.itemList.filter(function(item) {
      return item.id !== id;
    })
    this.itemList = temp;
    console.log(this.itemList);
    this.Showbalance();
  }

}
const ui = new UI;
const budgetForm = document.getElementById('budget-form');
const expenseForm = document.getElementById('expense-form');
const budgetList = document.getElementById('expense-list');
budgetForm.addEventListener('submit', e => {
  ui.BudgetForm();
  e.preventDefault();
});
expenseForm.addEventListener('submit', e => {
  ui.ExpenseForm();
  e.preventDefault();
})
budgetList.addEventListener('click', e => {
  if (e.target.className === 'fas fa-trash') {
    ui.deleteExpence(e.target.parentElement);
  } else if (e.target.className === 'fas fa-edit') {
    ui.editExpence(e.target.parentElement);
  }
  e.preventDefault();
})
