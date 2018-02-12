function Mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	edad= document.getElementById('edad').value;
	estadoCivil= document.getElementById('estadoCivil').value;

	alert(estadoCivil);

	if  ((edad>=18) && (estadoCivil = "Soltero"))
	{
		
			alert( "Es soltero y no es menor.");
		
	}
	alert( "sale del if");
}//FIN DE LA FUNCIÓN