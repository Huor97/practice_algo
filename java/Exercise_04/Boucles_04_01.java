//Ecrire un programme demandant a l’utilisateur de saisir une valeur numerique positive n et affichant toutes les valeurs n, n-1, …, 2, 1, 0

package Exercise_04;

import java.util.Scanner;

public class Boucles_04_01 {

	public static void main(String[] args) {

		try (Scanner scanner = new Scanner(System.in)) {
			System.out.println("Introduisez un nombre positif:");
			System.out.println("n = ");
			int n = scanner.nextInt();

			for (; n > 0; n--)
				System.out.println(n + ",");
			if (n == 0)

				System.out.println(n);
		}

	}

}
