function calculateEMI() {
      const amount = parseFloat(document.getElementById('amount').value);
      const annualInterest = parseFloat(document.getElementById('interest').value);
      const tenureYears = parseFloat(document.getElementById('tenure').value);

      if (isNaN(amount) || isNaN(annualInterest) || isNaN(tenureYears)) {
        alert("Please fill all fields correctly.");
        return;
      }

      const monthlyInterest = annualInterest / 12 / 100;
      const tenureMonths = tenureYears * 12;

      const emi = (amount * monthlyInterest * Math.pow(1 + monthlyInterest, tenureMonths)) /
                  (Math.pow(1 + monthlyInterest, tenureMonths) - 1);

      const totalPayment = emi * tenureMonths;
      const totalInterest = totalPayment - amount;

      document.getElementById('result').innerHTML = `
        EMI: ₹${emi.toFixed(2)}<br>
        Total Interest: ₹${totalInterest.toFixed(2)}<br>
        Total Payment: ₹${totalPayment.toFixed(2)}
      `;
    }