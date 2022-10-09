//Afficher la somme des n éléments du tableau t.

package Exercise_05;

import java.util.Arrays;

public class Tableaux_05_02 {

	public static void main(String[] args) {

		int[] t = { 1, 3, 5 };
		System.out.println("Soit le tableaux " + Arrays.toString(t));

		int n = 0;
		int somme = 0;

		while (n < t.length) {

			somme += t[n];

			n++;

		}

		System.out.println("La somme des elements du tableau est: " + somme);

	}

}
