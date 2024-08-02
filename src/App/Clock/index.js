import { useEffect, useState } from "react";
import { StyledClock } from "./styled";

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
        <StyledClock>
            Dzisiaj jest{" "}
            {date.toLocaleDateString(
                undefined,
                {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                },
            )}
        </StyledClock>
    )
};