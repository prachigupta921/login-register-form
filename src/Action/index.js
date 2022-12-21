export const addEvent=(data,desp,age,opt)=>{
    return{
        type:"ADDEVENT",
        payload:{
            id:new Date().getTime().toString(),
            data:data,
            desp:desp,
            age:age,
            opt:opt
        }
    }
}

