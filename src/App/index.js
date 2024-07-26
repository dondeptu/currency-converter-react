import Form from "./Form";
import "./App.css";
import { Clock } from "./Clock";

function App() {
    return (
        <div className="app">
            <header>
                <h1 className="app__header">Kalkulator walut</h1>
            </header>
            <main>
                <Clock />
                <Form />
            </main>
        </div>
    );
}

export default App;