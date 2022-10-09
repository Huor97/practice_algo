// ************************ 9.returner dans un tableau les valeurs des tableaux entrée sans valeur doubleau
/*
function mergeArrays(arr1, arr2){
	let i = 0;
	let j = 1;
	let longT1 = arr1.length;
	let tmp = 0;
	let t3 = [];
	// fusioner les tables
	while(i <= arr2.length-1){
		arr1[longT1] = arr2[i]
		longT1 = longT1 + 1;
		i++;
	}
	i = 0;
	// trie table qui a été fusioner
	while(i <= arr1.length){
		j = i + 1;
			while (j <= arr1.length){
				if(arr1[i] > arr1[j]){
					tmp = arr1[i];
					arr1[i] = arr1[j];
					arr1[j] = tmp;
				}
				j++
		}
		i++
	}
	i = 0;
	j = 0;
	// avoir un table sens double numbre.
	while(i <= arr1.length){
		if(arr1[i] !== arr1[i+1]){
			t3[j] = arr1[i]
			j = j + 1;
		}
	i++;
	}
	console.log(t3)
}

mergeArrays([1,3,5,7,9,11,12],[1,2,3,4,5,10,12])
*/
// *************************** 8.returner la somme des nombre positive d'un tableau
//function positiveSum(arr) {
//   let i = 0;
//    let nombre = 0;

//    while(i <= arr.length){
//        if(arr[i] > 0){
//            nombre = nombre + arr[i];
//        }else{
//            nombre += 0;
//        }
//        i++
//    }
//    console.log(nombre)

//}
//positiveSum([-1,2,3,4,-5])
// ************************************** 7.Somme de deux listes
// function arrayPlusArray(arr1, arr2) {
//     let i = 0;
//     let j = arr1.length;
//     let nombre = arr1[0];
//     while(i <= arr2.length -1){
//         arr1[j] = arr2[i]
//         j = j + 1
//         i++
//     }
//     i = 0
//     while(i < arr1.length - 1){
//         nombre = arr1[i+1] + nombre;
//         i++
//     }
//     console.log(nombre)
//   }

//   arrayPlusArray([1], [1])

// ************************************* 6.avoir les nombre qui sont divisible par diviseur dans une tableau.
// function divisibleBy(numbers, divisor){
//     let i = 0;
//     let j = 0;
//     let table = [];
//     while(i <= numbers.length){
//         if(numbers[i] % divisor == 0){
//             table[j] = numbers[i]
//             j = j + 1
//         }
//         i++
//     }
//     console.log(table)
// }

// divisibleBy([1,2,3,4,5,6], 2)

// ***************************** 5.Un tableau du nombre d'entrée inverser
// function digitize(n) {
//     let i = 0;
//     let strN = "";
//     let tabCh = [];
//     let longN = 0;
//     let tablN = [];
//     if (n != 0) {
//         strN += n;
//         longN = strN.length - 1;
//         while(i <= longN){
//             tabCh[i] = strN[longN - i];
//             tablN[i] = parseInt(tabCh[i])
//             i++
//         }
//     }else{
//         tablN[0] = 0;
//     }
//     console.log(tablN)
//   }
//   digitize(35231)

// ********************************* 4.Avoir la premiere lettre du chaque mot.
// function abbrevName(name){
//     i = 0;
//     str = name[0];
//     while(i <= name.length){
//         if(name[i] == " "){
//             str += "." + name[i+1]
//         }
//         i++
//     }
//     console.log(str.toUpperCase())
// }
// abbrevName("hello world!")

// ******************************* 3.Transferer une chaîn de caractèr en tableau de mots.
// function stringToArray(string){

//     let j = 0;
//     let tabMots = [""];
//     for(let i = 0; i <= string.length - 1; i++){
//         if(string[i] == " "){
//             j = j + 1;
//             tabMots[j] = ""
//         }else{
//             tabMots[j] += string[i];
//         }
//     }
//     console.log(nombre)
//   }

//   arrayPlusArray([1], [1])

// *************************** returner la somme des nombre positive d'un tableau

//function positiveSum(arr) {
//   let i = 0;
//    let nombre = 0;

//    while(i <= arr.length){
//        if(arr[i] > 0){
//            nombre = nombre + arr[i];
//        }else{
//            nombre += 0;
//        }
//        i++
//    }
//    console.log(nombre)

//}
//positiveSum([-1,2,3,4,-5])

// }
// stringToArray("Hello Monde!")
// stringToArray("I love arrays they are my favorite")

mergeArrays([1,3,5,7,9,11,12],[1,2,3,4,5,10,12])

// function positiveSum(arr) {
//     let i = 0;
//     let nombre = 0;

//     while(i <= arr.length){
//         if(arr[i] > 0){
//             nombre = nombre + arr[i];
//         }else{
//             nombre += 0;
//         }
//         i++
//     }
//     console.log(nombre)
  
// }
// positiveSum([-1,2,3,4,-5])

// ******************************** inverser la valeur de position 1 avec 3;
// function fixTheMeerkat(arr) {
//     let tmp;
//     tmp = arr[0];
//     arr[0] = arr[2];
//     arr[2] = tmp;
//     console.log(arr); 
// }
// fixTheMeerkat(["tail", "body", "head"]);

// ***************************** multiplier par 2 chaque valeur du tableau
// function maps(x){
//     let i = 0;
    
//     while (i <= x.length - 1) {
//       x[i] = x[i] * 2;
//       i++
//     }
//     console.log(x)

//   }
//   maps([1, 2, 3])

function countPositivesSumNegatives(input) {
    let i = 0;
    let j = 0;
    let tableP = [];
    let sum = 0;
    let tableF = [];
    if(input !== 0 || input !== null){
        while(i <= input.length -1){
            if(input[i] > 0){
                tableP[j] = input[i];
                j++;
                tableF[0] = tableP.length; 
                tableF [1] = sum;
            }else if(input[i] < 0){
                    sum = sum + input[i];
                    tableF[1] = sum;
            }
            i++
        }
    }else{
        tableF = []
    }    
    console.log(tableF)
  }
  countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
