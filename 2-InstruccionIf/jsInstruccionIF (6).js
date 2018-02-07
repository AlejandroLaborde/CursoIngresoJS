function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;

	
	if(edad>12 && edad<=17)
	{
		alert("esadolecente");
	}
	else
	{
		if(edad<13)
		{
		alert("es menor de edad");
		}
		else
		{
		alert("es mayor de edad");
		}	
	}
}


