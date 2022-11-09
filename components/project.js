import utilityStyles from '../styles/Utilities.module.css'
import sectionStyles from '../components/section.module.css'

export default function Project({title, link, description}) {
    return (
        <p className={sectionStyles['section-text']}>
            <a href={link} className={utilityStyles.link}>{title}</a>
            {description}
        </p>
    )
}