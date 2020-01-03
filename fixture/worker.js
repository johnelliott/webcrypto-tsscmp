const compare = require('../src/tsscmp.ts');
self.onmessage = async function({ data }) {
  const same = await compare(data[0], data[1]);
  self.postMessage(same);
}
