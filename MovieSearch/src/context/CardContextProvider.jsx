import React,{useReducer} from 'react'
import CardContext from './CardContext'


const reducer=(state,action)=>{

if(action.type=="add"){
    return {items:state.items.concat(action.item)};
}
if(action.type=="remove"){
 
const filterItems=state.items.filter(item=>action.id!==item.imdbID);
// console.log(filterItems);
return {items:filterItems};

}


return {item:[]};
}

function CardContextProvider({children}) {
  
    const [cardState, dispatch] = useReducer(reducer,{items:[]});

const AddItemToList=(curItem)=>{
    dispatch({type:"add",item:curItem});
}
const RemoveItemFromList=(curId)=>{
    dispatch({type:"remove",id:curId});
}

    const obj={
        items:cardState.items,
        addItem:AddItemToList,
        remItem:RemoveItemFromList
    }

    return (
    
     
     <CardContext.Provider value={obj}>
   
 {children}  
   
</CardContext.Provider>
  )
}

export default CardContextProvider