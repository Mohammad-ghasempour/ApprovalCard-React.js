import React from "react";
import reactDom from "react-dom";
import ComponentDetail from "./componentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <ComponentDetail author="Mohammad"
                time="Today at 4:45PM"
                content="Norway is beautiful"
                />
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail author="Espen"
                time="Tomorrow at 2:30AM"
                content="Stavager is Nice"
                />
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail author="Jone"
                time="Friday at 9:05PM"
                content="Oslo is big"
                />
            </ApprovalCard>
           






        </div>
    );
}

reactDom.render(<App />, document.querySelector('#root'));
