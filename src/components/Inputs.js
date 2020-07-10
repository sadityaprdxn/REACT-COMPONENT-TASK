import React from 'react';

const Input = ({id, type, passValue, value}) => {

    return (
        <div className="form-group">
            {
                type == 'textarea' ? 
                (<textarea id={id}  placeholder={`ENTER THE ${id.toUpperCase()} HERE`} value={value} onChange={(e) => passValue(e.target.value, id)} />) : 
                (<input id={id} type={type}  placeholder={`ENTER THE ${id.toUpperCase()} HERE`} value={value} onChange={(e) => passValue(e.target.value, id)} />)
            }
            
        </div>
    );
  
}

export default Input;
