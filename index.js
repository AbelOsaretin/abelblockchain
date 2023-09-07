const AbelBlockchain = require("./Blockchain.js");

let abelCoin = new AbelBlockchain;

abelCoin.createTransactions(100, "0x88473773hdhbd", "0xdjdjdhhhf7773");
abelCoin.createBlock();

abelCoin.createTransactions(60, "0x74hjejkejkjkkd", "0xddkkfnnnf54jf776");
abelCoin.createBlock();

abelCoin.createTransactions(54, "998difjdifjdijfdfd", "dfdfdfdfdfddthg773");
abelCoin.createBlock();

abelCoin.createTransactions (1098378, "dfdkfjkdkfjdifdkfd", "kdfdkfjdkfjdkfjakdjfkj");
abelCoin.createBlock();

abelCoin.createTransactions (7774, "sdkkkjkdjafkdfkfd", "dfdfdfdflkjkjkjfkdj");


console.log(abelCoin);
console.log("Third Transaction on the chain ");
console.log(abelCoin.chain[4].transactions);