# An-ecommerce-console-app
A simple ecommerce console app with simple functions and variables that executes sequentially.
A node package named **readline-sync** is required to enable entering inputs in the console and collecting the data.
A `variable` is declared to collect the user's name and an `if else` statement is used to verify if the name is valid, subsequently a `variable` named visitor is used to store that input and a welcome message is logged to the console.
A `variable` is declared named products, which holds an array of items for sale with a unique ID and another empty `variable` is declared to store user selection.
A `function` named addToCart takes two arguements, the productID and quantity. This function pushes user selection to the empty cart `variable`. It console logs a message that shows an item has been added or is unavailable. 
A `function` called displayCart displays the selected items in the empty cart `variable` assuming items have been added along with price and quantity.
A final `function` is declared called checkout that calculates the items in the cart and logs a confirmatory message or says the cart is empty if the length is = 0.
A `variable` is declared that has a parameter null, another parameter is assigned to it which is the `variable` used to store the user's name.
If the above variable is `!==` null, then a while loop is fired which logs a menu type message to the console.
A `variable` is declared that collects the user input while the menu has been displayed. 
A `switch` with the parameter of the `choice` variable that activates different case scenarios according to the user's input.
