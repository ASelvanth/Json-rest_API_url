// // var a = {name:"Person1",age:5};
// // var b = {age:5,name:"Person1"};

// var json = [{
//     "name" : "Person1", "age"   : 5,
// },
// {
//     "age"   : 5,"name" : "Person1", 
    
// }];


// for (var i = 0; i < json.length; i++) {
//     for (var j = 0; j < json.length; j++) {
//         console.log(json[i]) // => [{'name': 'john', 'age': 22}, {'name': 'anne', 'age': 12}]

//         JSON.stringify() === JSON.stringify(b);
//     }
// }


// var
// aJSON = { "name" : "Person1", "age"   : 5,},
// bJSON = {"age"   : 5,"name" : "Person1"};
    
//  JSON.stringify(aJSON) === JSON.stringify(bJSON);

var
aJSON = { "name" : "Person1", "age"   : 5,},
bJSON = {"age"   : 5,"name" : "Person1"};

var info =true;

if(Object.keys(aJSON).length==Object.keys(bJSON).length){
    for(key in aJSON) { 
        if(aJSON[key] == bJSON[key]) {
            continue;
        }
        else {
            info=false;
            break;
        }
    }
}
else {
   info=false;
}
console.log("The given object are equal"+" "+ info);
