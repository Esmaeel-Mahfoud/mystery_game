import { useEffect, useState } from "react";
import { getMysteries } from "../api";
import type { MysterySummary } from "../types";
import CaseList from "../components/MesteriesList";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrorMessage";

function Mysteries() {
  const [mysteries, setMysteries] = useState<MysterySummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  async function loadMysteries() {
    setIsLoading(true);
    setHasError(false);

    try {
      const data = await getMysteries();
      setMysteries(data);
      setIsLoading(false);
    } catch {
      setHasError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadMysteries();
  }, []);

  if (isLoading) {
   return <LoadingMessage label="Loading mysteries..." />;
  }

  if (hasError) {
    return (
      <ErrorMessage
        message="We could not load the mysteries. Please check your connection and try again."
        onRetry={loadMysteries}
      />
    );
  }

  return (
    <div>
      <h1>Mystery Room</h1>
      <p className="lead">
        Pick a case. Read the evidence. Submit what you think is true.
        Every wrong guess is just another clue.
      </p>
      <CaseList mysteries={mysteries} />
    </div>
  );
}

export default Mysteries;