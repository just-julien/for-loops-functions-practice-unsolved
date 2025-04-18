// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const incorrectBalanceAccts = [];

  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    let depositTotal = 0;

    if (account.deposits) {
      for (let x = 0; x < account.deposits.length; x++) {
        depositTotal += account.deposits[x];
      }
    }

    if (account.withdrawals) {
      for (let y = 0; y < account.withdrawals.length; y++) {
        depositTotal -= account.withdrawals[y];
      }
    }

    if (Math.abs(depositTotal - account.balance) > 0.001) {
      incorrectBalanceAccts.push(account);
    }
  }

  return incorrectBalanceAccts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
