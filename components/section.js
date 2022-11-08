import utilityStyles from '../styles/Utilities.module.css'
import sectionStyles from '../components/section.module.css'

export default function Section({title, inverted, children}) {
    return(
        <section className={`${inverted && utilityStyles['inverted']} ${sectionStyles['section-container']}`}>
          <h2 className={sectionStyles['section-header']}>{title}</h2>
          <div className={sectionStyles['section-content']}>
            {children}
          </div>
        </section>
    )
}