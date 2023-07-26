function Header() {
    return (
        <header className="main-header">
            <div className="header-nav-container">
                <img className="header-logo" src="./icon.svg" alt="main-logo" />
                <nav className="main-nav">
                    <ul>
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Réalisations</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <a href="" className="user-btn"><img src="./user.png" alt="user-img" /></a>
            
        </header>
    )
}

export default Header