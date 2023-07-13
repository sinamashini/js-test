
const promisesOrder = () => {
    console.log('Lets Begin');

   const promiseToShow = new Promise((resolve, reject) => {
        resolve("time to be resolved!")
   })
    
    // Comments make code dirty based on the clean code which is fine for readablity
    // but I need to show off it's a interview so:
    // I don't use async & await sugar syntaxex here,
    // which I found them sweet enough besides, then catch finnaly is a bit dirty most of the time but somtimes they are cleaner and sweeter javascript is gift and course u I beth u knew it:)
    
    promiseToShow.then((result) => {
        console.log(result);
        console.log('resolved callback');
      }).catch((error) => {
        console.log(error);
        console.log('rejected callback');
      }).finally(() => {
        console.log('finally callback');
      });
};


const main = () => {
    promisesOrder()
};

export default main;
