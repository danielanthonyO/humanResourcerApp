


// Component
const Header = (props) => {
return (
        <header className="header">
            <h2 className="logo">{props.logo}</h2>
            <nav>
                <a href="#">Contact</a>
            </nav>
        </header>
)
};

export default Header;