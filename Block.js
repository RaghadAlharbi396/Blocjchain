import sha256 from 'crypto-js/sha256';

class Block{

constructor(haight,timestamp = "", data = [] ,nonce ,prevHash ){
this.haight = haight;
this.timestamp = timestamp;
this.data = data;
this.nonce =nonce ;
this.hash = this.calculateHash();
this.prevHash = prevHash;
}
calculateHash(){
  return sha256(
    this.haight + this.timestamp + this.data + this.prevHash
  ).toString();
}
/*maining(){
    difficulty = 4;
    timetry = 0;
    j = 10-0000-000;
    for( i=0 ; i < j; i++){
        magichash = this.calculateHash();
    console.log(magichash);
    if(magichash.subString(0,difficulty ) == "0000"){
        console.log("magichash:"+ magichash);
       console.log("time trying:"+timetry);
        return;
    }
    timetry++;
    nonce++;
    }
  }*/
}
export default Block;