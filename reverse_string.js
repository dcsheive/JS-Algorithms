function revStr(str) {
    var newStr='';
        for (var i = 0; i<str.length; i++){
            newStr += str[str.length-i-1];
        }
        return newStr;
    }
var str ="civic";
console.log(revStr(str));
function isP(str) {
    if (revStr(str)==str)
        return true;
    else
        return false;
}
console.log(isP(str));
