
function login(data) {
  console.log(data)
  return new Promise( (resolve,reject) => {
    setTimeout( () => {
      console.log(data)
      if (data.username === 'a') {
        resolve({id: 'a', name: 'jerry'})
      } else {
        reject('用户名或密码错误')
      }        
    }, 1000)
  })
}

export {login}