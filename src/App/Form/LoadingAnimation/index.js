import { Square } from "./styled";
import { useState, useEffect } from "react";

export const LoadingAnimation = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation(prevRotation => prevRotation + 90);
        }, 500);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return(
        <Square $rotation={rotation}/>
    );
};