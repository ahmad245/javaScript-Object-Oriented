class AgePrint{
    print(){
        console.log(this);
        
    }
}
class objEn extends AgePrint{
    constructor(){
        super()
    }
    greet(){ // as prototype :better for performance
        console.log(this);
        
    }
    greet2=()=> { // ass filed not as prototype 
        console.log(this);
        
    }
}



function ObjP(){
    this.name='ahmad';
    this.job='devloper';
    this.greet=function(){
        console.log(this);
        
    }
}

ObjP.prototype.print=function(){
    console.log(this);
    
}

//console.log("prototype", ObjP.prototype) //  Object { print: print(), … }
//console.log("__proto__",ObjP.__proto__) // function


// class vs function constructor
let o=new ObjP();
console.log(o); //contain greet  function but  is not contain print function but as prototype for performance  : Object { name: "ahmad", job: "devloper", greet: greet() }

let ob=new objEn();
console.log(ob); // is not contain greet function but as prototype but contain greet2


//console.log(o.__proto__);//  Object { print: print(), … }


//__proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
// prototype is the object that is used to build __proto__ when you create an object with new


// ObjP.prototype.print=function(){ console.log(this);}  the same extends 



