package Creature;
 
abstract class Animal {
	private int patte;
	private int aile;
	protected int getPatte() {
		return patte;
	}
	protected void setPatte(int patte) {
		this.patte = patte;
	}
	protected int getAile() {
		return aile;
	}
	protected void setAile(int aile) {
		this.aile = aile;
	}
	abstract int courir();
	abstract String voler();
/*	String mange;
	int cours;
	
	String mange1;
	int cours1; */
}	

