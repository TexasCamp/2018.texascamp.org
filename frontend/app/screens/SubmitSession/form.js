import React from 'react';

const SessionForm = ({ tracks, skillLevels }) => {
  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" required />
      </div>
      <div>
        <label htmlFor="track">Track</label>
        <select id="track" required>
          {tracks.map(track =>
            (<option key={track.id}>
              {track.name}
            </option>),
          )}
        </select>
      </div>
      <div>
        <label htmlFor="skillLevel">Skill level</label>
        <select id="skillLevel" required>
          {skillLevels.map(skillLevel =>
            (<option key={skillLevel.id}>
              {skillLevel.name}
            </option>),
          )}
        </select>
      </div>
      <fieldset>
        <legend>Speakers</legend>
        <div>
          <label htmlFor="speakerName">Name</label>
          <input type="text" id="speakerName" />
        </div>
      </fieldset>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea id="desc" required />
      </div>
      <div>
        <label htmlFor="bio">Speakers bio</label>
        <textarea id="bio" required />
      </div>
      <fieldset>
        <legend>Contact information</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" id="company" />
        </div>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SessionForm;
