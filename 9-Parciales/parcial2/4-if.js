/*
SE INGRESAN DOS NUMEROS, SI SON IGUALES SE CONCATENAN
SI EL PRIMERO ES MAYOR AL SEGUNDO SE MULTIPLICAN
SI EL SEGUNDO ESMAS GRANDE SE RESTAN
SI LA MULTIPLICACCION ES PAR ADEMAS DE MOSTRAR SE MUESTRA EL MENSAJE " ES PAR "
*/


//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var concatenacion;
	var multiplicaion;
	var	resta;
	//se ingresan dos numeros

	numero1=prompt("ingrese el primer numero");
	numero2=prompt("ingrese el segundo numero");

	if(numero1==numero2)
	{
		concatenacion=numero1+numero2;
		document.write("<br>concatenacion" + concatenacion);
	}else
		{	numero1=parseInt(numero1);
			numero2=parseInt(numero2);
			if(numero1>numero2)
			{
				multiplicaion=numero1*numero2;
				if(multiplicaion%2==0)
				{
					alert("La multiplicacion es par");
					
				}
				document.write("<br>multiplicacion" + multiplicaion);
			}else
			{
				resta=numero1-numero2;
				document.write("<br>resta" + resta);
			}
		}
	
	
	
	
	
}

