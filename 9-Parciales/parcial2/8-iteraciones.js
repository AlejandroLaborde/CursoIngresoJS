//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var continuar="si";
	var numero;
	var cantidadDePares=0;
	var contadorDeNumeros=0;
	var suma=0;
	var numeroMaximo;
	var numeroMinimo;
	var promedio;






	while(continuar != "no")
	{
		contadorDeNumeros++;//contador de numeros
		numero=prompt("ingrese un numero");
		while(numero < 0 || numero=="")
		{
			numero=prompt("ingrese un numero mayor a 0");
		}//leer numero y verificar que sea mayor a 0
		
		numero=parseInt(numero);

		if(numero%2==0)
		{
			cantidadDePares++;
		}//cantidad de numeros pares
		
		suma=suma+numero; // suma  de numeros
		
		if(contadorDeNumeros == 1)
		{
			numeroMaximo=numero;
			numeroMinimo=numero;
		}else
		{
			if (numero>numeroMaximo) 
			{
				numeroMaximo=numero;
			}
			if(numero<numeroMinimo)
			{
				numeroMinimo=numero;
			}
		}	// hallar el umero max y min

		continuar=prompt("Si decea cancelar el ingreso de numeros ingrese ´no´ ");
	}
	promedio=suma / contadorDeNumeros;

	document.write("<br>la canridad de numeros pares es: " + cantidadDePares);
	document.write("<br>el promedio es: " + promedio);
	document.write("<br>la suma es: " + suma);
	document.write("<br>el numeroMaximo es: " + numeroMaximo);
	document.write("<br>el numeroMinimo es: " + numeroMinimo);

		

	
}

