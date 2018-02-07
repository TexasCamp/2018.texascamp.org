/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './styles.css';

const SessionForm = ({
  tracks,
  skillLevels,
  formValues,
  setFormValue,
  speakerCount,
  addSpeaker,
  removeSpeaker,
  saving,
  error,
  onSubmit,
}) => {
  const saveValue = event => {
    setFormValue(event.target.id, event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend>Session</legend>
        <div className={styles.formItem}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={formValues.title}
            onChange={saveValue}
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="track">Track</label>
          <select
            id="track"
            value={formValues.track}
            onChange={saveValue}
            required
          >
            <option value="">-- Select track --</option>
            {tracks.map(track =>
              (<option key={track.id} value={track.id}>
                {track.name}
              </option>),
            )}
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="skillLevel">Skill level</label>
          <select
            id="skillLevel"
            value={formValues.skillLevel}
            onChange={saveValue}
            required
          >
            <option value="">-- Select skill level --</option>
            {skillLevels.map(skillLevel =>
              (<option key={skillLevel.id} value={skillLevel.id}>
                {skillLevel.name}
              </option>),
            )}
          </select>
        </div>
        <div className={styles.formItem}>
          <label htmlFor="desc">Description</label>
          <textarea
            id="desc"
            value={formValues.desc}
            onChange={saveValue}
            required
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Speaker(s)</legend>
        {Array(speakerCount).fill(0).map((val, index) =>
          (<div key={index} className={styles.speaker}>
            <div className={styles.formItem}>
              <label htmlFor={`speakerName${index + 1}`}>Full name</label>
              <input
                type="text"
                id={`speakerName${index + 1}`}
                value={formValues[`speakerName${index + 1}`]}
                onChange={saveValue}
                required
              />
            </div>
            <div className={styles.formItem}>
              <label htmlFor={`speakerBio${index + 1}`}>Bio</label>
              <textarea
                id={`speakerBio${index + 1}`}
                value={formValues[`speakerBio${index + 1}`]}
                onChange={saveValue}
                required
              />
            </div>
          </div>),
        )}
        <button type="button" onClick={addSpeaker}>
          Add speaker
        </button>
        <button type="button" onClick={removeSpeaker}>
          Remove speaker
        </button>
      </fieldset>
      <fieldset>
        <legend>Contact information</legend>
        <div className={styles.formItem}>
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            id="name"
            value={formValues.name}
            onChange={saveValue}
            required
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="company">Company (optional)</label>
          <input
            type="text"
            id="company"
            value={formValues.company}
            onChange={saveValue}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            value={formValues.email}
            onChange={saveValue}
            required
          />
        </div>
      </fieldset>
      <div>
        <input type="submit" value="Submit" disabled={saving} />
        {saving && <span>Submitting your session!</span>}
        {error &&
          <span>
            {error}
          </span>}
      </div>
    </form>
  );
};

export default SessionForm;
