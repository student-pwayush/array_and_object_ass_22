
const shoppingCart = ['Milk', 'Coffee', 'Tea', '$one>'];


if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}


if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}


const indexToRemove = shoppingCart.indexOf('$one>');
if (indexToRemove !== -1) {
    shoppingCart.splice(indexToRemove, 1);
}

const indexToModify = shoppingCart.indexOf('Tea');
if (indexToModify !== -1) {
    shoppingCart[indexToModify] = 'Green Tea';
}

console.log("Updated shopping cart:", shoppingCart);
