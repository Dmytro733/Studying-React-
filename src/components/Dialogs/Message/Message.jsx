import style from "./../Dialogs.module.css";
import React from "react";

const MessageItem = (props) => {
  return (
    <div className={style.message}>
      <div className={style.typing_active}>typing...</div>
      <div className={style.text}>{props.message}</div>
    </div>
  )
}

export default MessageItem;