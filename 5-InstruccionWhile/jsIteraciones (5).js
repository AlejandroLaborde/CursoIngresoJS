function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

while (sexo!= "f" && sexo!="m")
{
	alert("el sexo es incorrecto, ingrese F o M");
	sexo = prompt("ingrese f ó m .");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN