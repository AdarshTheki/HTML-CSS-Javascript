// the eventual completion (or failure) of an asynchronous operation and its resulting value.

const PromiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Adarsh", age: 25 });
  }, 1000);
});
PromiseOne.then(function (user) {
  console.log(user);
});

const PromiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Adarsh", age: 25 });
    } else {
      reject("SomeThing is Wrongs");
    }
  }, 1000);
});
PromiseTwo.then((user) => {
  console.log(user);
  return user.username;
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("This is final  result"));

// --------------------------------------------------------------------------

// Fetch Data : Async/Await with try/catch

async function PromiseFour() {
  const res = fetch(
    "https://openlibrary.org/people/mekBot/books/currently-reading.json"
  )
    .then((data) => data.json())
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
}
// PromiseFour();

async function PromiseFive() {
  try {
    const res = await fetch(
      "https://openlibrary.org/people/mekBot/books/currently-reading.json"
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
// PromiseFive();

console.log("Last Console");
