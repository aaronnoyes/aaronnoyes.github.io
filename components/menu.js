import Link from 'next/link'
import utilityStyles from '../styles/Utilities.module.css'
import menuStyles from '../components/menu.module.css'

export default function Menu() {
    return (
        <nav className={`${utilityStyles.inverted} ${menuStyles.container}`}>
            <Link className={menuStyles.link} href="/">Home</Link>
            <Link className={menuStyles.link} href="/blog">Blog</Link>
        </nav>
    )
}