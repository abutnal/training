
// CALL BACK------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const first = (value,callback)=>{
   let total = value + 2;
   		return callback(total)
}

const second =(value, callback)=>{
	let total = value + 2;
	return callback(total)
}

const third =(value, callback)=>{
	let total = value + 2;
	return callback(total)
}
first(2, (firstResult, err)=>{
	 if(err) throw err
			second(firstResult,(secondResult,err)=>{
				if(err) throw err
					third(secondResult, (thirdResult,err)=>{
						if(err) throw err
							console.log('Final Result with callback',thirdResult)
					})
			})
})





// PROMISES ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const first_method = (value)=>{
	return value + 2;
}
const second_method = (value)=>{
	return value + 2;
}
const third_method = (value)=>{
	return value + 2;
}

let promise = new Promise((resolve,reject)=>{
	if(true){
	resolve(2);
	}else{
	reject(false)
	}
})

promise
.then(first_method)
.then(second_method)
.then(third_method)
.then(res=>{
	console.log('Final Result with Promise',res)
}).catch(err=>{
	console.log(err)
})




//ASYNC
const first_async = ()=>{
  var promise = new Promise((resolve, reject)=>{
	if(true){
		setTimeout(()=>{
           console.log('users');
           fetch('https://jsonplaceholder.typicode.com/users')
           .then(res=>res.json())
           .then(data=>{
           	resolve(data);
           })
           
		},3000)
	}
	else{
		reject('Err: someting went wrong in first api call');
	}
  });
  return promise;
}


const second_async = ()=>{
  var promise = new Promise((resolve, reject)=>{
	if(true){
		setTimeout(()=>{
           console.log('photos');
           fetch('https://jsonplaceholder.typicode.com/photos')
           .then(res=>res.json())
           .then(data=>{
           	resolve(data);
           })
           
		},500)
	}
	else{
		reject('Err: someting went wrong in first api call');
	}
  });
  return promise;
}


// ASYNC AND AWAIT--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const result = async () =>{
	try{
		await 
		  first_async().then(res=>{ console.log('API users result:',res)})
		  second_async().then(res=>{ console.log('API Photo result:',res)})
	}catch(err){
		  console.log(err);
	}
}
result();


