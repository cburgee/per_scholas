import ScoresList from "./ScoresList"
import styles from "./StudentItem.module.css"
export default function StudentItem(props) {
  const { student } = props
  const scores = student.scores
  return (
    <div>
      <ul className={styles.content}>
        <h2>
          Name:
          {student.name}
        </h2>
        <h4>
          Bio:
          {student.bio}
        </h4>
        <ScoresList scores={scores} />
      </ul>
    </div>
  )
}
