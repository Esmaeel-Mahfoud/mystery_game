import { Link } from 'react-router-dom';

 function HowToPlay() {
  return (
    <div className="card">
      <h1>How to play</h1>
      <ol className="steps">
        <li>Open the case and read the situation.</li>
        <li>Each stage gives you a few clues. Read all of them carefully.</li>
        <li>Type a short answer (a name, a number, a place) and submit it.</li>
        <li>Wrong answer? Try again. Stuck? Ask for a hint, but you only get two per stage.</li>
        <li>Solve all three stages to see what really happened.</li>
      </ol>
      <p className="muted">Answers are not case sensitive, and extra spaces or punctuation do not matter.</p>
    </div>
  );
}
export default HowToPlay;
