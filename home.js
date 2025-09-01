const validPin = 1234;

// Add money function
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pinNumber = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    // if (bank === true) {
    //   alert("ljkfsdjfldjf");
    //   return;
    // }
    if (accountNumber.length !== 11) {
      alert("Invalid Account Number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Invalid Pin Number");
    }
    const totalNewAvailableBalance = availableBalance + addAmount;
    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });

// withdrow money function
document
  .getElementById("Withdraw-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const pinNumber = parseInt(document.getElementById("withdraw-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (agentNumber.length !== 11) {
      alert("Invalid Agent Number");
      return;
    }
    if (pinNumber !== validPin) {
      alert("Invalid Pin Number");
      return;
    }
    const afterWithdrawAvailableBalance = availableBalance - withdrawAmount;
    document.getElementById("available-balance").innerText =
      afterWithdrawAvailableBalance;
  });
// document
//   .getElementById("Withdraw-money-btn")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     const withdrawAmount = parseInt(
//       document.getElementById("withdraw-amount").value
//     );
//     const availableBalance = parseInt(
//       document.getElementById("available-balance").innerText
//     );
//     console.log(withdrawAmount, availableBalance);
//   });

//   toggling feature
document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
});
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-money-parent").style.display = "none";
  document.getElementById("cash-out-parent").style.display = "block";
});
