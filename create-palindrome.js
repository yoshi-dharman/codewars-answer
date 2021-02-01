function solve(s){
    //..
  for(let i = 0; i < s.length/2; i++){
        if(String.fromCharCode(s[i].charCodeAt()+1) == String.fromCharCode(s[s.length-(i+1)].charCodeAt()+1) ||
        String.fromCharCode(s[i].charCodeAt()-1) == String.fromCharCode(s[s.length-(i+1)].charCodeAt()+1) ||
        String.fromCharCode(s[i].charCodeAt()+1) == String.fromCharCode(s[s.length-(i+1)].charCodeAt()-1) ||
        String.fromCharCode(s[i].charCodeAt()-1) == String.fromCharCode(s[s.length-(i+1)].charCodeAt()-1) 
        ){}
        else{
            return false;
        }
    }
    return true;
}

console.log(solve("abzy"));
solve("abba");
solve("kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm");
// solve("adfa");

