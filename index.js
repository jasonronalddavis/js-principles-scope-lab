var customerName = 'bob'
const leastFavoriteCustomer = 'some initial value'
var bestCustomer;

function upperCaseCustomerName () {
    customerName = customerName.toUpperCase()
}

function setBestCustomer () {
    bestCustomer = 'not bob'
}

function overwriteBestCustomer () {
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = 'billy'
}