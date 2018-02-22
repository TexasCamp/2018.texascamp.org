/* eslint-disable react/no-array-index-key */
import React from 'react';
import FloatingLabelInput from 'FloatingLabel';
import ReactSelect from 'react-select';
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
      <fieldset className={styles.sessionFieldset}>
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
          <div className={styles.fauxFloatingLabelContainer}>
            <ReactSelect
              aria-labelledby="track"
              placeholder=""
              name="select-track"
              value={formValues.track}
              onChange={newOption => {
                setFormValue('track', newOption.value);
              }}
              options={tracks.map(track => ({
                value: track.id,
                label: track.name,
              }))}
              required
            />
            <label
              id="track"
              className={
                formValues.track ? styles.selectHasValue : styles.selectEmpty
              }
              htmlFor="track"
            >
              Track
            </label>
          </div>
        </div>
        <div className={styles.formItem}>
          <div className={styles.fauxFloatingLabelContainer}>
            <ReactSelect
              aria-labelledby="skillLevel"
              placeholder=""
              name="select-skillLevel"
              value={formValues.skillLevel}
              onChange={newOption => {
                setFormValue('skillLevel', newOption.value);
              }}
              options={skillLevels.map(skillLevel => ({
                value: skillLevel.id,
                label: skillLevel.name,
              }))}
              required
            />
            <label
              id="skillLevel"
              className={
                formValues.skillLevel
                  ? styles.selectHasValue
                  : styles.selectEmpty
              }
              htmlFor="skillLevel"
            >
              Skill level
            </label>
          </div>
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
      <fieldset className={styles.sessionFieldset}>
        <legend>Speaker(s)</legend>
        {Array(speakerCount).fill(0).map((val, index) =>
          (<div key={index} className={styles.speaker}>
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
          </div>),
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
      <fieldset className={styles.sessionFieldset}>
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
      <div className={styles.submissionContainer}>
        <input
          type="submit"
          value="Submit"
          disabled={saving}
          className={styles.button}
        />
        {saving &&
          <span className={styles.submitting}>Submitting your session!</span>}
        {error &&
          <span className={styles.submitting}>
            {error}
          </span>}
      </div>
    </form>
  );
};

export default SessionForm;
