const SHA256 = require("sha256");

class AbelBlockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }

  createGenesisBlock() {
    return {
      index: 1,
      timestamp: Date.now,
      transactions: [],
      nonce: 0,
      hash: "GenesisHash",
      previousBlockHash: "GenesisBlock",
    };
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  generateHash(previousBlockHash, timestamp, pendingTransactions) {
    let hash = "";
    let nonce = 0;

    while (hash.substring(0, 3) !== "000") {
      nonce++;
      hash = SHA256(
        previousBlockHash +
          timestamp +
          JSON.stringify(this.pendingTransactions) +
          nonce
      ).toString();
    }

    return { hash, nonce };
  }

  createTransactions(amount, sender, recipient) {
    this.pendingTransactions.push({ amount, sender, recipient });
  }

  createBlock() {
    const timestamp = Date.now;
    const transactions = this.pendingTransactions;
    const previousBlockHash = this.getLastBlock().hash;
    const generateHash = this.generateHash(
      previousBlockHash,
      timestamp,
      transactions
    );

    const newBlock = {
      index: this.chain.length + 1,
      timestamp,
      transactions,
      nonce: generateHash.nonce,
      hash: generateHash.hash,
      previousBlockHash,
    };

    this.chain.push(newBlock);
    this.pendingTransactions = [];

     return newBlock;
  }
}

module.exports = AbelBlockchain;
