import React from "react";
import reactDom from "react-dom";
import ComponentDetail from "./ComponentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <ComponentDetail author="Mohammad"
                time="Today at 4:45PM"
                content="Norway is beautiful"  />
            </ApprovalCard>

            <ApprovalCard>
                <ComponentDetail author="Dan"
                time={faker.address.timeZone()}
                content="Stavager is Nice"   />
            </ApprovalCard>

            <ApprovalCard>
                <ComponentDetail author="Mette"
                time="Friday at 9:05PM"
                content={ faker.address.city() + " is good"}   />
            </ApprovalCard>
           

        </div>
    );
}

reactDom.render(<App />, document.querySelector('#root'));
