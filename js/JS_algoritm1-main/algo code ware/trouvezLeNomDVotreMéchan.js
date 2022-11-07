function getVillainName(b){
    let nombreDeMois = b.getMonth()
    let nombreDeJour = b.getUTCDate()
    let indexCorrespondantDeJour;
    let dCorrespondantDeJour;
    let i = 0
    let mechantDeMois=""
    let resulta = "The "
    const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
    const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
    const objetJourEquivalant = [[10, 20, 30],[1,11,21,31],[2,12,22],[3,13,23],[4,14,24],[5,15,25],[6,16,26],[7,17,27],[8,18,28],[9,19,29]]

    //Avoir le nombre de mechantDeMois
    while(i<=m.length - 1){
      if(nombreDeMois==i){
        mechantDeMois = m[i] 
      }
      i++
    }
    i = 0
    // Avoir le nombre corresppondant index d par à pour du jour 
    while(i<objetJourEquivalant.length){
        // console.log(objetJourEquivalant[i])
        for (const iterator of objetJourEquivalant[i]) {
            if(nombreDeJour==iterator){
                indexCorrespondantDeJour = i
            }
        }
        i++
    }
    // Avoir le d
    i = 0
    while(i<=d.length-1){
        // console.log(d[k])
        if(i==indexCorrespondantDeJour){
            dCorrespondantDeJour = d[i]
        }
        i++
    }
    resulta += mechantDeMois +" "+ dCorrespondantDeJour
    console.log(resulta)

  }
  getVillainName(new Date("may 3"))
  