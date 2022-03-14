import React from "react";
import Button from "./Button";

class Header extends React.Component {

    state = {
        inputValue: '',
    }

    inputOnChange = (event) => {
        this.setState((st) => {
           return {inputValue: st.inputValue}
        })
    }

    render(){
        return (
            <div className="header">
            <p className="title">My To Do List</p>
            <div className="wrapper">
                <input type="text" className="input" 
                value={this.state.inputValue} 
                onChange={this.inputOnChange}/>
                <Button text='Add Item' className='addBtn' />
            </div>
        </div>
        )
    }
}

export default Header;