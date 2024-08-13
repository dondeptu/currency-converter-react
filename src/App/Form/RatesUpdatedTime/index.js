import { Wrapper } from "./styled";

export const RatesUpdatedTime = ({ ratesData }) => {
    const date = new Date(ratesData.date);

    return (
        <Wrapper>
            Kursy walut na dzień{" "}
            {date.toLocaleDateString(
                undefined,
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                },
            )}
        </Wrapper>
    )
};