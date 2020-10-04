//var
function tryVar(){
    var myVar = "value";
    if(true){
        //override the value
        var myVar = "anotherValue"
    }
    console.log(myVar);
}

//let
function tryLet(){
    let myVar = "value";
    if(true){
        //new variable with different lifespan
        let myVar = "anotherValue";
    }
    console.log(myVar); //value
}

//const
function tryConst(){
    const myConst = "value";
    //myConst = "newValue"; compilation error
    if(true){
        const myConst = "anotherValue"
    }
    console.log(myConst); //value
}

tryVar();
tryLet();
tryConst();