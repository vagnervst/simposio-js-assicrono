
var myPromise = new Promise((resolve, reject) => {
  var fetchData = (cb) => setTimeout( () => cb("Primeiro!"), 1000 );
  fetchData( myData => resolve(myData) );
});

var result = myPromise.then( myData => console.log(`${myData}`) );

console.log("Segundo!");
console.log("Terceiro!");
