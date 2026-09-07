let count=0;

document.querySelector('#increaseBtn')
.addEventListener('click',()=>{count+=1;
 updateDisplayColor()
});


document.querySelector('.btn-decrease')
.addEventListener('click',()=>{count-=1;
    updateDisplayColor()
});



 document.querySelector('.btn-reset')
.addEventListener('click',()=>{count=0;
 updateDisplayColor();
});

function updateDisplayColor(){

document.querySelector(".counter-display").textContent=count;
/*
if (count > 0) {
    document.querySelector(".counter-display").classList.add('positive');
} else if (count < 0) {
    document.querySelector(".counter-display").classList.add('negative');
}*/

if (count > 0) {
    document.querySelector(".counter-display").classList.add('positive');
    document.querySelector(".counter-display").classList.remove('negative');
} else if (count < 0) {
    document.querySelector(".counter-display").classList.remove('positive');
    document.querySelector(".counter-display").classList.add('negative');
} else {
    // count === 0
    document.querySelector(".counter-display").classList.remove('positive');
    document.querySelector(".counter-display").classList.remove('negative');
}

};
    
