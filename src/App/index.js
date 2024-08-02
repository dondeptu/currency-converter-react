import Form from "./Form";
import { Header, Wrapper } from "./styled";
import { Clock } from "./Clock";

function App() {
    return (
        <Wrapper>
            <header>
                <Header>Kalkulator walut</Header>
            </header>
            <main>
                <Clock />
                <Form />
            </main>
        </Wrapper>
    );
}

export default App;