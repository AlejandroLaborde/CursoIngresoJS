function Mostrar()
{
	var contadorDePositivos=0;
	var	contadorDeNegativos=0;
	var	contadorDeCeros=0;
	var conradorDePar=0;
	var contadorDeImpar=0;
	var contador50=0;

	for(contador=-100;contador<100;contador++)
	{
		if(contador<0)
		{
				contadorDeNegativos++;
			}else
				{
				if(contador>0)
				{
					contadorDePositivos++;
				}else
				{
						contadorDeCeros++;
				}
		}// cuenta los positivos y negativos

		if(contador%2==0 && contador!=0)
		{
			conradorDePar++;
		}else
		{
			if(contador!=0)
			{
				contadorDeImpar++
			}
		}//cuenta los pares e impares

		switch (contador)
		{
			case 50:
				contador50 ++;
				break;
		}
	}	
	document.write("<br>positivos: " + contadorDePositivos);
	document.write("<br>negativos: " + contadorDeNegativos);
	document.write("<br>ceros: " + contadorDeCeros);
	document.write("<br>pares: " + 	conradorDePar);
	document.write("<br>impares: " + contadorDeImpar);
	document.write("<br>de 50: " + contador50);

	/*for(;;)
	{
		contador++;
		document.write("<br>" + contador);
		if(contador==10)
		{
			document.write( "<br>break" + contador);
			break;
		}
		if(contador==5)
		{
			continue;
		}
		document.write( "<br>continue" + contador);
	}*/
}