let importObject = {
  imports: {
    log: (arg) => {
      alert(`log from wasm ${arg}`);
    },
  },
};
const wasmModule = new Uint8Array([
  0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x0a, 0x02, 0x60, 0x01,
  0x7f, 0x00, 0x60, 0x02, 0x7f, 0x7f, 0x00, 0x02, 0x0f, 0x01, 0x07, 0x69, 0x6d,
  0x70, 0x6f, 0x72, 0x74, 0x73, 0x03, 0x6c, 0x6f, 0x67, 0x00, 0x00, 0x03, 0x02,
  0x01, 0x01, 0x07, 0x06, 0x01, 0x02, 0x64, 0x6f, 0x00, 0x01, 0x0a, 0x0b, 0x01,
  0x09, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x10, 0x00, 0x0b,
]);
WebAssembly.instantiate(wasmModule, importObject).then((obj) => {
  obj.instance.exports.do(100, 200);
});
