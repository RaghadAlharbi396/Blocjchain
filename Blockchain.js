import Block from "./Block.js";

class Blockchain {
   chain ;
    constructor(){
        this.chain = [];
    }
init(){
    if(this.chain.length != 0){
        return;
    }
this.chain =new  Block(0 , Date.now , "new block" , 0 ,"");
}

  getLastBlock(){
    return this.chain[this.Chain.length -1];
  }
  addBlock(data){
    PrevHash = this.getLastBlock.hash;
    oldHaight = this.getLastBlock.haight;
    this.chain = new Block(oldHaight+1 ,Date.now,data,0,PrevHash);
  }
vaildateBlockchsin(){
    for(let i= 0; i<this.chain.length ; i++){
        current = this.chain[i];
        next = this.chain[i+1];
        if(current.hash != current.calculateHash()){
            return false;
        }
        if(current.hash != next.PrevHash){
            return false;
        }

    } return true;
}
}
export default Blockchain;
