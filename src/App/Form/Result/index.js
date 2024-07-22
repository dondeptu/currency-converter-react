import "./style.css";

const Result = ({ result }) => {
    const resultToDisplay = +result;

    return (
        <p className="result">
            Wynik:&nbsp;
            {result !== undefined && (
                <>
                    <span className="result__outAmount">{resultToDisplay.toFixed(2)}</span>
                    &nbsp;PLN
                </>
            )}
        </p>
    );
};

export default Result;