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

        console.log(cards)

        return (
            <div className="card-list">
                <div>
                    <a className="add-btn" onClick={ this.addCard } />
                </div>
                {
                    cards.map((props, i) => (
                        <Card
                            { ...props }
                            onRemoveCallback={ this.removeCard(i) }
                            onRequestRemove={ this.handleRemoveClick(i) }
                        />
                    ))
                }
            </div>
        )
    }

    addCard = () => {
        const { cards } = this.state;

        this.setState({
            cards: cards.concat({
                text: `Card no. ${ cards.length }`,
                show: true
            })
        })
    }

    handleRemoveClick = (i: number) => () => {
        const { cards } = this.state;

        cards[i].show = false;

        this.setState({
            cards
        });
    }

    removeCard = (i: number) => () => {
        const { cards } = this.state;

        this.setState({
            cards: cards.filter((card, index) => index !== i)
        });
    }
}
