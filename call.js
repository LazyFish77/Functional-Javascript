// Write a function duckCount that returns the number of arguments passed to it which have a property 'quack' defined directly on them. Do not match v
// alues inherited from prototypes.
function duckCount(...hasQuackValue){
    console.log(hasQuackValue)
    let args = [...arguments];
    let duckArray = args.filter(arg => arg.hasOwnProperty("quack"));
    return duckArray();
} 

let duck = {
    quack: () => console.log("quack")
}

let notDuck = {
    bark:() => console.log("bark")
}

duckCount(duck, notDuck);
