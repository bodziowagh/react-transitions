import React from "react";
import { CardList } from "./components/cards/card-list";

export class App extends React.Component<{}> {

    render() {
        return (
            <div className="layout">
                <CardList />
            </div>
        );
    }
}
