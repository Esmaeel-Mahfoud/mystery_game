import { Link } from 'react-router-dom';
import type { MysterySummary } from '../types';

type MesteryCardProps = {
  mystery: MysterySummary;
};

 function MesteryCard({ mystery }: MesteryCardProps) {
     return (
         <article className="card case">
             <h2>{mystery.title}</h2>

             <p>{mystery.tagline}</p>

             <span className="badge">
      {mystery.isLocked
          ? "Locked"
          : mystery.solved
              ? "Solved"
              : "Not Solved"}
    </span>

             {mystery.isLocked ? (
                 <>
                     <button className="btn locked-btn" disabled>
                         Locked
                     </button>

                     <small className="locked-text">
                         Solve the previous mystery first.
                     </small>
                 </>
             ) : (
                 <Link to={`/mysteries/${mystery.id}`} className="btn">
                     {mystery.solved ? "View result" : "Investigate"}
                 </Link>
             )}
         </article>
     );

 }
export default MesteryCard;