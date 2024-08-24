import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl"; // nacl?! fuckin salt or wht xD
import { green, red, reset } from "./ansi-colorcodes";

// generating a wallet address / private-public-key pair
const keypair = Keypair.generate();

const privateKey = keypair.secretKey;
const publicKey = keypair.publicKey.toBytes();

console.log("private key:", privateKey);
console.log("publicKey:", publicKey);

// writing transaction/txn
let transaction = new TextEncoder().encode("send 3 sol -> trump");
console.log("encoded transaction:", transaction);

// signing the txn
const signature = nacl.sign.detached(transaction, privateKey);
console.log("encoded signature:", signature);

// lets say somebody tried to change the txn after signing...
// console.log('\n> changing transaction...'); 
// transaction = new TextEncoder().encode("send 3 sol -> biden");

// verifying signature
const isValid = nacl.sign.detached.verify(transaction, signature, publicKey);
console.log("\n> verifying signature...");

if (isValid) {
  console.log(`\nTransaction: ${green}accepted!${reset}`);
} else {
  console.log(`\nTransaction: ${red}rejected!${reset}`);
}
