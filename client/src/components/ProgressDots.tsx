type ProgressDotsProps = {
  current: number;
  total: number;
};

function ProgressDots({ current, total }: ProgressDotsProps) {
  const dots = [];

  for (let i = 1; i <= total; i++) {
    let cls = 'dot';
    if (i < current) cls = 'dot done';
    if (i === current) cls = 'dot now';
    dots.push(<span key={i} className={cls} />);
  }

  return (
    <div className="progress">
      {dots}
      
    </div>
  );
}

export default ProgressDots;