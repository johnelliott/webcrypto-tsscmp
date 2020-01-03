// Implements Brad Hill's Double HMAC pattern from
// https://www.nccgroup.trust/us/about-us/newsroom-and-events/blog/2011/february/double-hmac-verification/.
// The approach is similar to the node's native implementation of timing safe buffer comparison that will be available on v6+.
// https://github.com/nodejs/node/issues/3043
// https://github.com/nodejs/node/pull/3073
// Adapted for the Web Crypto API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API
// for use with web workers

function bufferEqual(a:Int8Array, b:Int8Array) {
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (var i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

async function timeSafeCompare (a:string, b:string) {
  const enc = new TextEncoder();
  const sa = enc.encode(a);
  const sb = enc.encode(a);

  const key = await crypto.subtle.generateKey({
    name: "HMAC",
    hash:'SHA-256'
  }, false, ['sign']);

  const ah = new Int8Array(await crypto.subtle.sign('HMAC', key, sa));
  const bh = new Int8Array(await crypto.subtle.sign('HMAC', key, sb));

  return bufferEqual(ah, bh) && a === b;
}

module.exports = timeSafeCompare
