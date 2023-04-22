var tasks = document.querySelector('#tasks');
var add = document.querySelector('#add');
var inputs = document.querySelector('#input');
add.addEventListener('click',(e) =>{
    // console.log(tasks,add,input);
    var paragraph = document.createElement('p');
    paragraph.innerText = inputs.value ;
    tasks.appendChild(paragraph);    
    console.log(paragraph.innerHTML);// just for the checking in console
    inputs.value="";s
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        tasks.removeChild(paragraph);    

    })
})