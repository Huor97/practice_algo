//Exo6: Ecrire une application qui permet d’afficher des nombres entrés par l’utilisateur tant qu’ils sont inférieur à 10.

package Exercise_04;

import java.util.Scanner;

public class Boucles_04_06 {

	public static void main(String[] args) {
		try(Scanner scanner = new Scanner(System.in);)
		{
			System.out.println("tant que votre nombre est inferieur à 10, entrer un nombre:");
			
			int n;
			do {
				System.out.println("rentre un nombre SVP : ");
				n = scanner.nextInt();
			}
			while( n < 5);
			scanner.close();
		}

	}

}
