/* eslint-disable react/no-array-index-key */
import React from 'react';

const SessionForm = ({
  tracks,
  skillLevels,
  formValues,
  setFormValue,
  speakerCount,
  addSpeaker,
  removeSpeaker,
}) => {
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
        <select id="track" onBlur={saveValue} required>
          <option value="">-- Select track --</option>
          {tracks.map(track =>
            (<option
              key={track.id}
              value={track.id}
              selected={formValues.track === track.id}
            >
              {track.name}
            </option>),
          )}
        </select>
      </div>
      <div>
        <label htmlFor="skillLevel">Skill level</label>
        <select id="skillLevel" onBlur={saveValue} required>
          <option value="">-- Select skill level --</option>
          {skillLevels.map(skillLevel =>
            (<option
              key={skillLevel.id}
              value={skillLevel.id}
              selected={formValues.skillLevel === skillLevel.id}
            >
              {skillLevel.name}
            </option>),
          )}
        </select>
      </div>
      <fieldset>
        <legend>Speakers</legend>
        {Array(speakerCount).fill(0).map((val, index) =>
          (<div key={index}>
            <label htmlFor={`speakerName${index + 1}`}>Name</label>
            <input
              type="text"
              id={`speakerName${index + 1}`}
              value={formValues[`speakerName${index + 1}`]}
              onChange={saveValue}
              required
            />
          </div>),
        )}
        <button type="button" onClick={addSpeaker}>
          Add speaker
        </button>
        <button type="button" onClick={removeSpeaker}>
          Remove speaker
        </button>
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
