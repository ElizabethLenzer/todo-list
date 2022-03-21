import React, { useState } from 'react';

const Input = (props) => {
    const { List, SetList } = props;

    const [Input, SetInput] = useState("");

    const onChange = e => {
        SetInput(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        let Task = {
            Name: Input,
            isComplete: false,
        };

        SetList([...List, Task]);
        e.target.value = "";
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={onChange} type="text" name="Task" value={Input} />
            <button>Add Task</button>
        </form>
    );
}

export default Input;