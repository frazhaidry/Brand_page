import "./App.css";

const App = () => {
    return <div>
        <nav className="nav">
            <div className="Logo"> 
            <img src="/images/brand_logo.png"></img>
            </div>

            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>

            <button>Login</button>
        </nav>
    </div>
};

export default App;