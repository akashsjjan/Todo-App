import React from 'react'

function comp2(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="well" key={item.key} style={item.comp ? completedStyle: null}>
                <input 
                type="checkbox" 
                checked={item.comp} 
                onChange={() => props.checkBoxChange(item.key)} 
                />

                {item.text}
                <button className="close" type="button" aria-label="Close" onClick={() => props.deleteItem(item.key)}>
                    <span aria-hidden="true">&times;</span>
                </button>

            </div>
        )
    })
    return (
        <div className="contectx">
            {listItems}
        </div>
    )
}

export default comp2

