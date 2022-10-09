//programme permettant de calculer la différence des moyennes aritméthique et géométrique de 2 nombres float

package Exercise_02;

import java.util.Scanner;

public class Operators_02_03 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Choisissez 2 nombres a et b:");
		System.out.println("a = ");
		float a = scanner.nextFloat();
		System.out.println("b = ");
		float b = scanner.nextFloat();
		double c = (a+b)/2 - Math.sqrt(a*b);
		System.out.println("La différence des moyennes aritméthique et géométrique de 'a' et 'b' est :" + c);

		scanner.close();

	}

}
