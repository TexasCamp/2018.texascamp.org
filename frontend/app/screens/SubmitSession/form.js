import React from 'react';

const SessionForm = ({ tracks, skillLevels, formValues, setFormValue }) => {
  const saveValue = event => {
    setFormValue(event.target.id, event.target.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={formValues.title}
          onChange={saveValue}
          required
        />
      </div>
      <div>
        <label htmlFor="track">Track</label>
        <select id="track" value={formValues.track} onBlur={saveValue} required>
          <option value="">-- Select track --</option>
          {tracks.map(track =>
            (<option key={track.id}>
              {track.name}
            </option>),
          )}
        </select>
      </div>
      <div>
        <label htmlFor="skillLevel">Skill level</label>
        <select
          id="skillLevel"
          value={formValues.skillLevel}
          onBlur={saveValue}
          required
        >
          <option value="">-- Select skill level --</option>
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
          <input
            type="text"
            id="speakerName"
            value={formValues.speakerName}
            onChange={saveValue}
          />
        </div>
      </fieldset>
      <div>
        <label htmlFor="desc">Description</label>
        <textarea
          id="desc"
          value={formValues.desc}
          onChange={saveValue}
          required
        />
      </div>
      <div>
        <label htmlFor="bio">Speakers bio</label>
        <textarea
          id="bio"
          value={formValues.bio}
          onChange={saveValue}
          required
        />
      </div>
      <fieldset>
        <legend>Contact information</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formValues.name}
            onChange={saveValue}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formValues.email}
            onChange={saveValue}
            required
          />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            value={formValues.company}
            onChange={saveValue}
          />
        </div>
      </fieldset>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SessionForm;
