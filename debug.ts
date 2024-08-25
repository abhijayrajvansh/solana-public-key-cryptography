const sample_solana_wallet = "HLh5tKmpLEH3Lai24zekyDAvWzqbpcGkYVGJUAcghtTe";

// base58 to uint8array using native TextEncoder()
// this has only 0 - 127 ascii values
const solWalletUint8Array = new Uint8Array([
  72, 76, 104, 53, 116, 75, 109, 112, 76, 69, 72, 51, 76, 97, 105, 50, 52, 122,
  101, 107, 121, 68, 65, 118, 87, 122, 113, 98, 112, 99, 71, 107, 89, 86, 71,
  74, 85, 65, 99, 103, 104, 116, 84, 101,
]);

// base58 string to uint8array using bs58 decoder
const solWalletDecoded = new Uint8Array([
  242, 198, 89, 125, 84, 239, 174, 246, 60, 214, 249, 101, 76, 212, 93, 25, 5,
  251, 98, 117, 127, 177, 105, 183, 150, 39, 217, 236, 45, 107, 175, 133,
]);
