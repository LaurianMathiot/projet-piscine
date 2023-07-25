function Header() {
    return (
        <header className="main-header">
            <div className="header-container">
                <div className="logo-container">
                    <img src="" alt="main-logo" />
                </div>
                <nav className="main-nav">
                    <ul>
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Portfolio</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="" className="user-btn"><img src="./user.png" alt="user-img" /></a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    )
}

export default Header