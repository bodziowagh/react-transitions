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
                    cards.map((props, i) => (
                        <div>
                            <button onClick={ () => this.removeCard(i) } >x</button>
                            <Card { ...props } />
                        </div>
                    ))
                }
            </div>
        )
    }

    addCard = () => {
        const { cards } = this.state;

        this.setState({
            cards: this.state.cards.concat({
                text: `Card no. ${ cards.length }`
            })
        })
    }

    removeCard = (i: number) => {
        const { cards } = this.state;

        this.setState({
            cards: cards.filter((card, index) => index !== i)
        });
    }
}
