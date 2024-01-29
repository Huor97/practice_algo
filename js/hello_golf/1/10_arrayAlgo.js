// crée deux list
// entrée avire deux liste et sorti avoir somme des deux list dans une liste
// clacuel pas le chifre zero

let list1 = [1, 9, 0, 3, 5, 3, 4, 5, 0, 0];
let list2 = [3, 2, 6, 5, 5, 0];

function myArray(ary1, ary2) {
  let list3;
  for (let i = 0; i < ary1.length; i++) {
    for (let j = i + 1; j < ary1.length; j++) {
      if (ary1[i] === 0) {
        let temp = ary1[i];
        ary1[i] = ary1[j];
        ary1[j] = temp;
      }
    }
    for (let k = i + 1; k < ary2.length; k++) {
      if (ary2[i] === 0) {
        let temp1 = ary1[i];
        ary1[i] = ary2[j];
        ary2[j] = temp1;
      }
      list3 = ary1[i] + ary2[i];
    }
    if (ary1[i] === 0 || ary2[i] === 0) {
      break;
    } else if (ary1[i] != 0 || ary2[i] != 0) {
      list3 = ary1[i] + ary2[i];
    }
    console.log(list3);
  }

  return list3;
}
myArray(list1, list2);

// for (let i = 0; i < list1.length; i++) {
//   for (let j = i + 1; j < list1.length; j++) {
//     if (list1[i] === 0 || list2[i] === 0) {
//       let temp = list1[i];
//       list1[i] = list1[j];
//       list1[j] = temp;
//     }
//   }
//   const element = list1[i];
//   console.log(element);
// }
