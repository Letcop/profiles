

const strelkaAbSv = document.getElementById('chevronAbSv');
const abSvBl = document.getElementById('aboutServiceBlock');
const abSv = document.getElementById('aboutServiceBlocks');
console.log(strelkaAbSv)

let ab_Sv=abSv.clientHeight;
abSvBl.onclick = function() {
   if(ab_Sv==0){
       abSvBl.style.color = '#6F6BFF';
       
       let g = setInterval(function(){
           abSv.style.height = ab_Sv+ 'px';
           ab_Sv++;
           if(ab_Sv==56) { clearInterval(g); strelkaAbSv.setAttribute('class', 'fas fa-chevron-up');}
       },1)
   } 
    
   else { 
    let g = setInterval(function(){
           abSv.style.height = ab_Sv+ 'px';
           ab_Sv--;
           if(ab_Sv==-1) { clearInterval(g); ab_Sv=0; strelkaAbSv.setAttribute('class', 'fas fa-chevron-down'); abSvBl.style.color = '#fff';}
       },1)
    }
}


const strelkaFUr = document.getElementById('chevronForUsers');
const fUrBl = document.getElementById('forUsersBlock');
const fUr = document.getElementById('forUsersBlocks');

let f_Ur=fUr.clientHeight;
fUrBl.onclick = function() {
   if(f_Ur==0){
       fUrBl.style.color = '#6F6BFF';
       
       let g = setInterval(function(){
           fUr.style.height = f_Ur+ 'px';
           f_Ur++;
           if(f_Ur==122) { clearInterval(g); strelkaFUr.setAttribute('class', 'fas fa-chevron-up');}
       },1)
   } 
    
   else { 
    let g = setInterval(function(){
           fUr.style.height = f_Ur+ 'px';
           f_Ur--;
           if(f_Ur==-1) { clearInterval(g); f_Ur=0; strelkaFUr.setAttribute('class', 'fas fa-chevron-down'); fUrBl.style.color = '#fff';}
       },1)
    }
}


const strelkaHp = document.getElementById('chevronHp');
const hpBl = document.getElementById('hpBlock');
const hp = document.getElementById('hpBlocks');

let h_p=hp.clientHeight;
hpBl.onclick = function() {
   if(h_p==0){
       hpBl.style.color = '#6F6BFF';
       
       let g = setInterval(function(){
           hp.style.height = h_p+ 'px';
           h_p++;
           if(h_p==89) { clearInterval(g); strelkaHp.setAttribute('class', 'fas fa-chevron-up');}
       },1)
   } 
    
   else { 
    let g = setInterval(function(){
           hp.style.height = h_p+ 'px';
           h_p--;
           if(h_p==-1) { clearInterval(g); h_p=0; strelkaHp.setAttribute('class', 'fas fa-chevron-down'); hpBl.style.color = '#fff';}
       },1)
    }
}


const strelkaSc = document.getElementById('chevronSc');
const scBl = document.getElementById('scBlock');
const sc = document.getElementById('scBlocks');

let s_c=sc.clientHeight;
scBl.onclick = function() {
   if(s_c==0){
       scBl.style.color = '#6F6BFF';
       
       let g = setInterval(function(){
           sc.style.height = s_c+ 'px';
           s_c++;
           if(s_c==33) { clearInterval(g); strelkaSc.setAttribute('class', 'fas fa-chevron-up');}
       },1)
   } 
    
   else { 
    let g = setInterval(function(){
           sc.style.height = s_c+ 'px';
           s_c--;
           if(s_c==-1) { clearInterval(g); s_c=0; strelkaSc.setAttribute('class', 'fas fa-chevron-down'); scBl.style.color = '#fff';}
       },1)
    }
}