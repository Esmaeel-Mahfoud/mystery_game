import type { MysterySummary } from '../types';
import MesteryCard from './MesteryCard';

type MesteriesListProps = {
  mysteries: MysterySummary[];
};
 function MesteriesList({ mysteries }: MesteriesListProps) {
  if (mysteries.length === 0) {
    return (
      <div className="card center">
        <p className="muted">No mystery files yet. The lighthouse is quiet tonight.</p>
      </div>
    );
  }

  return (
    <div className="grid">
      {mysteries.map((m) => (
        <MesteryCard key={m.id} mystery={m} />
      ))}
    </div>
  );
}
export default MesteriesList;