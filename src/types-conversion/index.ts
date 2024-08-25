export const stringToUint8Array = (s: string) => {
  return new TextEncoder().encode(s);
}

export const uint8ArrayToString = (a: Uint8Array) => {
  return new TextDecoder().decode(a);
}