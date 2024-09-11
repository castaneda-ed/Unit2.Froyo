/* A visitor receives a prompt upon opening the website 
to enter a list of comma-separated froyo flavors. 
They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
When they view the browser console, they observe a table listing how many
of each flavor they have ordered. In this case, they will be able to observe 
that they have ordered three vanilla, two coffee, and one strawberry froyo.  */

const userImput = prompt('Tell me what froyo flavor do you want separated by commas', 
     'vanilla,vanilla,vanilla,strawberry,coffee,coffee');

const stringsArray = userImput.split(',')

console.log(stringsArray)

const froyoFlavors= []
for(const string of stringsArray) {
     froyoFlavors.push(string)
}
console.log(froyoFlavors)
