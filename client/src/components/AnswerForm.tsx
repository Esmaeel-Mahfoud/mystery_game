import { FormEvent, useState } from 'react';

type AnswerFormProps = {
  submitting: boolean;
  feedback: { ok: boolean; text: string } | null;
  onSubmit: (answer: string) => void;
};

 function AnswerForm({
  submitting,
  feedback,
  onSubmit,
}: AnswerFormProps) {
  const [answer, setAnswer] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!answer.trim()) return;
    onSubmit(answer);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="row">
        <input
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer..."
          aria-label="Your answer"
          disabled={submitting}
        />
        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? 'Checking...' : 'Submit'}
        </button>
      </form>
      {feedback && (
        <p className={feedback.ok ? 'feedback ok' : 'feedback bad'}>
          {feedback.text}
        </p>
      )}
    </>
  );
}
export default AnswerForm;