import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

const privateKey = keypair.secretKey;
const publicKey = keypair.publicKey;

function print (DT: any) {
  const varanme = Object.keys(DT)[0];
  console.log({varanme})
}

print(privateKey)