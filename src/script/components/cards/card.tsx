import * as React from "react";
import { CSSTransition } from "react-transition-group";

const ANIMATION_DURATION = 5000;

export interface CardProps {
    text: string;
}

export const Card = ({
    text
}: CardProps) => {
    return (
        <CSSTransition
            in={ true }
            appear
            classNames="card"
            timeout={ ANIMATION_DURATION }

            onExiting={ () => console.log("exiting...") }
            onExited={ () => console.log("exited.") }
        >
            <div className="card">
                { text }
            </div>
        </CSSTransition>
    )
};
