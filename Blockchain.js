import Block from "./Block.js";


class Blockchain {
   chain ;
    constructor(){
        this.chain = [];
        this.init();
    }
init(){
    if(this.chain.length != 0){
        return;
    }
let genisst = new  Block(0 , Date.now , "Genesis Block" ,"");
this.chain.push(genisst);
console.log(this.chain);
}

  getLastBlock(){
    return this.chain[this.chain.length -1];
  }
  addBlock(data){
    let lastBlock = this.chain[this.chain.length -1];
    var newPrevHash = lastBlock.hash;
    var oldHaight = lastBlock.haight;
    var newBlock = new Block(oldHaight+1 ,Date.now,data,newPrevHash);
    this.chain.push(newBlock);
    console.log(newBlock);
  }
  vaildateBlockchsin() {
    for (let i = 1; i < this.chain.length; i++) {
      let current = this.chain[i];
      let prev = this.chain[i - 1];
      if (current.hash != current.calculateHash()) {
        console.log("Invalid hash");
        return false;
      }
      if (current.prevHash != prev.hash) {
        console.log("Invalid previous hash");
        return false;
      }
    }
    console.log("Valid BlockChain");
    return true;
  }
}
export default Blockchain;
