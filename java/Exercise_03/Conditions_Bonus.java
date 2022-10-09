//Saisir les coefficients a et b et afficher la solution de l’équation ax + b = 0.

package Exercise_03;

import java.util.Scanner;

public class Conditions_Bonus {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Soit l'équation ax + b = 0. Veuillez choisir la valeur de a et b :");
		System.out.println("a = ");
		int a = scanner.nextInt();
		System.out.println("b = ");
		int b = scanner.nextInt();
		double xd = -b / a;
		
		
		if( a != 0)
			System.out.println("x = "+ xd);
		
		else
			System.out.println("Impossible de divider par 0");
		
		
		scanner.close();

	}

}
