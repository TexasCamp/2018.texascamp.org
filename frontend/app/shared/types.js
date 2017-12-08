// @flow

export type SkillLevelT = 'Beginner' | 'Intermediate' | 'Advanced';

export type TrackT =
  | 'Coding and Development'
  | 'Devops'
  | 'Frontend'
  | 'Horizons'
  | 'PHP'
  | 'Project Management'
  | 'Site Building'
  | 'UX and Content Strategy';

export type SessionT = {
  body: string,
  skillLevel: SkillLevelT,
  speakers: string[],
  timeslot: Date,
  title: string,
  title: string,
  track: TrackT,
};
