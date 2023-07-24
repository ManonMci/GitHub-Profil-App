import { useContext } from 'react'
import { ThemeContext } from '../../utils/context/DarkMode'

import "../../components/Header/index.css";
import moon from '../../assets/icon-moon.svg';
import sun from '../../assets/icon-sun.svg';

function Header(){
    const { toggleTheme, theme } = useContext(ThemeContext)

    return (
        <div className="devFinder">
            <p className="p-devFinder">devfinder</p>
            <div className="mode">
                <button 
                    className="mode-button" 
                    onClick= {() => toggleTheme()}>
                        {theme === 'light' ? <p className="dark-button">DARK</p> : <p className="light-button">LIGHT</p> } 
                        {theme === 'light' ? <img className="img-moon" src={moon}/> : <img className="img-sun" src={sun}/> }
                </button>
            </div>
        </div>
    );
}

export default Header;