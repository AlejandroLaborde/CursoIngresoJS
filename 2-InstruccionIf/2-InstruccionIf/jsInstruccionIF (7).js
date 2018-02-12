function Mostrar()
{
	//tomo la edad  
	var edad;
	var estadoCivil;

	edad= document.getElementById('edad').value;


	estadoCivil= document.getElementById('estadoCivil').value;
	alert(estadoCivil);
	if  (edad<18)
	{
		if(estadoCivil != "Soltero")
		{
			alert( "es muy pequeño para no ser soltero");
		}
	}
	alert( "sale del if");
}//FIN DE LA FUNCIÓN