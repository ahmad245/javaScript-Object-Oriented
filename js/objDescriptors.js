class Person{
    name='max'
}

let p=new Person();


// typeof instanceof 
console.log(typeof p ); // object is not type Person 
console.log(p instanceof Person  ); // true 

//object description 
let obj={
    name:'ahmad',
    greet(){
        console.log(this.name);
        
    }
}
Object.getOwnPropertyDescriptors(obj);
//name: {…}
// configurable: true
// enumerable: true
// value: "ahmad"
// writable: true

// greet: {…}
// configurable: true
// enumerable: true
// value: function greet()
// writable: true

Object.defineProperty(obj,'name',
{
    configurable:false,
    value:'ahmad',
    enumerable:true,
    writable:false
})

