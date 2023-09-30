// Import json data
import data from './classes-data.json';

const classes = data as SchoolClass[];

export interface SchoolClass {
  id: number;
  school_id: number;
  name: string;
  subjects_extended: string;
  points: number;
  places: number;
  classes: number;
  subjects_included: string;
  professions: string;
}

export function getClassesForSchool(schoolId: number) {
  return classes.filter(school => school.school_id === schoolId);
}

// console.log(getClassesForSchool(30000));
