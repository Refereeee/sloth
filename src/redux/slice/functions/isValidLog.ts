const isValidLog = (users:any,pay:string) =>{
    return  users.every((elem:any)=> {
            const arr =  elem.split(' ')
            const payload = pay.split(' ')
            return arr[0] !== payload[0]
        }
    )
}

export default isValidLog;