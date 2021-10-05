let resolvedPromise = new Promise((resolve)=> {
    setTimeout (()=> {
        resolve({'message': 'delayed sucess!'})
    },500);
});

let rejectedPromise = new Promise((resolve,reject) => {
    setTimeout(()=> {
        reject({'error': 'delayed exception'})
    }, 500);
});

resolvedPromise.then(res => console.log(res));
rejectedPromise.catch(res => console.log(res));


