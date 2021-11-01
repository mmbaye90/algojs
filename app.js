const conversion = function(degCel) {
    if (typeof degCel === "number") {
        return (degCel * (9 / 5) + 32);
    }
}
console.log(conversion(5))