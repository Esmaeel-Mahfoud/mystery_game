import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getClues, getMystery, requestHint, submitAnswer } from '../api';
import type { Clue, Mystery } from '../types';
import LoadingMessage from '../components/LoadingMessage';
import ErrorMessage from '../components/ErrorMessage';
import ProgressDots from '../components/ProgressDots';
import ClueCard from '../components/ClueCard';
import HintBox from '../components/HintBox';
import AnswerForm from '../components/AnswerForm';

export default function Play() {
  const { id = '' } = useParams();
  const navigate = useNavigate();

  const [mystery, setMystery] = useState<Mystery | null>(null);
  const [clues, setClues] = useState<Clue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; text: string } | null>(null);

  async function load() {
    setIsLoading(true);
    setHasError(false);
    setErrorMessage("");
    try {
      const m = await getMystery(id);

      if (m.solved) {
        navigate(`/mysteries/${id}/result`, { replace: true });
        return;
      }

      const c = await getClues(id);
      setMystery(m);
      setClues(c);
      setIsLoading(false);
    } catch (err) {
      setHasError(true);
      setErrorMessage(
          err instanceof Error
              ? err.message
              : "We could not load this mystery.",
      );
      setIsLoading(false);
    }
  }

  useEffect(() => {
    load();
    
  }, []);

  async function handleSubmit(answer: string) {
    setSubmitting(true);
    setFeedback(null);
    try {
      const result = await submitAnswer(id, answer);
      if (result.correct) {
        if (result.solved) {
          navigate(`/mysteries/${id}/result`);
          return;
        }
        setFeedback({ ok: true, text: result.message });
        await load();
      } else {
        setFeedback({ ok: false, text: result.message });
      }
    } catch (err) {
      setFeedback({ ok: false, text: (err as Error).message });
    } finally {
      setSubmitting(false);
    }
  }

  async function handleHint() {
    setFeedback(null);
    try {
      await requestHint(id);
      await load();
    } catch (err) {
      setFeedback({ ok: false, text: (err as Error).message });
    }
  }

  if (isLoading && !mystery) {
    return <LoadingMessage label="Loading mystery..." />;
  }

  if (hasError) {
    return (
      <ErrorMessage
          message={
              errorMessage ||
              "We could not load this mystery. Please check your connection and try again."
          }
        onRetry={load}
      />
    );
  }

  if (!mystery || mystery.solved) return null;

  const currentStage = mystery.currentStage;

  return (
    <div>
      <Link to="/mysteries" className="back-link">← All mysteries</Link>
      <h1>{mystery.title}</h1>
      <p className="story">{mystery.intro}</p>

      <p className="stage-label">
        Stage {currentStage + 1} of {mystery.totalStages}
      </p>
      <ProgressDots current={currentStage + 1} total={mystery.totalStages} />

      <h2>Clues</h2>
      <div className="clue-list">
        {clues.map((c) => (
          <ClueCard key={c.id} clue={c} />
        ))}
      </div>

      <div className="card question">
        <h2>{mystery.question}</h2>

        <AnswerForm
          key={currentStage}
          submitting={submitting}
          feedback={feedback}
          onSubmit={handleSubmit}
        />

        <HintBox
      hints={mystery.hints}
      remaining={mystery.hintsTotal - mystery.hintsUsed}
      onRequest={handleHint}
      />
      </div>
    </div>
  );
}