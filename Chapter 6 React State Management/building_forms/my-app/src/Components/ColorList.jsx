import React , { useContext }from "react";
import { ColorContext } from "./"
import Color from "./Color";

export default function ColorList() {
   
    return (
        <ColorContext.Consumer>
        {
            context => {
                if (!context.colors.length)
                    return <div>No Colors Listed. (Add a Color)</div>;
                return(
                    <div className="color-list">
                        {
                            context.colors.map(color =>
                                <Color key={color.id} {...color} />
                            )
                        }
                    </div>
                )
            }
        }
        </ColorContext.Consumer>
    );
}