# Créez une classe Rationnel contenant un numérateur et un dénominateur tous deux de type entier.
- Instanciez deux rationnels a et b et initialisez-les aux valeurs respectives 1/2 et 4/3.
  Affichez ensuite les valeurs de ces champs


## Ajoutez à la classe Rationnel les méthodes suivantes :
- public String toString(), retourne une représentation du rationnel courant sous forme de chaîne de caractères.
- public Rationnel copy(), retourne une copie du rationnel courant.
- public Rationnel opposite(), retourne l’opposé du rationnel courant.
- public Rationnel reduce(), met le rationnel sous forme de fraction irréductible.
- public boolean isPositive(), retourne true si et seulement si le rationnel courant est strictement positif.
- public Rationnel add(Rationnel other), retourne la somme du rationnel courant et du rationnel other.
- public Rationnel multiply(Rationnel other), retourne le produit du rationnel courant avec le rationnel others.
- public Rationnel divide(Rationnel other), retourne le quotient du rationnel courant avec le rationnel others.
- public int compareTo(Rationnel other), retourne 0 si le rationnel courant est égal au rationnel other, −1 si le rationnel
- courant est inférieur à other, 1 dans le cas contraire.