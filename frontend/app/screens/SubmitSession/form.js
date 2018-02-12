/* eslint-disable react/no-array-index-key */
import React from 'react';
import FloatingLabelInput from 'FloatingLabel';
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
          <FloatingLabelInput
            type="text"
            id="title"
            value={formValues.title}
            onChange={saveValue}
            required
            placeholder="Title"
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
              <option key={track.id} value={track.id}>
                {track.name}
              </option>,
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
              <option key={skillLevel.id} value={skillLevel.id}>
                {skillLevel.name}
              </option>,
            )}
          </select>
        </div>
        <div className={styles.formItem}>
          <FloatingLabelInput
            element="textarea"
            id="desc"
            value={formValues.desc}
            onChange={saveValue}
            required
            placeholder="Description"
          />
        </div>
      </fieldset>
      <fieldset>
        <legend>Speaker(s)</legend>
        {Array(speakerCount).fill(0).map((val, index) =>
          <div key={index} className={styles.speaker}>
            <div className={styles.formItem}>
              <FloatingLabelInput
                type="text"
                id={`speakerName${index + 1}`}
                value={formValues[`speakerName${index + 1}`]}
                onChange={saveValue}
                required
                placeholder="Full name"
              />
            </div>
            <div className={styles.formItem}>
              <FloatingLabelInput
                element="textarea"
                id={`speakerBio${index + 1}`}
                value={formValues[`speakerBio${index + 1}`]}
                onChange={saveValue}
                required
                placeholder="Bio"
              />
            </div>
          </div>,
        )}
        <button
          type="button"
          onClick={addSpeaker}
          className={styles.buttonSecondary}
        >
          + Add speaker
        </button>
        <button
          type="button"
          onClick={removeSpeaker}
          className={styles.buttonSecondary}
        >
          - Remove speaker
        </button>
      </fieldset>
      <fieldset>
        <legend>Contact information</legend>
        <div className={styles.formItem}>
          <FloatingLabelInput
            type="text"
            id="name"
            value={formValues.name}
            onChange={saveValue}
            required
            placeholder="Full name"
          />
        </div>
        <div className={styles.formItem}>
          <FloatingLabelInput
            type="text"
            id="company"
            value={formValues.company}
            onChange={saveValue}
            placeholder="Company (optional)"
          />
        </div>
        <div className={styles.formItem}>
          <FloatingLabelInput
            type="email"
            id="email"
            value={formValues.email}
            onChange={saveValue}
            required
            placeholder="Email address"
          />
        </div>
      </fieldset>
      <p className={styles.disclaimer}>
        We will use the above email address to communicate with you throughout
        the selection process. We will send you a permalink with which you can
        edit your submission.
      </p>
      <div>
        <input
          type="submit"
          value="Submit"
          disabled={saving}
          className={styles.button}
        />
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
