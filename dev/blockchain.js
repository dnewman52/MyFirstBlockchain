const uuid = require('uuid/v1');
const sha256 = require('sha256');
const currentNodeUrl = process.argv[3];

function Blockchain()
{
    this.chain = [];
    this.newTransactions = [];    
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];
    this.createNewBlock(100,'0','0'); //Creating the genesis block
}
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash)
{
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash,
    };
    this.newTransactions = [];
    this.chain.push(newBlock);
    return newBlock;
}

module.exports = Blockchain;

Blockchain.prototype.getLastBlock = function()
{
    return this.chain[this.chain.length - 1];
}

Blockchain.prototype.createNewTransaction = function (amount, sender, recipient)
{
    const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient,
        transactionID: uuid().split('-').join('')
    }
    return newTransaction  
}

Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj)
{
    this.newTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
};

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce)
{
 const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
 const hash = sha256(dataAsString);
 return hash;
}

Blockchain.prototype.proofOfWork = function (previousBlockHash, currentBlockData)
{
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    while (hash.substring(0,4) !== '0000')
    {
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        //console.log(hash);
    }
    return nonce;

}

Blockchain.prototype.chainIsValid = function(blockchain)
{
    let validChain = true;
    
    const genesisBlock = blockchain[0];
    const genNonce = genesisBlock['nonce'] === 100;
    const genPrevHash = genesisBlock['previousBlockHash'] === "0";
    const genHash = genesisBlock['hash'] === "0";
    const correctTransaction = genesisBlock['transactions'].length === 0;

    if(!genNonce || !genPrevHash || !genHash || !correctTransaction) validChain = false;

    for(var i = 1; i < blockchain.length; i++)
    {
        const currentBlock = blockchain[i];
        const prevBlock = blockchain[i-1];
        const blockHash = this.hashBlock(prevBlock['hash'], 
                                        {transactions: currentBlock['transactions'],
                                        index: currentBlock['index']},
                                        currentBlock['nonce']);
        if(blockHash.substring(0,4) !== '0000')
            validChain = false;
        if(currentBlock['previousBlockHash'] !== prevBlock['hash'])
            validChain = false;

        console.log('previousBlockHash => ', prevBlock['hash']);
        console.log('currentBlockHash => ', currentBlock['hash']);
    }
    
    return validChain;
}

Blockchain.prototype.getBlock = function(blockHash)
{
    let correctBlock = null;
    this.chain.forEach(block =>
        {            
            if(block.hash === blockHash)
            {
                correctBlock = block;
            }
        });
        return correctBlock;
};

Blockchain.prototype.getTransaction = function(transactionID)
{
    let correctTransaction = null;
    let correctBlock = null
    this.chain.forEach(block =>
        {
            block.transactions.forEach(transaction => {
                if(transaction.transactionID === transactionID)
                {
                    correctTransaction = transaction;
                    correctBlock = block
                }
            });
        });
        return {
            transaction: correctTransaction,
            block: correctBlock
        };
}

Blockchain.prototype.getAddressData = function(address)
{
    const addressTransactions = [];
    this.chain.forEach(block =>
    {
        block.transactions.forEach(transaction =>
            {
                if(transaction.sender === address || transaction.recipient == address)
                    addressTransactions.push(transaction);
            });
    });

    let balance = 0;
    addressTransactions.forEach(transaction=>
    {
        if(transaction.recipient === address) balance += transaction.amount;
        else if(transaction.sender === address) balance -= transaction.amount;
    });
    return{
        addressTransactions: addressTransactions,
        addressBalance: balance
    };
};
