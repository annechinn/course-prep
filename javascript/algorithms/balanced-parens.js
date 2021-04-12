

const balancedParentheses = (str) => {
  let stack = [];
    
  for (let i=0;i<s.length;++i) {
      let ch = s[i];
      
      if (ch == '(' || ch == '[' || ch == '{') {
          stack.push(ch);
      }
      else {
          let top = stack.pop();
          if (!top) return false;
          if (ch == ')' && top !='(') return false;
          if (ch == ']' && top !='[') return false;
          if (ch == '}' && top !='{') return false;
      }
  }

  return stack.length==0;
}


//let str = "{ [ ] ( ) }"
//let str = "{ [ ( ] ) }"
let str = '{[(])}';

console.log(balancedParentheses(str));


  