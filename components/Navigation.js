import Link from 'next/link'

export default function Navigation() {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><Link href="/" className="navigation__link">home</Link></li>
                    <li className="navigation__item"><Link href="/about" className="navigation__link">about</Link></li>
                    <li className="navigation__item"><Link href="/posts" className="navigation__link">blog</Link></li>
                    <li className="navigation__item"><Link href="/cv" className="navigation__link">cv</Link></li>
                    <li className="navigation__item"><Link href="/contact" className="navigation__link">contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
