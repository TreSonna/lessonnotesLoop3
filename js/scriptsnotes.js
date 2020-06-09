// Simple for loop that will print out 0 to 9
for(let index = 0; index < 10; index++) {
  console.log(index);
}

// Simple for loop that will print out 0 to 10 due to <=
for(let index = 0; index <= 10; index++) {
  console.log(index);
}

// Loop that will push the index to an array then print the array
let array = [];
for(let index = 0; index < 10; index++) {
  array.push(index);
  console.log(array);
} 

// Loop that will print out all the contents of an array
let array = [1, "two", 3.5, "fourThing"];
for(let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

// Loop that will print out every second element of an array
let array = [1, "two", 3.5, "fourThing", "five", "alsoSix"];
for(let index = 0; index < array.length; index += 2) {
  console.log(array[index]);
}
///////////////////////////////////////////////////////////////////
function dnaPatternDetector(dnaSequence, pattern) {
  for (let i = 0; i < dnaSequence.length; i +=1) {
    if (dnaSequence[i] === pattern) {
      return true;
    }; //////////////////////////////////////////// dna 
    console.log("Looped!");
  }
  return false;
// const sequence = ["X", "A", "Y", "M", "D"];
// const pattern1 = "A";
// const pattern2 = "Z";
}
////////////////////////////////////////////////////////////////////
let dnaFlag = false;
const dnaSequence = ["X", "A", "Y", "M", "D"];
dnaSequence.forEach(function(element) {
  if (element === "A") {
    dnaFlag = true;
    break; // gods gift to overflow errors
  };
});
dnaFlag
/////////////////////////////////////////////////////////////////////
const phrase = $("input#textField").val();
let word = [];

// for (i=0; i < phrase.length; i += 1) {
//   if (phrase.charAt(i) === "a"  phrase.charAt(i) === "e"  phrase.charAt(i) === "i"  phrase.charAt(i) === "o"  phrase.charAt(i) === "u") {
//     let vowel = phrase.charAt(i);
//     vowel.replace("-");

//     word.push(vowel);
//     $("#output").append(word[i]);
//   }
//   else {
//     word.push($(phrase.charAt(i)).val());
//     $("#output").append(word[i]);
//   }
// }