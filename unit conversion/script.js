var centi = document.getElementById('centimeter');
var meter = document.getElementById('meter');
var  gram = document.getElementById("gram");
var kg = document.getElementById("kg");

meter.addEventListener('input',function(){
    let m= this.value;
    let c = m*100;
    centi.value =c;
});

centi.addEventListener('input',function(){
    let c = this.value;
    // centimeter vaue = 100
    let m = c/100;
   meter.value=m;
});

gram.addEventListener('input',function(){
    let g = this.value;
    let k =  g/1000;
    kg.value = k;
})
kg.addEventListener('input',function(){
    let k=this.value;
    let g= k*1000;
     gram.value = g; 
})


