//saisir trois valeurs et qui lui dit s’il s’y trouve un doublon.


package Exercise_03;

import java.util.Scanner;

public class Conditions_03_04 {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("saisissez vous trois valeurs un après l'autre");
		
		System.out.println("première nombre:");
		int a = scanner.nextInt();
		System.out.println("Deuxième nombre:");
		int b = scanner.nextInt();
		System.out.println("Troisième nombre:");
		int c = scanner.nextInt();
		
		if(a == b || b == c && a == c)
			System.out.println("Attention, il y a un doublon!");
		
		else
			System.out.println("Bon choix!");
			
		
		scanner.close();

	}

}
