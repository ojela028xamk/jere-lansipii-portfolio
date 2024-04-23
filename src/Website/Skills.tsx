import css from './Skills.module.scss'
import { skills } from './content'

const Skills = (): JSX.Element => {
  return (
    <div className={css.skills}>
      <div className={css.skills_content}>
        <h1>Skills</h1>
        <div className={css.skill_items}>
          {skills.map((skill) => (
            <div key={skill.category} className={css.item}>
              <i className={skill.icon}></i>
              <h3>{skill.category}</h3>
              <ul>
                {skill.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
