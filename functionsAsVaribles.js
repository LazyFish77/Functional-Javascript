let repeat = (operation , num) => {
    for(let i = 0; i < num; i++ ) {
        operation(num)
    }
}

let exampleFunction = () => true;

repeat(exampleFunction, 5);
module.exports = repeat;