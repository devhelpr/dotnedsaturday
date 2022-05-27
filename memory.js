
let importObject = {
  imports: {
    mem: new WebAssembly.Memory({initial: 1})
  },
};

WebAssembly.instantiateStreaming(fetch('memory.wasm'), importObject).then(obj => {
    
  obj.instance.exports.do(12345);
    
  const values = new Int32Array(importObject.imports.mem.buffer,0,1);
  
  alert(values[0]);

});
