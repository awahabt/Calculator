let display = "";

let buttons = document.querySelectorAll('button');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            display = eval(display);
            document.querySelector('input').value = display;
        }
        else if(e.target.innerHTML == 'AC'){
            display = "";
            document.querySelector('input').value = display;
        }
        else{
            console.log(e.target)
            display= display + e.target.innerHTML;
            document.querySelector('input').value = display;
        }
    })
})
