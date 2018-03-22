var promise = () => new Promise( (resolve, reject) => {
  var fn = (cb) => setTimeout( () => cb("\n\tPrimeiro!\n"), 1000 );
  fn( data => resolve(data) );
});

async function getData() {
    var result = await promise();
    console.log(result);
}


getData();
console.log("\n\tSegundo!");
