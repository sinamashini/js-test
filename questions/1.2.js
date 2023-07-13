
const promisesOrder = () => {
    console.log('Lets Begin');

   const promiseToShow = new Promise((resolve, reject) => {
        resolve("time to be resolved!")
   })
    
    // Comments make code dirty based on the clean code which is fine for readablity the purpose of the book I mean!,
    // but I need to show off it's an interview so:
    // I don't use "async & await" which are called sugar syntaxex here.
    // I personally found them sweet enough besides, "then, catch, finnaly" are a bit dirty most of the time but somtimes they are cleaner and sweeter. javascript is a gift and course I bett u knew it:)
    
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
