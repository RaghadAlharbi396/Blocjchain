import sha256 from 'crypto-js/sha256.js';
//const hash = require('crypto-js/sha256.js'); 

class Block{
 nonce;
 hash;
constructor(haight,timestamp = "", data = []  ,prevHash ){
this.haight = haight;
this.timestamp = timestamp;
this.data = data;
this.prevHash = prevHash;
[this.hash, this.nonce] =  this.maining();
}
calculateHash(){
  return sha256(
    this.haight + this.timestamp + this.data + this.prevHash
  ).toString();
  
}
maining(){
   var difficulty = 4;
   var timetry = 0;
   var j = 10000000;

  
    for(var i=0 ; i < j; i++){
        let magichash =sha256(
          this.haight + this.timestamp + this.data + this.prevHash + timetry
        ).toString();
    console.log(magichash);
    if(magichash.substring(0,difficulty) == "0000"){
        console.log("magichash:"+ magichash);
       console.log("time trying:"+timetry);
    
        return [magichash,timetry];
    }
    else timetry++;
    }
  
}

}
export default Block;