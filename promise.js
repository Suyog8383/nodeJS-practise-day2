let a = 10;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 2000);
});
promise.then((data) => console.log(data));
