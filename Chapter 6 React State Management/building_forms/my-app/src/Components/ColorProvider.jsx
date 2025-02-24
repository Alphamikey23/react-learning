import React, { createContext, useState } from "react";
import colorData from "../data/color-data.json";

const ColorContext = createContext();

export default function ColorProvider ( { childern }) {
    const [colors, setColors] = useState(colorData);

    const addColor = (title, color) =>
        setColors([...colors, {
            id: v4(),
            rating: 0,
            title,
            color
        }]);

        const rateColor = (id, rating) =>
            setColors(
                colors.map(color => (color.id === id ? { ...color, rating} : color))
            );

            const removeColor = id => setColors(colors.filter(color => color.id !== id));


    return (
        <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor, setColors}}>
            {childern}
        </ColorContext.Provider>
    );
}