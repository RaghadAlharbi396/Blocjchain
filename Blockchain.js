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
let genisst = new  Block(0 , Date.now , "first" ,"");
console.log(genisst);
this.chain.push(genisst);
}

  getLastBlock(){
    return this.chain[this.chain.length -1];
  }
  addBlock(data){
    //lastBlock = this.chain[this.chain.length -1];
    var newPrevHash = this.getLastBlock().hash;
    var oldHaight = this.getLastBlock().haight;
    var newBlock = new Block(oldHaight+1 ,Date.now,data,newPrevHash);
    this.chain.push(newBlock);
    console.log(newBlock);
  }
vaildateBlockchsin(){
    
    for(let i= 1; i<this.chain.length ; i++){
        current = this.chain[i];
        prevBlock = this.chain[i-1];
        if(current.hash != current.calculateHash()){
            return false;
        }
        if(current.hash != prevBlock.PrevHash){
            return false;
        }
console.log("Valid blockcain");
    } return true;
}
}
export default Blockchain;
