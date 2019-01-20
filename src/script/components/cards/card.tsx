import * as React from "react";

export interface CardProps {
    text: string;
}

export const Card = ({
    text
}: CardProps) => {
    return (
        <div className="card">
            { text }
        </div>
    )
};
