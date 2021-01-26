import logo from './logo.svg';
import './App.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <p className="title">
                    WELCOME TO YOUR GIPHY
                </p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <a
                        className="App-link"
                        href="/ironman"
                        rel="noopener noreferrer"
                    >
                        IRON MAN GIPHY
                </a>
                </p>
                <p>
                    <a
                        className="App-link"
                        href="/search"
                        rel="noopener noreferrer"
                    >
                        SEARCH YOUR GIPHY
                </a>
                </p>
            </header>
        </div>
    );
}

export default Home;
