import * as React from "react";
import { Card, CardProps } from "./card";

interface CardListState {
    cards: CardProps[];
}

export class CardList extends React.Component<{}, CardListState> {

    constructor(props: any) {
        super(props);

        this.state = {
            cards: []
        };
    }

    render() {
        const { cards } = this.state;

        return (
            <div className="card-list">
                <button onClick={ this.addCard }>Add</button>
                {
                    cards.map((props) => <Card { ...props } />)
                }
            </div>
        )
    }

    addCard = () => {
        this.setState({
            cards: this.state.cards.concat({
                text: "New card"
            })
        })
    }
}
