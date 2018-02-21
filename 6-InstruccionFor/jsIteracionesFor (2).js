function Mostrar()
{
	var numeroRandom;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var portcen0=0;
	var portcen1=0;
	var portcen2=0;
	var portcen3=0;
	var portcen4=0;
	var portcen5=0;
	var portcen6=0;
	var portcen7=0;
	var portcen8=0;
	var portcen9=0;
	var iteraciones=100000	;



	
	var numeroRandom;

	for(contador=0;contador<iteraciones;contador++)
	{
		numeroRandom=Math.floor(Math.random()*10);

		switch(numeroRandom)
		{
			case 0:
				contador0++;
			break;
			case 1:
				contador1++; 
			break;
			case 2:
				contador2++;
			break;
			case 3:
			portcen3 = (contador3 / (iteraciones))*100;
				if(contador%2==0)
				{
					contador3++;
					contador++;

				}else
				{
					contador3++;
				}
				contador3++;
			break;
			case 4:
				contador4++;
			break;
			case 5:
				contador5++;
			break;
			case 6:
				contador6++;
			break;
			case 7:
				contador7++;
			break;
			case 8:
				contador8++;
			break;
			case 9:
				contador9++;
			break;

		}


	}
	portcen0 = (contador0 / (contador+1))*100;
	portcen0=Math.round(portcen0);
	document.write("<br> el 0 salio:" + contador0+ " veces: "+ portcen0 + "%");
	portcen1 = (contador1 / (contador+1))*100;
	portcen1=Math.round(portcen1);
	document.write("<br> el 1 salio:" + contador1+ " veces: "+ portcen1 + "%");
	portcen2 = (contador2 / (contador+1))*100;
	portcen2=Math.round(portcen2);
	document.write("<br> el 2 salio:" + contador2+ " veces: "+ portcen2 + "%");
	portcen3 = (contador3 / (contador+1))*100;
	portcen3=Math.round(portcen3);
	document.write("<br> el 3 salio:" + contador3+ " veces: "+ portcen3 + "%");
	portcen4 = (contador4 / (contador+1))*100;
	portcen4=Math.round(portcen4);
	document.write("<br> el 4 salio:" + contador4+ " veces: "+ portcen4 + "%");
	portcen5 = (contador5 / (contador+1))*100;
	portcen5=Math.round(portcen5);
	document.write("<br> el 5 salio:" + contador5+ " veces: "+ portcen5 + "%");
	portcen6 = (contador6 / (contador+1))*100;
	portcen6=Math.round(portcen6);
	document.write("<br> el 6 salio:" + contador6+ " veces: "+ portcen6 + "%");
	portcen7 = (contador7 / (contador+1))*100;
	portcen7=Math.round(portcen7);
	document.write("<br> el 7 salio:" + contador7+ " veces: "+ portcen7 + "%");
	portcen8 = (contador8 / (contador+1))*100;
	portcen8=Math.round(portcen8);
	document.write("<br> el 8 salio:" + contador8+ " veces: "+ portcen8 + "%");
	portcen9 = (contador9 / (contador+1))*100;
	portcen9=Math.round(portcen9);
	document.write("<br> el 9 salio:" + contador9+ " veces: "+ portcen9 + "%");


}