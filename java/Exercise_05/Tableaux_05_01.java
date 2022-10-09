/*Écrire un programme plaçant dans un tableau int[] t; les valeurs 1, 2, …, 10, puis affichant ce tableau.
1.Vous initialiserez le tableau à la déclaration.
2.Vous initialiserez le tableau avec une boucle.*/

package Exercise_05;

import java.util.Arrays;

public class Tableaux_05_01 {

	public static void main(String[] args) {
		
		// 1. Initialisation du tableau à la déclaration
		int[] t1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
		System.out.println(Arrays.toString(t1));

		// 2. Initialisation du tableau avec une boucle

		for (int i = 0, j = 1; i < 10; i++) {
			
			int t2[] = new int[10];
			// i <- j
			t2[i] = j;

			if (j < 10) {
				System.out.print(t2[i] + ", ");
			} else
				System.out.print(t2[i]);
			j++;
		}

	}

}
