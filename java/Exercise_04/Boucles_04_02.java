//Écrire un programme affichant la table de multiplication d’un nombre saisi par l’utilisateur.

package Exercise_04;

import java.util.Scanner;

public class Boucles_04_02 {

	public static void main(String[] args) {
		
		try (Scanner scanner = new Scanner(System.in);) {
			
			System.out.println("Saisissez un nombre entier:");
			int nbr = scanner.nextInt();

			for (int i = 1; i <= 10; i++)
				System.out.println(nbr + "*" + i + "=" + nbr * i);
		}

	}

}
