const main = () => {
    const list = [4, [[5], [6, [7], 8], 9, 10]];
    // calculator is a good tool I love it so flat map is here in js should I use it ! why not! it's up to me or u ?
    const flatList = list.flatMap(item => Array.isArray(item) ? item.flatMap(innerItem => innerItem) : item);
    console.log(flatList);
    return flatList
}

export default main;
