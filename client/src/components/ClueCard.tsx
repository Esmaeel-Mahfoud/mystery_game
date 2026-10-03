import type { Clue } from '../types';

type ClueCardProps = {
  clue: Clue;
};

function ClueCard({ clue }: ClueCardProps) {
  return (
    <div className="card clue">
      <h3>{clue.title}</h3>
      <p>{clue.text}</p>
    </div>
  );
}
export default ClueCard;