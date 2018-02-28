/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{

		
	var Edad;
	var Sexo;
	var EstadoCivil;
	var Sueldo;
	var Legajo;
	var Nacionalidad;

	//valida Edad (18 a 90)
	Edad=prompt("ingrese una Edad entre 18 y 90");
	while (Edad>90 || Edad<18 || isNaN(Edad))
	{
		Edad=prompt("ingrese una Edad entre 18 y 90");
	}
	document.getElementById('Edad').value=Edad

	//valida Sexo

	Sexo=prompt("ingrese Sexo, “M” para masculino y “F” para femenino");
	
	while(Sexo!="M" && Sexo!="F")
	{
		Sexo=prompt("ingrese Sexo, “M” para masculino y “F” para femenino");
		
	}
	document.getElementById('Sexo').value=Sexo;
 	
 	//valida estado civil

 	EstadoCivil=prompt("ingrese 1 para soltero, 2 para casado, 3 para divorciados, 4 para viudos");
 	EstadoCivil=parseInt(EstadoCivil)
 	while(EstadoCivil>4 || EstadoCivil<1 || isNaN(EstadoCivil))
 	{
 		EstadoCivil=prompt("ingrese 1 para soltero, 2 para casado, 3 para divorciados, 4 para viudos");	
		EstadoCivil=parseInt(EstadoCivil)
 	}
 	switch(EstadoCivil)
	{
		case 1 :
			EstadoCivil= "soltero";
		break;

		case 2 :
			EstadoCivil= "casado";
		break;

		case 3 :
			EstadoCivil= "divorciados";
		break;

		case 4 :
			EstadoCivil= "viudos";
		break;
 	}
 		document.getElementById('EstadoCivil').value=EstadoCivil;
 	

 	//valido sueldo
 	Sueldo=prompt("Ingrese un sueldo no menor a $8000");
 	while(Sueldo<8000 || isNaN(Sueldo))
 	{
 		Sueldo=prompt("Ingrese un sueldo no menor a $8000");
 	}
 	document.getElementById('Sueldo').value=Sueldo;

 	// valido legajo
	Legajo=prompt("Ingrese un Legajo de 4 cifras");
 	while(Legajo<1000 || Legajo>9999 || isNaN(Legajo))
 	{
 		Legajo=prompt("Ingrese un Legajo de 4 cifras");
 	}
 	document.getElementById('Legajo').value=Legajo;



 	//valido nacionalidad
 	Nacionalidad=prompt("ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
 	while(Nacionalidad!="A" && Nacionalidad!="E" && Nacionalidad!="N")
 	{
 	 	Nacionalidad=prompt("ingrese “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
 	}
 		switch(Nacionalidad)
	{
		case "A" :
			EstadoCivil= "argentinos";
		break;

		case "E" :
			EstadoCivil= "extranjeros";
		break;

		case "N" :
			EstadoCivil= "nacionalizados";
		break;
 	}
 		document.getElementById('Nacionalidad').value=Nacionalidad;

 }
