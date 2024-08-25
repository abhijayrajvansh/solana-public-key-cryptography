# Solana Public Key Cryptography

Author: [Abhijay Rajvansh](https://abhijayrajvansh.com)

101 basic demonstration of how private-public key-pairs are generated, transactions are signed & verified using @solana/web3.js

### Base58 format

```
{ 
  publicKeyEncoded: '4YkNM9ZVTtd4AjVAiuHuKLaaRAdjfHe7jXrFoW9XYvs6' 
}
{
  privateKeyEncoded: '3xewzE3Y9454fHuSEdhcnrjwPRcvuLPSZkHPu3M3w3fMzhWtXXc1jmhrvt8Vk26yrucLMjALWSt2L5G3a5WUrLhJ'
}
{ 
  transactionEncoded: 'N8HrXqx6shTzHhjiN6uyfFKuHH' 
}
{
  signatureEncoded: '67joAAKXjRvimfniTtaUEZjbwBrrWg7M2dqNJre3kALqqnpjK7WujdWEiZGd45ATQQTYXYyTXJAT3ncz1Brn8NvA'
}

> verifying signature...

transaction: accepted!

```

### Uint8Array format

```
private key: Uint8Array(64) [
  228,  86, 137,  50,  52, 246,  71, 170,  48, 174, 220,  25,
   84,  47,  11, 123,  48, 237,   8, 163,  87,  34, 105,  67,
   15,   4,  56,  71,  12, 122,   8,  58, 185,   6,   1, 247,
  145, 144,   4, 169, 195, 208,  90,  93, 136,  65, 169,  45,
   24, 205,  46,  65,   2, 223, 131,  64, 123, 205,  29, 156,
   91,  77, 241,  90
]
publicKey: Uint8Array(32) [
  185,   6,  1, 247, 145, 144,   4, 169,
  195, 208, 90,  93, 136,  65, 169,  45,
   24, 205, 46,  65,   2, 223, 131,  64,
  123, 205, 29, 156,  91,  77, 241,  90
]
transaction: Uint8Array(19) [
  115, 101, 110, 100,  32,  51,
   32, 115, 111, 108,  32,  45,
   62,  32, 116, 114, 117, 109,
  112
]
signature: Uint8Array(64) [
   41, 235,  42,  91, 209,  46,  33,  24,  57, 115,  34,
  241, 216, 239, 152, 223, 237, 214, 224, 117, 222,  45,
  204, 122, 218, 241, 113,  72, 175, 124,  31, 132,  35,
   84, 151, 228, 193,  41, 245,  89,  81, 253,  71, 158,
  124,  47, 113, 230, 110, 112, 222, 147, 108, 114, 195,
  210, 127, 161, 188, 167,  74, 162,  94,   2
]

> verifying signature...

Transaction: accepted!
```