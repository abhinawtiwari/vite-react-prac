import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map(item => (
                    <li className="list-group-item">{item}</li>
                ))}
            </ul>
        </>
        )
}

export default ListGroup;