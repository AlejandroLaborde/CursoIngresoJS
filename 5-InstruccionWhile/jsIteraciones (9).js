function Mostrar()
{	

	var numero=0;
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("");

		if ( contador==1)
		{
			maximo=numero;
			minimo=numero;
		}else
		{
			if (numero>maximo)
			{
				maximo=numero;
			}
			if (numero<maximo)
			{
				minimo=numero;
			}
		}
	
	}




}//FIN DE LA FUNCIÓN