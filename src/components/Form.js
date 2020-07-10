import React, { useState } from 'react';
import Input from './Inputs';

const Form = () => {


    const [values, setValues] = useState({firstname: '', lastname: '', message: ''})
    const [isShow, setShow] = useState({show: false})

    const inputs = [{
        id: 'firstname',
        type: 'text'
    },{
        id: 'lastname',
        type: 'text'
    },{
        id: 'message',
        type: 'textarea'
    }]

    const updateValues = (value, id) => {
        setValues((prevState)=> {
            return ({
                ...prevState,
                [id]: value
            })
        })
    } 

    const showUser = (e) => {
        e.preventDefault();
        setShow({
            ...values,
            show: true
        });
    }

    return (
        <section className="contact">
            <div className="wrapper">
                <form>
                    <h2>do you want to contact ?</h2>
                    {inputs.map(({id, type}, index) => {
                        return (
                        <Input 
                        id = {id}
                        type = {type}
                        value = {values[id]}
                        passValue = {updateValues}
                        key = {index}
                        />
                        )
                    })}
                    <div className="form-controls">
                        <button type="submit" id="submit-task" onClick={showUser}>add</button>
                    </div>
                </form>

                <div className={isShow.show ? ("result active") : ("result")}>
                    <span>{`hello buddies i'm ${isShow.firstname} ${isShow.lastname}`}</span>
                    <p>{isShow.message}</p>
                </div>  
            </div>
        </section>
    );
}

export default Form;
