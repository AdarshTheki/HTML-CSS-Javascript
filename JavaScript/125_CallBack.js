// Higher order function (HoF)
// callBack , Returning, function setting time (setInterval, setTimeOut)
      const powerTwo = (n) =>{
        return n ** 2
      }
      function powerCube(powerTwo, n){
        return powerTwo(n) * n;
      }
      console.log(powerCube(powerTwo, 3));

      function sayHello(){
        return () => {
          console.log("Hello Hitesh!");
        }
      }
      let guessValue = sayHello()
      console.log(guessValue);

      const higherOrder = n => {
        const oneFun = m => {
          const twoFun = p => {
            return m + n + p
          }
          return twoFun
        }
        return oneFun 
      }
      console.log(higherOrder(2)(3)(4));

      const myNumber = [2, 3, 4, 5];
      const sumArray = arr => {
        total = 0
        arr.forEach(function(element){
          total += element
        });
        return total
      }
      console.log(sumArray(myNumber));

      function oneMoreHello(){
        console.log("This is Hitesh!", Math.random());
      }
      setInterval(oneMoreHello, 2000) // infinite loop run
      setTimeout(oneMoreHello, 2000);
