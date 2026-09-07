const display = document.querySelector(".counter-display");
const increaseBtn = document.querySelector('.btn-increase');
const decreaseBtn = document.querySelector('.btn-decrease');
const resetBtn = document.querySelector('.btn-reset');
const double = document.querySelector('.btn-double');



let count=0;

increaseBtn.addEventListener('click',()=>{count+=1;
 updateDisplayColor()
});
decreaseBtn.addEventListener('click',()=>{count-=1;
    updateDisplayColor()
});
resetBtn.addEventListener('click',()=>{count=0;
 updateDisplayColor();
});

double.addEventListener('click',()=>{
   count= count*2
    updateDisplayColor();
})

function updateDisplayColor(){

    
/*
if (count > 0) {
    display.classList.add('positive');
} else if (count < 0) {
    display.classList.add('negative');
*/


    display.textContent = count;
    display.classList.remove('positive', 'negative'); 
    
    if (count > 0) {
        display.classList.add('positive');
    } else if (count < 0) {
        display.classList.add('negative');
    }
};
    
