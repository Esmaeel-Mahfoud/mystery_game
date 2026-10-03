import { Link } from 'react-router-dom';

export default function Home() {
  return (
   <div className="hero">
  <h1>Mystery Room</h1>
  <p className="lead">
    Pick a case. Read the evidence. Submit what you think is true.
    Every wrong guess is just another clue.
  </p>
  <div className="row center">
    <Link className="btn" to="/mysteries">Open case files</Link>
    <Link className="btn ghost" to="/how-to-play">How to play</Link>
  </div>
</div>
  );
}
