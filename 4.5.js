function manqueInspiration(x) {

    var n = x.length;
    
    if (n > 5) {
        return LONG = "LONG";
    } else if (n <= 5 && n !== 0) {
        return COURT = "COURT";
    } else {
        return ERROR = "ERROR";
    }

}
console.log(manqueInspiration("AZERTY"))