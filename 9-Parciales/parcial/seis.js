function Mostrar()
{
	var importe;
	var importeMayor=-99999999999999999;
	var importeMenor=9999999999999999;
	var contador=1;



	while(contador<25)
	{
		importe=prompt("ingrese importe dia: " + contador);


		if (importe > importeMayor)
			{	
				importeMayor=importe;
			}
		if(importe<importeMenor)
			{
				importeMenor=importe;
			}	

		contador++;
	}

	document.write("<br>el mayor importe de venta fue: " + importeMayor);
	document.write("<br>el menor importe de venta fue: " + importeMenor);

}


/*function Mostrar()
{

}
*/