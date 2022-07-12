// // let data={
// //     name:'bijay',
// //     class:5,
// //     address:'ktm'
// // }
// // function getName(){
// //     return data.name;
// // }
// // console.log(getName(data))


// let a=[1,2,3];
// function doubled(arr){
//     let doublearr=[];
//     for(i=0;i<arr.length;i++){
//         doublearr.push(arr[i]*2);
//     }
//     return doublearr;
// }
// console.log(('double',doubled(a)));


// let a=[1,2,3];
// const doubled =(arr)=>{
//      let doublearr=[];
//      for(i=0;i<arr.length;i++){
//          doublearr.push(arr[i]*2);
//      }
//      return doublearr;
//  }
//  console.log('double',doubled(a));

// let a=[1,2,3];
// a.map((val,index)=>{
//     console.log(val,index);
// })

const hobbies = ["Freelancer", "Software Developer", "Cricket Lover"];

let count = 0;
let index = 0;
let currentHobby = "";
let letter = "";

const typing = () => {
  if (count === hobbies.length) {
    count = 0;
  }

  currentHobby = hobbies[count];
  letter = currentHobby.slice(0, ++index);

  document.querySelector(".hero__text__dynamic").textContent = letter;

  if (letter.length === currentHobby.length) {
    count++;
    index = 0;
  }

  setTimeout(typing, 150);
};

typing();

//button click
//name click
document.querySelector(".header__name").addEventListener("click", () => {
  document.querySelector(".hero__container").scrollIntoView();
});

//about click
document.querySelector(".header__about").addEventListener("click", () => {
  document.querySelector(".about__container").scrollIntoView();
});

//contact click
document.querySelector(".header__contact").addEventListener("click", () => {
  document.querySelector(".contact__container").scrollIntoView();
});

//download click
document.querySelector(".header__download").addEventListener("click", () => {
  window.open("./RajadShakyaCV.pdf", "_blank");
});
