
WebAssembly.instantiateStreaming(fetch('add.wasm')).then(obj => {
    
  const result = obj.instance.exports.add(303,606);    
  alert(result);

});
