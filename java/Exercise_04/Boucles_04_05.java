//Ecrire une application qui permet d’afficher, en se basant de la boucle while, toutes les lettres de l’alphabet

package Exercise_04;

public class Boucles_04_05 {

	public static void main(String[] args) {
		
		char alphabet = 'A';
		while(alphabet <= 'Z') {
			System.out.print(" | " + alphabet++);

		}

	}

}
