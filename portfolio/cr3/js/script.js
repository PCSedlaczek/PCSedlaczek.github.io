// Create 9 variables for each band prices (input manually)
var tier1 = 20;
var tier2 = 140;
var tier3 = 249;

var band1 = tier2;
var band2 = tier1;
var band3 = tier3;
var band4 = tier2;
var band5 = tier1;
var band6 = tier3;
var band7 = tier2;
var band8 = tier1;
var band9 = tier3;

// Create function calculateInvoice()
  // Use variables as arguments passed to function calculateInvoice()
  // 3 parameters, price for 1 band from each stage
  // Calculate and return sum of 3 parameters
  // Print result of function in console
function calculateInvoice(price1, price2, price3) {
  let total = price1 + price2 + price3;
  return '$' + total;
}

// Calculate at least 3 invoices from combinations of different events and print to console
console.log('Regular invoice:')
console.log('1x each price: ' + calculateInvoice(band1, band5, band9));
console.log('3x lowest price: ' + calculateInvoice(band2, band5, band8));
console.log('3x highest price: ' + calculateInvoice(band3, band6, band9));
console.log('');

// Create function studentInvoice()
  // Apply 10% discount to final invoice
  // Use same parameters as calculateInvoice()
function studentInvoice(price1, price2, price3) {
  let regular = price1 + price2 + price3;
  let total = regular - (regular/100*10);
  return '$' + total.toFixed(2);
}

// Print 3 examples of studentInvoice() on console
console.log('Student invoice:')
console.log('1x each price: ' + studentInvoice(band1, band5, band9));
console.log('3x lowest price: ' + studentInvoice(band2, band5, band8));
console.log('3x highest price: ' + studentInvoice(band3, band6, band9));