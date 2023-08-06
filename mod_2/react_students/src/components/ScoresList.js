import ScoresItem from "./ScoresItem"
export default function ScoresList(props) {
  const { scores } = props
  return (
    <div>
      <ul>
        {scores.map((score) => (
          <ScoresItem key={score.date} score={score} />
        ))}
      </ul>
    </div>
  )
}
