/*

 promedio de peso de todos
 temperatura maxima y minima
*/




function Mostrar()
{
	var Nombre;
	var peso;
	var temperatura;
	var CantidadDeTempPares=0;
	var CantidadDeTempImpares=0;
	var mayorPeso=0;
	var menorPeso=999999999;
	var animalMasPesado;
	var animalMenosPesado;
	var habitadFrio=0;
	var sumatoriaDePesos=0;
	var cantidadDeAnimales=0;
	var temperaturaMinima=50;
	var temperaturaMaxima=0;
	var seguir;
	var promedio;

	while(seguir!="no")
	{
		//Pide nombre de animal
		Nombre=prompt("ingrese nombre del animal");

		// pide peso del animal
		peso=prompt("ingrese peso del animal");
		peso=parseInt(peso);
		while(peso<=0 || isNaN(peso))
			{
				peso=prompt("ingrese peso del animal");
				peso=parseInt(peso);
			}
		cantidadDeAnimales++;
		sumatoriaDePesos=sumatoriaDePesos+peso;

		// temperatura del habitad
		temperatura=prompt("ingrese temperatura del habitad");
		temperatura=parseInt(temperatura);

		while(temperatura<-40 || temperatura>40 || isNaN(temperatura))
			{
				temperatura=prompt("ingrese temperatura del habitad");
				temperatura=parseInt(temperatura);
			}

		//valida cantidad de temperaturas pares
		if(temperatura%2 ==0 && temperatura!=0)
			{
				CantidadDeTempPares++;
			} else
				{	
					if(temperatura%2 !=0 && temperatura!=0)
					{
						CantidadDeTempImpares++;	
					}
					
				}

		// informa el mas pesado
		

		if (peso>mayorPeso)
			{
				mayorPeso=peso;
				animalMasPesado=Nombre;
			}
		// informa el menos pesado

		if (peso<menorPeso)
			{
				menorPeso=peso;
				animalMenosPesado=Nombre
			}

		//cantidad de animales cuyo habitad tiene - de 0 grados

		if(temperatura<0)
			{
				habitadFrio++;
			}

		//temperatura max y min

		if (temperatura>temperaturaMaxima)
			{
				temperaturaMaxima=temperatura;
			}
		if (temperatura<temperaturaMinima)
			{
				temperaturaMinima=temperatura;
			}
		//promedio de pesos
		promedio=sumatoriaDePesos/cantidadDeAnimales;
		
		seguir=prompt("Si desea dejar de ingresar datos ingrese NO");
	}

	document.write("<br> La cantidad de temperatura pares: " + CantidadDeTempPares);
	document.write("<br> La cantidad de temperatura impares: " + CantidadDeTempImpares);
	document.write("<br> El mas pesado es: " + animalMenosPesado);
	document.write("<br> El mas liviano es: " + animalMenosPesado);
	document.write("<br> La cantidad de animales cuyo habitad tiene una temp > 0: " + habitadFrio);
	document.write("<br> La temperatura maxima es: " + temperaturaMaxima + "la minima es: " + temperaturaMinima);
	document.write("<br> El promedio de pesos es:" + promedio);

}