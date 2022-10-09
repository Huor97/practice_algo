package Exercise_01;
/*
 * Java, les fondamentaux: les Variables -> application
  		0. Créer une classe qui prendre deux nombre, 1.float, 2.entier. 
		1. Ecrire un programme qui retourne le code en entier de la lettre ’a’
		2. Ecrire un programme qui retourne la majuscule d’une lettre en minuscule donnée
		3. Ecrire un programme qui retourne la moyenne de 3 entiers donnés en entrée.
		4. Ecrire un programme qui retourne la somme et le quotient de 2 nombres donnés en entrée
		5. Ecrire un programme qui permute 5 nombre entrés sous ce format a,b,c,d,e devient => d,c,e,b,a
 */ 

public class VariablesProgram {

	public static void main(String[] arge) {

		//----------------------------------------------- exo0
		//flotant
		float nombreFloat = 3.14f;
		// entier <- flotant 
		int nb_int = (int) 3.14;
		// entier <- char
		int majuscul_A='A';		
		// byte <- char
		byte minuscul_a_byte = '@';
		// char <- entier
		char minuscul_a_character = 97;
		// char <- char = 97 - 32 
		char repons = (char) (minuscul_a_character - 32);
		
		
		//--------------------------------- exo1. 
		// entier <- char
		int minuscul_a = 'a';
		
		
		//---------------------------------- exo2. 
		//  char <- a
		char char1 = 'a';
		// char <- char methode majuscul(transsfer char: A <- char: a) 
		char char1UpperCase = Character.toUpperCase(char1);

		
		//--------------------------------- exo3. 
		int premierMoyenn = 25;
		int deuxiemMoyenn = 30;
		int troisiemMoyenn = 20;
		// a <- b + c + d 
		int aditionMyenn = premierMoyenn + deuxiemMoyenn + troisiemMoyenn;
		// k <- a/3
		int resultaMoyenn = aditionMyenn/3;
		
		
		//---------------------------------- exo4. 
		int calc_nombreA= 28, calc_nombreB = 7;	
		// c <- a + b
		int resulta_somme = calc_nombreA + calc_nombreB;
		// d <- a / b
		int resulta_qutient = calc_nombreA/calc_nombreB;
		
		
		// ----------------------------------exo5. 
		char nombre_a = 'a', nombre_b = 'b', nombre_c = 'c', nombre_d = 'd', nombre_e = 'e';
		// a <- d
		nombre_a = nombre_d;
		// b <- c
		nombre_b = nombre_c--; 
		// c <- e
		nombre_c = nombre_e;
		// d <- char: b - 1
		nombre_d = (char) (nombre_b-1);
		// e <- char: a - 3
		nombre_e = (char) (nombre_a-3);
		
		
		// --------------------------------------------- Output
		// sortir ou output
		System.out.println("------------------------------ pratique");
		System.out.println("Le nombre flotant vaut: " + nombreFloat);
		System.out.println("Le nombre flotant en entier: " + nb_int);
		System.out.println("entier majuscul de lettre A: " + majuscul_A);
		System.out.println("byte minuscule de a:minuscul_a_byte------------------ " + minuscul_a_byte);
		System.out.println("Le chifre 97 en charater: " + minuscul_a_character);
		System.out.println("Deux chifre 97-32 Négation: "+ repons);
		System.out.println("------------------------------ Exercice");
		System.out.println("Sorti exo1, entier minuscule de lettre a: " + minuscul_a);
		System.out.println("Sorti exo2, transsfer character minuscule en majuscule: " + char1UpperCase);
		System.out.println("Sorti exo3, resulta moyenne de trois nombre: " + resultaMoyenn);
		System.out.println("Sorti exo4, resulta somme de deux nombre 28,7 : " + resulta_somme + "\nSorti exo4 resulta quotient de deux nombre 28,7: " + resulta_qutient);
		System.out.println("resulta de lettre [a, b, c, d, e]: " + "["+nombre_a +", "+ nombre_b +", "+ nombre_c +", "+ nombre_d +", "+ nombre_e+"]");
		 
		System.out.println("-----------------------------------");

		String str = "abcd";
		StringBuilder lettersBuff = new StringBuilder(str);
		String str_inverse = lettersBuff.reverse().toString();
		System.out.println("'abcd' inverse donne : "+str_inverse);
	}
}
