



var input = document.querySelector('input');
var btn = document.querySelector(".addtask > button");
        btn.addEventListener( 'click', addlist );
function addlist(){
        var notcomleted =document.querySelector('#notcompleted');
        var comleted =document.querySelector('#completed');
        var newli= document.createElement('li');

// الزرارين
var checkbtn=document.createElement('button');
var delbtn=document.createElement('button');

var ok=checkbtn.innerHTML='<i class="fa fa-check"></i>'  ;
var del=delbtn.innerHTML= '<i class="fa fa-trash"></i>' ;

if (input.value !==''){
        newli.innerHTML=input.value;
        input.value=" ";
        notcomleted.appendChild (newli);
        newli.appendChild (checkbtn);
        newli.appendChild(delbtn);

checkbtn.addEventListener('click',function(){
        var parent = this.parentNode;
        parent.remove();
        comleted.appendChild(parent);
        checkbtn.style.display = " none";

});

delbtn.addEventListener('click',function(){
        var parent = this.parentNode;
        parent.remove();

});

}
// else{ 
//         submit =document.querySelector('#add')
//         submit.display=true;
// }

}










































// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('#red').onclick=function(){
//         document.querySelector('#hello').style.color='red';
//     }
// })

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('#green').onclick=function(){
//         document.querySelector('#hello').style.color='green';
//     }
// })

// document.addEventListener('DOMContentLoaded', function(){
//     document.querySelector('#blue').onclick=function(){
//         document.querySelector('#hello').style.color='blue';
//     }
// })


// // TO DO LIST .............

// document.addEventListener('DOMContentLoaded', function(){
//         document.querySelector('#submit').disabled = true ;
// document.querySelector('#task').onkeyup=function(){
//         if (document.querySelector('#task').value.length>6){
//         document.querySelector('#submit').disabled = false ;
//         }else{
//         document.querySelector('#submit').disabled = true ;
//         }

// document.querySelector('form').onsubmit=function(){
//         var taask= document.querySelector('#task').value ;
//         var li= document.createElement('li');
//         li.innerHTML=taask;
//         document.querySelector('#tasks').appendChild(li);
//         document.querySelector('#task').value= " ";
//         document.querySelector('#submit').disabled = true ;

//         //   عشان ميعملش رفريش 
//         return false;
// }
// }
// })


// var text = document.querySelectorAll('#ddddd');
// console.log(text);

// var text = document.getElementById("ddddd").style.color="blue" ;
// for (var i=0 ; i<10 ; i++){
//         document.write(i);}

// var h1h1h1=document.getElementById('alaa').classList.add('khaled');
// console.log(h1h1h1);