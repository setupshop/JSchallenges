
let balance = 400;
let selection ='a';

alert('Welcome to Gringotts Wizarding Bank! \nYour Current Balance is: ' + balance + '$');
function transactionSelection() {
  selection = prompt ('What transaction would you like to perform? \nW to withdraw\nD to deposit\nB to view balance\nQ to quit session');
  selection = selection.toUpperCase();
  return selection;
}
transactionSelection();
while (selection != 'Q') {
  switch (selection) {
    case 'W':
      withdrawal();
      transactionSelection();
      break;
    case 'D':
      deposit();
      transactionSelection();
      break;
    case 'B':
      viewBalance();
      transactionSelection();
      break;
    default:
      alert('Invalid Input');
      transactionSelection();
      break;
  }
}

function withdrawal() {
  let withdrawalAmount = prompt('How much would you like to withdraw?');
  withdrawalAmount = parseInt(withdrawalAmount);
  if (withdrawalAmount <= balance) {
    balance = balance - withdrawalAmount;
    alert('You have successfully made a withdrawal! \nYour new balance is: ' + balance);
    if (balance <= 50) {
      alert('Warning: Your balance is getting low!')
    }
  }
  else {
    alert('Insufficient balance!');
  }
}

function deposit() {
  let dipositAmount = prompt('How much would you like to deposit?');
  dipositAmount = parseInt(dipositAmount);
  if (dipositAmount <= 50000) {
    balance = balance + dipositAmount;
    alert('You have successfully made a deposit of: ' + dipositAmount + '\nYour new balance is: ' + balance);
  }
  else {
    alert('Your deposit amount Exeedes the maximum amount alowed. \nPlease deposit an amount less than 50,000$');
  }
}

function viewBalance() {
  alert('Your current balance is: ' + balance);
}
