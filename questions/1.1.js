
const showingArrayImrative = (array) => {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        newArray.push(array[index]);
    }
    return newArray;
};

const showingArrayDeclrative = (array) => array.map(item => item);

const main = () => {
    const array = [22, 24, 27, 45, 67, 1, 9];
    const resultByImrative = showingArrayImrative(array);
    const resultByDeclrative = showingArrayDeclrative(array);
};

export default main;

