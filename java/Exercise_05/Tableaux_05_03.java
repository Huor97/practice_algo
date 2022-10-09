//Afficher l’indice d’un élément n dans le tableau t

package Exercise_05;

import java.util.Arrays;

public class Tableaux_05_03 {

	public static void main(String[] args) {

		int[] t = { 1, 4, 6 };
		System.out.println("Soit le tableau t" + Arrays.toString(t));

		for (int i = 0; i < t.length; i++) {
			System.out.println("L'index de l'élément t[" + t[i] + "] est : " + i);
		}

	}

}
