const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    "chain":[
        {
            "index":1,
            "timestamp":1565789349562,
            "transactions":[],
            "nonce":100,
            "hash":"0",
            "previousBlockHash":"0"
        },
        {
            "index":2,
            "timestamp":1565789401546,
            "transactions":[],
            "nonce":18140,
            "hash":"0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash":"0"
        },
        {"index":3,"timestamp":1565789533724,"transactions":[{"amount":12.5,"sender":"00","recipient":"7eeb9be0be9711e9b44d33bd0c8ca499","transactionID":"9e451f20be9711e9b44d33bd0c8ca499"},{"amount":4234,"sender":"fu80w9efi-0wfimow","recipient":"uf0wjfapimfweifkwepofwa","transactionID":"c3d36120be9711e9b44d33bd0c8ca499"},{"amount":214,"sender":"fu80w9efi-fdafda","recipient":"afdsafa3ra","transactionID":"da671a80be9711e9b44d33bd0c8ca499"},{"amount":1421312,"sender":"fu80w9efi-fdafda","recipient":"afdsafa3ra","transactionID":"e112de00be9711e9b44d33bd0c8ca499"}],"nonce":89431,"hash":"00006020b50da678054bdd87d73691cd457b22bb5d0a314a4a7a78caae473a10","previousBlockHash":"0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"},{"index":4,"timestamp":1565789589632,"transactions":[{"amount":12.5,"sender":"00","recipient":"7eeb9be0be9711e9b44d33bd0c8ca499","transactionID":"ed03a910be9711e9b44d33bd0c8ca499"},{"amount":324345,"sender":"fadfdafas f-fdafda","recipient":"vxcbvxbvfsx","transactionID":"fa8e4e00be9711e9b44d33bd0c8ca499"},{"amount":12321,"sender":"dfadfsaf f-fdafda","recipient":"gffdgn bv","transactionID":"ffcd8930be9711e9b44d33bd0c8ca499"},{"amount":175,"sender":"gdyhxdrx6rt f-fdafda","recipient":"gfsgsdfgh bv","transactionID":"068078a0be9811e9b44d33bd0c8ca499"}],"nonce":20731,"hash":"0000169356412a9d581a1bfa678afe21d4cfb4e5318a884675b4ea67ea4c44af","previousBlockHash":"00006020b50da678054bdd87d73691cd457b22bb5d0a314a4a7a78caae473a10"},{"index":5,"timestamp":1565789596153,"transactions":[{"amount":12.5,"sender":"00","recipient":"7eeb9be0be9711e9b44d33bd0c8ca499","transactionID":"0e568b50be9811e9b44d33bd0c8ca499"}],"nonce":8359,"hash":"0000e16852faf516d148d419023dacc66b8022c53e051938d0e5689a61bc4cde","previousBlockHash":"0000169356412a9d581a1bfa678afe21d4cfb4e5318a884675b4ea67ea4c44af"},{"index":6,"timestamp":1565789597860,"transactions":[{"amount":12.5,"sender":"00","recipient":"7eeb9be0be9711e9b44d33bd0c8ca499","transactionID":"1239b8f0be9811e9b44d33bd0c8ca499"}],"nonce":77855,"hash":"00002a9a49a9b43695b6d0f8bd4f3991234846ad49875a08f5fa29414954009d","previousBlockHash":"0000e16852faf516d148d419023dacc66b8022c53e051938d0e5689a61bc4cde"}],"newTransactions":[{"amount":12.5,"sender":"00","recipient":"7eeb9be0be9711e9b44d33bd0c8ca499","transactionID":"133e7ec0be9811e9b44d33bd0c8ca499"}],"currentNodeUrl":"http://localhost:3001","networkNodes":[]};

console.log('Valid: ', bitcoin.chainIsValid(bc1.chain));
//const nonce = 100;

//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 20834));
//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
//console.log(bitcoin);
//bitcoin.createNewBlock(2389, 'OIUWENUDSA','789DSA80ZX')
//bitcoin.createNewTransaction(100, 'alexi31289f8908dfs', 'jen89123789');

//bitcoin.createNewBlock(548764,'AKMC875E6S1RS9','WPLS214R7T6SJ3G2');



//console.log(bitcoin);
//console.log(bitcoin.chain[1]);