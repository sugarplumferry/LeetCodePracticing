/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if(s.length > t.length) return false;
    
    let sIndex = 0;
    for(let i = 0; i < t.length; i++){
        if(s[sIndex] == t[i]) sIndex++;
    }
    
    return sIndex == s.length ? true : false;
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("", ""));          // true