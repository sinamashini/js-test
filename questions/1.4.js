// honstly I don't get it right! you mean the Object constrator super() in class I write a function but not sure about it
// getter and setter are the manner of this test I wish!

const objectCreator = () => {
    return {
      get: (target, property) => {
        return "404";
      }
    };
  }
  
const main = () => {
    const object = objectCreator();
    console.log(object.name);
};

export default main;
