import { useEffect, useState } from "react";
import "./style.css";

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        };
    }, []);

    return (
        <div className="clock">
            Dzisiaj jest{" "}
            {date.toLocaleDateString(
                undefined,
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                },
            )}
        </div>
    )
};