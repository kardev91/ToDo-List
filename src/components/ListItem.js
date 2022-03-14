import React from "react";

class ListItem extends React.Component {
    render(){
        const {data,onRemove,onCheckItem,onEditButton,editStatus} = this.props
        return(
            <li className={data.checked ? 'doneItem' : ''} 
            onClick={()=>onCheckItem(data.id)}> {data.value} 
           <div><span hidden={!data.checked ? true : false}>&#10003;</span></div> 
            <button 
                className="deleteItemBtn"
                onClick={(e)=>{onRemove(data.id); e.stopPropagation()}}>Remove
            </button>
            <button 
                className="editItemBtn" 
                disabled={!data.checked && !editStatus ? false : true}
                onClick={(e)=>{onEditButton(data.id); e.stopPropagation()}} >Edit
            </button>
            </li>
        )
    } 
}


export default ListItem

