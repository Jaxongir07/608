let arr = [
    {
        id: 1,
        elem: 'Bread',
        price: '5000'
    },
    {
        id: 2,
        elem: 'pizza',
        price: '50000'
    },
    {
        id: 3,
        elem: 'water',
        price: '10000'
    },
    {
        id: 4,
        elem: 'meat',
        price: '80000'
    },
    {
        id: 5,
        elem: 'egs',
        price: '35000'
    },
    {
        id: 6,
        elem: 'rolton',
        price: '5000'
    },
    {
        id: 7,
        elem: 'maslo',
        price: '18000'
    },
    {
        id: 8,
        elem: 'ramyon',
        price: '22000'
    },
    {
        id: 9,
        elem: 'tvorog',
        price: '7000'
    },
    {
        id: 10,
        elem: 'vodka',
        price: '10000'
    }
]

let discount = 20

for (let item of arr) {
    let num = Number(arr.price)
   

    item.price = item.price - (discount * item.price / 100)
    console.log('скидки -20% ' + item.elem + ' = ' + item.price + ' сум');
}



