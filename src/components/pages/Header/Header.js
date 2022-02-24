import logobeeteller from '../../imgs/logobeeteller.png'
import './Header.css'

function Header () {
    return (<div>
        <div className="header">
            <div className="logo">
                <img src={logobeeteller}/>
            </div>
            <div className="box2">EN</div>
            </div>
        </div>
    )
}

export default Header;