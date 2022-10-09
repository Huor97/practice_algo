package Creature;

public class AniMain {
	public static void main(String[] args) {
		AniSauvage lion = new AniSauvage();
		 lion.setPatte(4);
		 lion.setAile(0);
		//lion.patte=4; 
		System.out.println("lion patte :"+lion.getPatte());
		System.out.println("lion aile :"+lion.getAile());
		
		AniDomestique canari = new AniDomestique();
		canari.setPatte(2);
		canari.setAile(2);
		System.out.println("canari patte :"+canari.getPatte());
		System.out.println("canari aile :"+canari.getAile());
	}
}
