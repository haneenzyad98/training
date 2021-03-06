let firstImg=document.getElementById('firstImg');
let secandImg=document.getElementById('secandImg');
let theardImg=document.getElementById('theardImg');

let firstImgindex;
let secandImgindex;
let theardImgindex;

let oldImgindex=[];
let maxattempt=25;
let numattempt=0;
let voteofimg = [];

//----------------------------------------------------------------------------
function TheImg(name,sours){
    this.name=name;
    this.sours=sours;
    TheImg.allimg.push(this);
    //console.log(this);
    this.vote=0;
    this.count=0;
}
TheImg.allimg=[];
//-----------------------------------------------------------------------------
new TheImg('im1','img/im1.jpg');
new TheImg('im2','img/im2.jpg');
new TheImg('im3','img/im3.jpg');
new TheImg('im4','img/im4.jpg');
new TheImg('im5','img/im5.jpg');
new TheImg('im6','img/im6.png');
new TheImg('im7','img/im7.jpg');
new TheImg('im8','img/im8.png');
new TheImg('bag','img/bag.jpg');
new TheImg('banana','img/banana.jpg');
new TheImg('boots','img/boots.jpg');
new TheImg('bubblegum','img/bubblegum.jpg');
new TheImg('chair','img/chair.jpg');
new TheImg('dog-duck','img/dog-duck.jpg');
new TheImg('scissors','img/scissors.jpg');
new TheImg('pen','img/pen.jpg');
//------------------------------------------------------------------------------
function randomindex(){
    return Math.floor(Math.random()*TheImg.allimg.length);
}
//------------------------------------------------------------------------------
function ranerThreeimg(){
   
    do{
    firstImgindex=randomindex();
    secandImgindex=randomindex();
    theardImgindex=randomindex();
   
}while ((firstImgindex===secandImgindex||firstImgindex===theardImgindex||secandImgindex===theardImgindex)||
oldImgindex.includes(firstImgindex)||oldImgindex.includes(secandImgindex)||oldImgindex.includes(theardImgindex)) ;

TheImg.allimg
firstImg.src=TheImg.allimg[firstImgindex].sours;
TheImg.allimg[firstImgindex].count++;

secandImg.src=TheImg.allimg[secandImgindex].sours;
TheImg.allimg[secandImgindex].count++;

theardImg.src=TheImg.allimg[theardImgindex].sours;
TheImg.allimg[theardImgindex].count++;


oldImgindex=[firstImgindex,secandImgindex,theardImgindex]
console.log(oldImgindex);

}ranerThreeimg();

//----------------------------------------------
firstImg.addEventListener('click',userclik);
secandImg.addEventListener('click',userclik);
theardImg.addEventListener('click',userclik);



function userclik(event){
    numattempt++;
 if(numattempt < maxattempt){
     if(event.target.id='firstImg'){
         TheImg.allimg[firstImgindex].vote++
     }else if(event.target.id='secandImg'){
        TheImg.allimg[secandImgindex].vote++
     }else{
        TheImg.allimg[theardImgindex].vote++
     }ranerThreeimg();
 
 
    }else{
let result=document.getElementById('result');
let getresult;

for (let i = 0; i < TheImg.allimg.length; i++) {
    getresult=document.createElement('li')
    result.appendChild(getresult)
    getresult.textContent= TheImg.allimg[i].name+'    '+'has'+'   '+TheImg.allimg[i].vote +'   '+'and was seen'+TheImg.allimg[i].count;
    
}

firstImg.removeEventListener('click',userclik);
secandImg.removeEventListener('click',userclik);
theardImg.removeEventListener('click',userclik);


    }
 }
