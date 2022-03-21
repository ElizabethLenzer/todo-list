import React from 'react';

const Task = (props) => {
    const { Task, Index, List, SetList } = props;

    const onClick = () => {
        const newList = () => List.filter((Task) => list.indexOf(Task) !== Index);

        SetList(newList);
    };

    const onChange = e => {
        List[Index].isComplete = !List[Index].isComplete;
        SetList([...List]);
    }

    return (
        <div>
            <h4>{Task.name}</h4>
            <div>
                <label
                    style={{ TextDecorationLine: Task.isComplete ? "line-through" : 'none' }}
                    htmlFor="checkbox"
                >
                    Completed?
                </label>
                <input
                    onChange={onChange}
                    type="checkbox"
                    name=""
                    checked={Task.isComplete}
                ></input>
                <button onClick={onClick}> X </button>
            </div>
        </div>
    );
}

export default Task;