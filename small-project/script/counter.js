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
});

document.addEventListener('keydown',(event)=>{
    
if (event.key >= '0' && event.key <= '9') {
            count = Number(event.key);
            updateDisplayColor();
        };
if (event.key==='ArrowUp'){
    event.preventDefault();
    count+=1;
    updateDisplayColor();

}else if (event.key==='ArrowDown') {
    event.preventDefault();
    count-=1;
    updateDisplayColor();
};


});

/*

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        count += 1;
        updateDisplayColor();
    } else if (event.key === 'ArrowDown') {
        count -= 1;
        updateDisplayColor();
    }
});


*/
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
    
