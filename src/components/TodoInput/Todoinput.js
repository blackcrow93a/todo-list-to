import React from "react";
import styles from "./TodoInput.scss";
import classNames from "classnames";

const cx = classNames.bind(styles);

export default function TodoInput({value,onChange,onInsert}){
    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
           onInsert(); 
        }
    };

    return (
        <div className={cx('todo-input')}>
            <input onChange={onChange} value={value} onKeyPress={handleKeyPress}/>
            <div className={cx('add-button')} onClick={onInsert}>추가</div>
        </div>
    );   
}
