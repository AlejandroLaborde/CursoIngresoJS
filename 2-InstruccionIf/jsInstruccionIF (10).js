function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var Nota;
	Nota = Math.floor(Math.random() * 10 ) + 1;
	alert( Nota); // solo se muestra pasa saber que numero sale y poder chequear resultados

	if (Nota>4)
	{
		if(Nota>=9)
		{
			alert("EXELENTE");
		}
		else
		{
			alert("APROBO");
		}
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}


}//FIN DE LA FUNCIÓN