import React from "react";

const Team = () => {
  return (
    <main className="team">
      <section>
        <h1>Our Team</h1>
        <div className="team-member">
          <img src="placeholder-image-url" alt="Managing Director" />
          <div>
            <h2>Engr. Segun Falodun</h2>
            <p>Managing Director - Bio description...</p>
          </div>
        </div>

        {/* Repeat the above block for each team member */}
      </section>
    </main>
  );
};

export default Team;
