function outerFun() {
    let OuterValue = 'i am Outer Value';
    function innerFunction() {
        let innerValue = 'Inner Value';
        console.log(innerValue, OuterValue);

        (function innerOfInnerFun() {
            let innerInnerValue = 'Inner Inner value';
            console.log(innerInnerValue, OuterValue);
        })();
    }
    innerFunction();
}
outerFun();
