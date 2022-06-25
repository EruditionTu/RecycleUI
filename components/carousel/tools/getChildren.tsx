import * as React from "react"
const getChildren = (children:Array<React.ReactNode>|React.ReactNode, slides:Array<React.ReactNode>):Array<React.ReactNode> => {
    if (!children) {
        if (slides) {
            return slides;
        }
        return [];
    }
    if (Array.isArray(children)) {
        return children;
    }
    return [children];
};

export default getChildren;
