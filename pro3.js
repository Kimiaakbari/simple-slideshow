let review1=document.getElementById("review1")
let review2=document.getElementById("review2")
let review3=document.getElementById("review3")
let review4=document.getElementById("review4")
let chevronL=document.getElementById("chevronleft")
let chevronR=document.getElementById("chevronright")

console.log(chevronL)
console.log(review1)

let allReview=[review1,review2,review3,review4]
allReview[0].style.display="block"
allReview[1].style.display="none"
allReview[2].style.display="none"
allReview[3].style.display="none"


let curIndex=0
chevronR.addEventListener("click",function(){
    
for(let i =0;i<allReview.length;i++){
    allReview[i].style.display="none"
   }
   allReview[curIndex].style.display="block"
   
   
   curIndex++
   if(curIndex==allReview.length){
    chevronR.style.display="none"
    curIndex--
   }
    if(curIndex<allReview.length){
    chevronR.style.display="block"
   }
   
})
chevronL.addEventListener("click",function(){
 

     if(curIndex>0){
        for(let i=0;i<allReview.length;i++){
            allReview[i].style.display="none"
        }
        curIndex--
        allReview[curIndex].style.display="block"
    }
 })

