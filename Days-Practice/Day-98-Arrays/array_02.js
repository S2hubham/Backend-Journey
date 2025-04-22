let stocks = [7, 1, 5, 3, 6, 4];  // Buy at 1, sell at 6, profit -> 5
// let stocks = [9, 2, 7, 1, 5, 3];  // Buy at 2, Sell at 7 → Profit: 5
// let stocks = [10, 9, 8, 7, 6, 5];  // No selling day gives profit → Profit: 0
// let stocks = [8, 6, 5, 2, 3, 10];  // Buy at 2, Sell at 10 → Profit: 8
// let stocks = [1, 10, 5, 3, 2];  // Buy at 1, Sell at 10 → Profit: 9
// let stocks = [5, 5, 5, 5, 5];  // No profit → Profit: 0


let n = stocks.length;

// brute force
/* let maxProf = 0, buyPrice = 0, sellPrice = 0;
for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++){
        let prof = stocks[j] - stocks[i];
        if(maxProf < prof){
            sellPrice = stocks[j];
            buyPrice = stocks[i];
            maxProf = prof;
        }
    }
} */


// better 
let minPrice = stocks[0], maxProf = 0, buyPrice = stocks[0], sellPrice = stocks[0];

for(let i = 1; i < n; i++){
    if(stocks[i] - minPrice > maxProf) {
        maxProf = stocks[i] - minPrice;
        buyPrice = minPrice;
        sellPrice = stocks[i];
    }
    if(stocks[i] < minPrice){
        minPrice = stocks[i];
    }
}
if(maxProf == 0){
    buyPrice = 0;
    sellPrice = 0;
}



console.log("Buying price is : ", buyPrice);
console.log("Selling price is : ", sellPrice);
console.log("Maximum profit is : ", maxProf);