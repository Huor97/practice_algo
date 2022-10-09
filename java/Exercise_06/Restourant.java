package Exercise_06;

import java.util.Scanner;

public class Restourant {
	public static void commend() {

		Scanner scanner = new Scanner(System.in);

		String main_Menu[] = { "Vegetarian", "Chicken", "beef" };
		String accompany[] = { "fresh vegetables", "fries", "rice" };
		String drink[] = { "still water", "sparkling water", "soda" };

		System.out.println("Our restaurant offers 3 lunch menus at 9 euros:\n1. vegetables\n2. chicken\n3. beef");
		System.out.println("Please choose your menu:");

		int select_menu;
		int my_accompany;
		int my_drink;

		select_menu = scanner.nextInt();
//		--------------------------------------------------- Menu vegetarian
		if (select_menu == 1) {

			System.out.println(main_Menu[0] + "\n");
			System.out.println("Do you want to have rice with it or not?\n");
			System.out.println(" 1. yes\n 2. Non");
			my_accompany = scanner.nextInt();

			if (my_accompany == 1) {

				System.out.println(" +" + accompany[2] + "\n");
				System.out.println("choose you a drink:");
				System.out.println(" 1. still water\n 2. sparkling water\n 3. soda");
				my_drink = scanner.nextInt();

				if (my_drink == 1)
					System.out.println(
							" menu " + main_Menu[0] + " with accompany " + accompany[2] + " and drink " + drink[0]);
				if (my_drink == 2)
					System.out.println(
							" menu " + main_Menu[0] + " with accompany " + accompany[2] + " and drink " + drink[1]);
				if (my_drink == 3)
					System.out.println(
							" menu " + main_Menu[0] + " with accompany " + accompany[2] + " and drink " + drink[2]);

			} else {

				System.out.println("no rice \n");
				System.out.println("still water, sparkling water, soda");
				my_drink = scanner.nextInt();

				if (my_drink == 1)
					System.out.println(" menu " + main_Menu[0] + " with drink " + drink[0]);
				if (my_drink == 2)
					System.out.println(" menu " + main_Menu[0] + " with drink " + drink[1]);
				if (my_drink == 3)
					System.out.println(" menu " + main_Menu[0] + " with drink " + drink[2]);
			}
			System.out.println(" Total price of the order: 9 euros\n Please pay for your order at checkout");
		}
//		--------------------------------------------------- End menu vegetarian

		scanner.close();
	}

}
