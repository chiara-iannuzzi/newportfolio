import ButtonDarkMode from "./ButtonDarkMode"

const Header = () => {
    return (
        <header className="header container fixed z-10 flex justify-between p-2 border-fuchsia-200 dark:border-fuchsia-900 border-2 rounded-md">
            <p>Chiara</p>
            <nav>
                <ul className="flex gap-2">
                    <li>App</li>
                    <li>App</li>
                    <li>App</li>
                </ul>
            </nav>
            <ButtonDarkMode/>
        </header>
    )
}

export default Header