import * as React from "react";
import { CSSTransition } from "react-transition-group";

const ANIMATION_DURATION = 1000;

export interface CardProps {
    text: string;
    show: boolean;
    onRemoveCallback?: () => void;
    onRequestRemove?: () => void;
}

export const Card = ({
    text,
    show,
    onRemoveCallback,
    onRequestRemove
}: CardProps) => {
    return (
        <CSSTransition
            classNames="card"
            in={ show }
            appear
            timeout={ ANIMATION_DURATION }
            onExited={ onRemoveCallback }
        >
            <div className="card">
                <a
                    className="remove-btn"
                    onClick={ show && onRequestRemove }
                />

                <div className="content">
                    { text }
                </div>
            </div>
        </CSSTransition>
    );
};
