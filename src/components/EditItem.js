import React from "react";

class EditItem extends React.Component {
    render() {
        const {data,text,onClickEdit,onChange,onEditItemEnter,onClosePopUp} = this.props
        return (
            <div className="editMainContenier">
                <div className="editContenier" hidden={!data ? true : false}>
                    <p>Edit Item</p>
                <div>
                    <input
                    type='text' 
                    value={text} 
                    onChange={onChange}
                    onKeyPress={(e) => {onEditItemEnter(e)}} />
                    <button className="editButton" onClick={() => {onClickEdit()}}>Edit Item</button>
                </div>
                <div className="closeBtn"><span className="close" onClick={() => {onClosePopUp()}}>X</span></div>
                </div>
            </div>
        )
    }
}

export default EditItem

