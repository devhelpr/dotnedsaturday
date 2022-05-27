
let importObject = {
  imports: {
    mem: new WebAssembly.Memory({initial: 1})
  },
};

WebAssembly.instantiateStreaming(fetch('add.wasm'), importObject).then(obj => {
    
  const result = obj.instance.exports.add(303,606);    
  alert(result);

});
