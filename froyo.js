/* A visitor receives a prompt upon opening the website 
to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
When they view the browser console, they observe a table listing how many
of each flavor they have ordered. In this case, they will be able to observe 
that they have ordered three vanilla, two coffee, and one strawberry froyo.  */

//Ask the users for flavors as input
const userImput = prompt('Type flavors (vanilla, coffee, strawberry, chocolate) separated by commas', 
     'vanilla,vanilla,vanilla,strawberry,coffee,coffee,chocolate');

// transforms user input to an array of strings
const flavorsArray = userImput.split(',')

console.log(flavorsArray)

/**Function to iterate through users flavor and turn them in to an object
 * @param {string[]} flavors an array with the custumer's flavor
 * @returns {object} an object with the flavors keys and quantities values
 */
function createObject(flavors) {
     let customerFlavors = {
      };
     for (let flavor of flavors) {
       customerFlavors[`${flavor}`] = 0;
     }
     for(let flavor of flavors){
     if(flavor == 'vanilla'){
          customerFlavors.vanilla += 1;
     }
     else if(flavor == 'coffee'){
          customerFlavors.coffee += 1;
     }
     else if(flavor == 'strawberry'){
          customerFlavors.strawberry += 1;
     }
     else if(flavor == 'chocolate'){
          customerFlavors.chocolate += 1
     }
}
     return customerFlavors
}

console.table(createObject(flavorsArray))

const tableOfQuantities = createObject(flavorsArray)

console.table(tableOfQuantities)


// THIS WAS WORKING BUT DISCOVERED THAT I WAS ABLE  TO DO IT IN UN FUNCTION
// function giveFlavorsQuantity(flavors, quantities) {
//      let sum = quantities;
//      for(const flavor of flavors) {
//           if(flavor == 'vanilla'){
//                sum.vanilla += +1;
//           }
//           else if(flavor == 'coffee'){
//                sum.coffee += +1;
//           }
//           else if(flavor == 'strawberry'){
//                sum.strawberry += +1;
//           }
//      }
 
//      return sum
// }
//  console.log(giveFlavorsQuantity(flavorsArray, createObject(flavorsArray)))
