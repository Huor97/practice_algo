package Exercise_07;

import java.util.Arrays;

public class Rationnel {
	
//	Instanciez deux rationnels a et b et initialisez-les aux valeurs respectives 1/2 et 4/3. a = 1/2; b = 4/3
//  Attributs d'une classe	
	int nominateur;
	int denominateur;
	
	
// Crée des objets associés de la classe.
	public Rationnel(int nominateur, int denominateur) {
		super();
		this.nominateur = nominateur;
		this.denominateur = denominateur;
	}
	
	
	
//	public String toString(), retourne une représentation du rationnel courant sous forme de chaîne de caractères.	
	public String toString() {
		
		return nominateur +"/"+ denominateur;
		
	}
	
// public Rationnel copy(), retourne une copie du rationnel courant.
	public Rationnel copy() {
		Rationnel copyRationnel;
		copyRationnel = new Rationnel(nominateur, denominateur);
		return copyRationnel;
//		return new Rationnel(nominateur, denominateur);
	}
	
// public Rationnel opposite(), retourne l’opposé du rationnel courant.
	public Rationnel opposite() {
		Rationnel oppositeRationnel;
		oppositeRationnel = new Rationnel(-nominateur, denominateur);
		return oppositeRationnel;
	}
//	-------------------------------------------------------------------------------- reduce 
//	public Rationnel reduce(), met le rationnel sous forme de fraction irréductible.
//	
	public static boolean estPremier(int n) {
		boolean premier = true;
		for(int i = 2; i < n; i++) {
			if(n % i == 0) {
				premier = false;
				break;
			}
		}
		return premier;
	}
	
	public static void listePremier(int n) {
		int[] tabl = null;
		int tailleTabl = 0;
		
		for(int i = 2; i < n; i++) {
			if(estPremier(i)) {
				tailleTabl = tailleTabl + 1;

			}
		
		}
		
		tabl = new int[tailleTabl];
		
		int indexTabl = -1;
		for(int i = 2; i < n; i++) {
			if(estPremier(i)) {
				indexTabl = indexTabl + 1;
				System.out.println(indexTabl + "-" + i);
				tabl[indexTabl] = i;

			}
		
		}
		
		System.out.println("--------------->" + tabl.length);
		
		return;
	}
	
//	---------------------------------------------------------------------------- Fin reduce
	
	public static void main(String[] args) {
		
		Rationnel a;
		Rationnel b;
		String affichage;
		Rationnel c;
		Rationnel oppo;
//		nombre premier divisible par 1 et lui même;
//		25/150; 100 => 1 et lui même; 
		
		a = new Rationnel(25, 150);
		b = new Rationnel(4, 3);

//
//		System.out.println(a.nominateur +"/"+ a.denominateur);
//		System.out.println(b.nominateur +"/"+ b.denominateur);
//		
//		affichage = a.toString();
//		System.out.println(affichage);
		
		
//		affichage = b.toString();
//		System.out.println(affichage);
//		System.out.println(b.toString());
		
		c = a.copy();
		System.out.println(c);
		c = b.copy();
		System.out.println(c);
		
		oppo = a.opposite();
		System.out.println(oppo);
		
		System.out.println(estPremier(23));
		
		listePremier(150);
	
	}	

}





