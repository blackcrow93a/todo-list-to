import React from "react";
import styles from "./TodoItem.scss"
import classNames from "classnames";

const cx = classNames.bind(styles);

export default function TodoItem({done,children,onToggle,onRemove}){
    return (
        <div className={cx('todo-item')} onClick={onToggle}>
            <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
            <div className={cx('text',{done})}>{children}</div>
            <div className={cx('delete')} onClick={(e)=>{
                onRemove();
                e.stopPropagation();
            }}>[지우기]</div>
        </div>
    );
};
