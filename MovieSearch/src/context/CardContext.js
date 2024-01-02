import React from "react";

const CardContext=React.createContext({
    items : [],
    addItem : () => {},
    remItem : () =>{}
});

export default CardContext;