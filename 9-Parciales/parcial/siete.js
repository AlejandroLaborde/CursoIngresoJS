function Mostrar()
{
	var notas;
	var sexo;
	var contador=1;
	var notaMasBaja;
	var cantidadDeVaronesAprobados=0;
	var promedio;
	var sumaDeNotas=0;

	while(contador<6)
	{
		
		notas=prompt("ingrese nota");
		while(notas<0 || notas>10 )
		{
			notas=prompt("ingrese nota entre 0 y 10");
		}// valida notas entre 0 y 10
		notas=parseInt(notas);

		sexo=prompt("ingrese sexo ingresando ´f´ o ´m´ ");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("ingrese sexo ingresando ´f´ o ´m´.");
		}//valida que el sexo sea F o M
		
		
		
		if(contador==1)
		{
			notaMasBaja=notas;
		}else
		{
			if(notas<notaMasBaja)
			{
				notaMasBaja=notas;
			}
		}// compara las notas

		if(sexo=="m" && notas>5)
		{
			cantidadDeVaronesAprobados++;
		}

		
		sumaDeNotas=sumaDeNotas+notas;
		contador++;
	}

	promedio=sumaDeNotas/(contador-1);// si no le resto uno, me cuenta 101 notas)

	document.write("<br>el promedio es: " + promedio);
	document.write("<br>la nota mas baja es: "+  notaMasBaja);
	document.write("<br>la cantidad De Varones Aprobados es: " + cantidadDeVaronesAprobados);
}
