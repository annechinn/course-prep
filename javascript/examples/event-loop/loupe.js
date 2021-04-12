// https://cybrohosting.com/knowledgebase/17/How-JavaScript-works-in-browser-and-node.html


function printHello() {
    console.log("Hello");
}
function level3() {
    let l3Var = "level3";
    console.log("enter level3");
    setTimeout(printHello, 1000);
    console.log("exit level3");
}

function level2() {
    let l2Var = "level2";
    console.log("enter level2");
    setTimeout(printHello, 1000);
    level3();
    console.log("exit level2");
}

function level1() {
    let l1Var = "level1";
    console.log("enter level1");
    setTimeout(printHello, 1000);
    level2();
    console.log("exit level1");
}

level1();