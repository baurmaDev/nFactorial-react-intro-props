import './Header.css'
const Header = ({userName, changePage}) => {

    return (
        <header>
            <nav>
                <div onClick={() => changePage('profile')}>
                    Profile {userName ? `of ${userName}` : ''}
                </div>
                <div onClick={() => changePage('about')}>
                    About
                </div>
            </nav>
        </header>
    )
}
export default Header;