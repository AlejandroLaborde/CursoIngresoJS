function Mostrar()
{
	var contador=0;
	var respuesta= "no";
	var SumaDeNegativos=0;
	var SumaDePositivos=0;
	var CantidadDePositivos=0;
	var CantidadDeNegativos=0;
	var CantidadDeCeros=0;
	var CantidadDePares=0;
	var PromedioDePositivos=0;
	var PromedioDeNegativos=0;
	var Diferencia;

while (respuesta != "si")
	{
		contador++;
		numerosIngresados=prompt("ingrese un numero");
		numerosIngresados=parseInt(numerosIngresados);
		
		if(numerosIngresados>0)
		{
			SumaDePositivos=SumaDePositivos+numerosIngresados;
			CantidadDePositivos++;
		}

		if(numerosIngresados<0)
		{
			SumaDeNegativos=SumaDeNegativos+numerosIngresados;
			CantidadDeNegativos++;
		}
		if(numerosIngresados==0)
		{
			CantidadDeCeros++;
		}
		if(numerosIngresados%2 ==0)
		{
			CantidadDePares++;
		}
		PromedioDePositivos=SumaDePositivos/CantidadDePositivos;
		PromedioDeNegativos=SumaDeNegativos/CantidadDeNegativos;
		Diferencia= SumaDePositivos - SumaDeNegativos;


		respuesta=prompt("si desea sumar los numeros hasta aqui ingrese 'si' ");
	}
	document.write("<br>" + "1-Suma de los negativos: " + SumaDeNegativos);
	document.write("<br>" + "2-Suma de los positivos: " + SumaDePositivos);
	document.write("<br>" + "3-Cantidad de positivos: " + CantidadDePositivos);
	document.write("<br>" + "4-Cantidad de negativos: " + CantidadDeNegativos);
	document.write("<br>" + "5-Cantidad de ceros: " + CantidadDeCeros);
	document.write("<br>" + "6-Cantidad de números pares: " + CantidadDePares);
	document.write("<br>" + "7-Promedio de positivos: " + PromedioDePositivos);
	document.write("<br>" + "8-Promedios de negativos: " + PromedioDeNegativos);
	document.write("<br>" + "9-Diferencia entre positivos y negativos: " + Diferencia);

}//FIN DE LA FUNCIÓN