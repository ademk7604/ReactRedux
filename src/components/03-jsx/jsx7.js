import React from 'react'

const Jsx7 = ({rate=3}) => {
/*1 yontem 
const arr = [];
for(let i=1; i<=5; i++){
if(i<=rate){
    arr.push("O")
}
else{
    arr.push("X")
}
} */
  return (

   /*  <div>{arr.join("")}</div> */
    <div>
   {
    
    [...new Array(5)].map((item, index)=> (index <rate ? "O" : "X"))
    /* elemanlari bos olan 100 elemani dondurur  normal string yazdirdigim icin key istemedi noramalde key de belirmek gerekir*/
   }
   </div>


  )
}

export default Jsx7