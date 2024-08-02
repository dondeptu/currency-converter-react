import { OutAmount, Wrapper } from "./styled";

const Result = ({ result }) => (
    <Wrapper>
        Wynik:&nbsp;
        {result && (
            <>
                <OutAmount>{(+result).toFixed(2)}</OutAmount>
                &nbsp;PLN
            </>
        )}
    </Wrapper>
);

export default Result;