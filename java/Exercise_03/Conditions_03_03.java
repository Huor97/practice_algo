//Saisir une note, afficher "ajourné" si la note est inférieure à 8, "rattrapage" entre 8 et 10, "admis" dessus de 10.
package Exercise_03;

import java.util.Scanner;

public class Conditions_03_03 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("Siaisir un note:");
		
		
		int note = scanner.nextInt();
		
		if(note > 10)
			System.out.println("admis");
		
		else if(note <= 10 && note >= 8)
			System.out.println("rattrapage");
		
		else
			System.out.println("ajourné");
		
		
		scanner.close();

	}

}
