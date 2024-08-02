import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

export const Clock = () => {
    const date = useCurrentDate();

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