import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getMystery } from '../api';
import type { Mystery } from '../types';
import LoadingMessage from '../components/LoadingMessage';
import ErrorMessage from '../components/ErrorMessage';

function Result() {
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const [mystery, setMystery] = useState<Mystery | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function load() {
    setIsLoading(true);
    setHasError(false);

    try {
      const m = await getMystery(id);

      if (!m.solved) {
        navigate(`/mysteries/${id}`, { replace: true });
        return;
      }

      setMystery(m);
      setIsLoading(false);
    } catch {
      setHasError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  if (isLoading) {
    return <LoadingMessage label="Opening the sealed report..." />;
  }

  if (hasError) {
    return (
      <ErrorMessage
        message="We could not load the result. Please check your connection and try again."
        onRetry={load}
      />
    );
  }

  if (!mystery) return null;

  return (
    <div className="card reveal">
      <p className="eyebrow">Mystery closed</p>
      <h1>{mystery.title}</h1>
      <p className="story">{mystery.reveal}</p>
      <div className="row center">
        <Link className="btn ghost" to="/mysteries">All Mysteries</Link>
      </div>
    </div>
  );
}

export default Result;