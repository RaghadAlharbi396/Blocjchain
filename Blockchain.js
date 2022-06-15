import Block from "./Block";

class Blockchain {
    chain;
    constructor(){
        this.chain = [];
    }
init(){
    if(this.chain.length != 0){
        return;
    }
this.chain =new  Block(0 , Date.now , "new block" , 0 ,"");
}
}
export default Blockchain;
