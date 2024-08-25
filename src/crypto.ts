import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';
import nacl from "tweetnacl"; // nacl?! fuckin salt or wht xD
import { green, red, reset } from "../ansi-colorcodes";

// generating a private-public-key pair
const keypair = Keypair.generate();

const privateKey = keypair.secretKey;
const publicKey = keypair.publicKey.toBytes();

const privateKeyEncoded = bs58.encode(privateKey)
const publicKeyEncoded = bs58.encode(publicKey);

console.log({publicKeyEncoded});
console.log({privateKeyEncoded});

// writing transaction/txn
let transaction = new TextEncoder().encode("send 3 sol -> trump");
const transactionEncoded = bs58.encode(transaction);
console.log({transactionEncoded});

// signing the txn
const signature = nacl.sign.detached(transaction, privateKey);
const signatureEncoded = bs58.encode(signature);
console.log({signatureEncoded})

// lets say somebody tried to change txn
// console.log('\n> changing transaction...');
// transaction = new TextEncoder().encode("send 3 sol -> biden");

// verifying signature
const isValid = nacl.sign.detached.verify(transaction, signature, publicKey);
console.log("\n> verifying signature...");

if (isValid) {
  console.log(`\ntransaction: ${green}accepted!${reset}`);
} else {
  console.log(`\ntransaction: ${red}rejected!${reset}`);
}
