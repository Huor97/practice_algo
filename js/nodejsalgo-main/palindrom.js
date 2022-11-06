// ----------------------------------- étape 1
// Avoir trancfere la chaîne en liste
function tranfertWordToTab(word){
    let i = 0;
    let tabWord=[]
    while(i<=word.length-1){
        tabWord[i] = word[i]
        i++
    }
    // console.log(tabWord)
    return tabWord;
}
// ----------------------------------- étape 2
// Avoir un tableau inverser d'un tableau
function riversTab(tabWord){
    let i = tabWord.length-1;
    tabWordRivers=[]
    j=0
    while(i>=0){
        tabWordRivers[j] = tabWord[i]
        i--
        j++
    }
    return tabWordRivers;
}
// ----------------------------------- étape 3
// avoir deux chaînes du caractrère
function tabToStr(tabWord, tabWordRivers){
    let i = 0;
    let word = "";
    let wordRivers = "";

    while(i <= tabWord.length-1){
        word += tabWord[i]
        i++
    }
    i=0;
    while(i<=tabWordRivers.length-1){
        wordRivers += tabWordRivers[i] 
        i++
    }
    return [word, wordRivers];   
}
// ----------------------------------- étape 4
// Avoir true si les deux entrée sont egale sinon false
function comparStr(word, wordRivers){
    let vrais = true;
    if(word == wordRivers){
        vrais
    }else{
        vrais=false
    }
    return vrais;
}
// ----------------------------------- étape 5
// Avoir palindrom
function palindrom(texte){
    let wordToTab = tranfertWordToTab(texte)
    // console.log(wordToTab)
    let riversTab1 = riversTab(wordToTab)
    // console.log(riversTab1)
    let tabToStr1 = tabToStr(wordToTab, riversTab1)
    let comparStr1 = comparStr(tabToStr1[0], tabToStr1[1])
    console.log(comparStr1)
}
palindrom("elle")
palindrom("eller")