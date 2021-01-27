let user = {
  name: "Sarah",
  
  major: "Computer Science", 
  
  'Grade Year' : '2022',
  
  greeting: function() { console.log('Hello!'); },
  
  'Favorite Teacher':{
    name: 'Thomas Powell',
    course: 'CSE 110'
  },
  
  courseLoad:['CSE 110', 'CSE 134', 'VIS 41']
};

let key1 = "name";

console.log( user[key1]);

let key2 = "major";

console.log( user[key2] ); 
let key3 = "Grade Year";

console.log( user[key3]); 

let key4= "greeting";

console.log( user[key4]); 


let key = "courseLoad";

console.log( user[key][0] ); 
