
function calcular(){
    let number = parseInt(document.getElementById('number').value)
    let result = document.querySelector('.result')
    let tab = ''


    if(number == 0 && number == ''){
        alert('Digite um valor maior que 0 ')
    }else{
        for (let i = 0; i <= 10; i++ ){
            tab += number +" x "+ i +" =" +( number * i )+'<br>'
            
        }
    }
        result.innerHTML = tab 
}
