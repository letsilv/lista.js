

let num = parseInt(prompt('Me dê um número inteiro de 1 a 10: '))

if (num > 10)
{
    alert('Inválido!')
}

else if (num > 0 && num <= 10)
{
    document.write('<h2><center>Tabuada do ' + num + '</h2></cneter><br>')
    
for (let i = 1; i <= 10; i++) 
{ 
let mult = num * i;
        
document.write(num + " x " + i + " = " + mult + '<br>');
}
}