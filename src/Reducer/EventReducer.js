const initialData={
    list:[]
}
const EventReducer=(state=initialData,action)=>{
    switch(action.type){
        case"ADDEVENT":
        const {id, data,desp,age,opt} = action.payload;

        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data,
                    desp:desp,
                    age:age,
                    opt:opt
                }
            ]
        }

        case"Description":
        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data
                }
            ]
        }

        default : return state;

    }
}
export default EventReducer;