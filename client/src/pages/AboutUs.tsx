function AboutUs() {
  return (
    <div className="card">
      <h1>About Us</h1>

      <p>
        Mystery Room is an interactive mystery-solving game where players
        investigate cases, examine clues, use hints, and submit answers to
        uncover the truth. Each mystery is divided into stages, and solving a
        stage unlocks the next one. The goal is to solve the case step by step
        and reveal the complete story.
      </p>

      <h2>Main Features</h2>

      <ul>
        <li>Investigate mysteries through different stages.</li>
        <li>Use up to two hints when you get stuck.</li>
        <li>Solve clues and submit answers to progress.</li>
        <li>Reveal the complete story after solving the mystery.</li>
      </ul>

      <h2>Our Team</h2>

      <div className="team-grid">
        <div className="team-member">Esmaeel Mahfoud</div>
        <div className="team-member">Rami Alshaar</div>
        <div className="team-member">Mustafa Alshaar</div>
        <div className="team-member">Fadi Habil</div>
        <div className="team-member">Tayma Watfa</div>
        <div className="team-member">Allaith Aissa</div>
      </div>

      <p className="team-message">
        Every clue brings you one step closer to the truth.
      </p>
    </div>
  );
}

export default AboutUs;
