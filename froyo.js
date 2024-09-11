/* A visitor receives a prompt upon opening the website 
to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
When they view the browser console, they observe a table listing how many
of each flavor they have ordered. In this case, they will be able to observe 
that they have ordered three vanilla, two coffee, and one strawberry froyo.  */

const userImput = prompt('Tell me what froyo flavor do you want separated by commas', 
     'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

const flavorsArray = userImput.split(',')

console.log(flavorsArray)

/**
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
          customerFlavors.vanilla += +1;
     }
     else if(flavor == 'coffee'){
          customerFlavors.coffee += +1;
     }
     else if(flavor == 'strawberry'){
          customerFlavors.strawberry += +1;
     }
}
     return customerFlavors
}

console.log(createObject(flavorsArray))
function giveFlavorsQuantity(flavors, quantities) {
     let sum = quantities;
     for(const flavor of flavors) {
          if(flavor == 'vanilla'){
               sum.vanilla += +1;
          }
          else if(flavor == 'coffee'){
               sum.coffee += +1;
          }
          else if(flavor == 'strawberry'){
               sum.strawberry += +1;
          }
     }
 
     return sum
}
 console.log(giveFlavorsQuantity(flavorsArray, createObject(flavorsArray)))
