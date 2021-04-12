
const processString = (str) => {
    return str.split('').reduce((acc, next)=> {
        if (next==='#') { acc.pop(); return acc; }
        else { acc.push(next); return acc; }
    }, []).join('');
}

const processString = (str) => {
    let stack = [];
    for (let i=0;i<str.length;++i) {
        if(str[i]=='#') {
            stack.pop();
        }
        else {
            stack.push(str[i]);
        }
    }

    return stack.toString();
}

const test = (str1, str2) => {

    let newStr1 = processString(str1);
    let newStr2 = processString(str2);
    
    return newStr1==newStr2;
}


console.log(test('xy#z', 'xzz#'));
console.log(test('xy#z', 'xyz#'));
console.log(test('xp#', 'xyz##'));
console.log(test('xywrrmp', 'xywrrmu#p'));


