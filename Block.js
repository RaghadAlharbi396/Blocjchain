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
}
export default Block;