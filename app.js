//Addition des valeurs d'un tableau
function Addition(arr) {

    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let somme = 0;
    for (i = min; i <= max; i++) {
        somme += i
    }
    return (somme);
}
console.log(Addition([1, 3]))