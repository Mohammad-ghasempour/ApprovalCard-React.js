import React from "react";
import ComponentDetail from "./componentDetail";

const ApprovalCard = props => {
    console.log(props.children);
    return (
        <div className="ui card">
        <div className="content">{props.children}</div>
        <div className="ui two buttons">  
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Recect</div>
        </div>
        </div >
    );
};

export default ApprovalCard;