import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Button from './components/Button';
import ListItem from './components/ListItem';
import EditItem from './components/EditItem';
import './App.css';


class App extends React.Component {

  state = {
    inputValue: '',
    items: [],
    edit:false,
    editItemValue: '',
    editItemId: ''
  }

  
  onInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  onEditInputChange = (event) => {
    this.setState({editItemValue:event.target.value})
  }

  addItem = () => {
    const { inputValue,items} = this.state;
    if (inputValue) {
      this.setState({ items: [...items,{value:inputValue,id:uuidv4(),checked:false}], inputValue: '' });
    }

  }

  editItem = () => {
    const {editItemValue,items,editItemId} = this.state;
   if(editItemValue) {
    for(let item of items ){
      if (editItemId === item.id) {
       item.value = editItemValue
      }
    }
   }
    this.setState({items:[...items],edit:false})
  }

  editItemEnter = (event) => {
    if (event.charCode === 13) {
      this.editItem()
    }
  }

  addItemEnter = (event) => {
    if (event.charCode === 13) {
      this.addItem()
    }
  }

  closeEditPopUp =() => {
    this.setState({edit:false})
  }

  onRemoveButton = (itemId) => {
    const {items} = this.state
    const cloneItems = [...items]
    const itemIndex = cloneItems.findIndex((item) => item.id === itemId)
    cloneItems.splice(itemIndex,1)
    this.setState({items:cloneItems})
  }

  onEdit = (itemId) => {
    let {items,edit,editItemValue,editItemId} = this.state
      items.filter((item) => {
        if(item.id === itemId) {
           edit = true;
           editItemValue = item.value;
           editItemId = item.id
        } 
    }) 
  this.setState({items:[...items],edit:edit,editItemValue:editItemValue,editItemId:editItemId})
  }

  onCheck = (itemId) => {
    const {items} = this.state
      items.filter((item) => {
        if(item.id === itemId && item.checked === false) {
            item.checked = true;
        } else  if(item.id === itemId && item.checked === true){
          item.checked = false
        }


    }) 
  this.setState({items:[...items]})
  }

  render() {
    const {items,edit,editItemValue,editItemId} = this.state
    return (
      <div className="container">
        <div className="header">
          <p className="title">My ToDo List</p>
          <div className="wrapper">
            <input type="text" className="input"
              value={this.state.inputValue}
              onKeyPress={this.addItemEnter}
              onChange={this.onInputChange} />
            <Button text='Add Item' className='addItemBtn' onClick={this.addItem} />
          </div>
        </div>
        <ul className={edit ? 'listWrapper listOpacity' : 'listWrapper'} >
          {items.map((item) => {
            return <ListItem 
                      key={item.id} 
                      data={item}
                      editStatus = {edit}
                      onRemove={this.onRemoveButton} 
                      onCheckItem={this.onCheck} 
                      onEditButton={this.onEdit}/>
          })}
        </ul>
          <EditItem 
          data={edit}
          text={editItemValue} 
          itemId={editItemId} 
          onClickEdit={this.editItem} 
          onChange={this.onEditInputChange}
          onEditItemEnter={this.editItemEnter}
          onClosePopUp={this.closeEditPopUp}/>
      </div>
    )
  }
}

export default App;
