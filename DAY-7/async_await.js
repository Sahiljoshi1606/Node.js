// using asyn

const PrintData = async () => {
  let data = "hello";
  return data;
};
PrintData().then((data) => console.log(data));

// using promise

function fetch() {
  return new Promise((resolve) => {
    resolve("hello world");
  });
}
PrintData().then(() => {
  console.log("hello world");
});

// await are use for function are execute after all existing are complete or execute

const getData = async () => {
  let data = await "hello Awdiz";
  console.log(data);
};
console.log("om");
getData();
console.log("Sahil");

//fetch

// using fetch we can get data from server

async function getData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json();
        console.log(json)
    }catch(err){
        console.log(err)

}
}
getData()

fetch("https://jsonplaceholder.typicode.com/todos/1p")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("network response is not ok");
    }
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.error("error is occur at the time of fetching ", error)
  );


async function GetData() {
    try{
const  [profile , posts , comment] = await Promise.all([
 fetch("https://jsonplaceholder.typicode.com/users/1") .then(res=>res.json()),
    fetch('https://jsonplaceholder.typicode.com/posts/?userId=1') .then(res=>res.json()),
fetch("https://jsonplaceholder.typicode.com/comments?postId=1").then(res=>res.json())
]);
//  console.log({profile,posts,comment})
console.log("Profile Data:", profile.name);
console.log("Posts Data:", posts.length);
console.log("Comments Data:", comment.length);
    }
   catch(err){
    console.log("error is occur at the time of fetching data", err)
}
}

GetData();

   
    
