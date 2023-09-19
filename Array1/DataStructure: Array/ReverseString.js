function reverse(str) {
    if (!str || typeof str !== 'string' || str.length < 2 ) return str;

    const backwards = []
    const totalItems = str.length - 1 ;
    for (let i = totalItems; i >= 0 ; i--){
        backwards.push(str[i]);
    }
    return backwards.join('');
}

const reverse3 = str => [...str].reverse().join('');

const result = reverse("akuu")

console.log(result)
