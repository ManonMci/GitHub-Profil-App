import './styles/Mode.css';
import moon from '../assets/icon-moon.svg';
//import { ThemeProvider } from './ThemeContext';

function Mode(){
    const onClick = {
    }
    
    return (
        <div className="devFinder">
            <p>devfinder</p>
            <div className="Dark-mode">
                <button className="dark-button">D A R K</button>
                <img className="img-moon" src={moon}/>
            </div>
        </div>
    );
}

export default Mode;