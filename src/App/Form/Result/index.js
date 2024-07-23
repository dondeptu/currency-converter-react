import "./style.css";

const Result = ({ result }) => (
    <p className="result">
        Wynik:&nbsp;
        {result && (
            <>
                <span className="result__outAmount">{(+result).toFixed(2)}</span>
                &nbsp;PLN
            </>
        )}
    </p>
);

export default Result;