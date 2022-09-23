boton1=document.getElementById('calcular')
boton2=document.getElementById('reiniciar')
boton1.addEventListener('click',
imc)
boton2.addEventListener('click',
blanco)
function imc() {
	let peso= document.getElementById('peso').value
let altura= document.getElementById('altura').value
if(altura%1==0){
		altura=altura/100
    r=(peso/altura**2).toFixed(1)
document.getElementById('resultado').innerText =r
	}else{
		r=(peso/altura**2).toFixed(1)
document.getElementById('resultado').innerText =r
	}if(r<18.5){
		document.getElementById('resultado').style.backgroundColor='#1ec6ff'
	}else if(r>=18.5 && r<=29.9){
		document.getElementById('resultado').style.backgroundColor='#00bb2d'
	}else if(r>30 && r<=34.9){
		document.getElementById('resultado').style.backgroundColor='#fce903'
	}else if(r>35){
		document.getElementById('resultado').style.backgroundColor='#ff3333'
	}
}function blanco()
{
	document.getElementById('resultado').innerText =''
    document.getElementById('peso').value=''
    document.getElementById('altura').value=''
    document.getElementById('resultado').style.backgroundColor=''
}