type HintBoxProps = {
  hints: string[];
  remaining: number;
  onRequest: () => void;
};

function HintBox({ hints, remaining, onRequest }: HintBoxProps) {
  return (
    <>
      {hints.map((h, i) => (
        <p key={i} className="hint">
          Hint {i + 1}: {h}
        </p>
      ))}
      <button
        className="btn ghost"
        onClick={onRequest}
        disabled={remaining === 0}
      >
        {remaining === 0 ? 'No hints left' : `Ask for a hint (${remaining} left)`}
      </button>
    </>
  );
}

export default HintBox;