let pp={
    name:'ahmad',
    age:33
}

pp.getAge=function() { // this function added but not as prototype
    console.log(this.name);
    
}


// add prototype to object literals not to function constructor for( function constructor just add function name . prototype.fn=function(){})
Object.setPrototypeOf(pp,{
     ...Object.getPrototypeOf(pp),
     getAge2:function() {
         console.log(this.name);
         
     }
})
console.log(pp);
