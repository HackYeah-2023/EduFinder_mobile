// Import json data
import data from './schools-data.json';
import { SchoolsFilterBody } from './schoolsTypes';

const schools = data as SchoolEntity[];

export interface SchoolEntity {
  id: number;
  name: string;
  region: string;
  county: string;
  commune: string;
  city: string;
  street: string;
  number: string;
  zipCode: string;
  page: string;
  type: string;
  departments: number;
  mail: string;
  phone: string;
  foreign_languages: string;
  classes: string;
  extended_subjects: string;
}

export const getAllSchools = (filters?: SchoolsFilterBody) => {
  //@ts-ignore
  let result = [...schools];
  if (filters?.name) {
    result = result.filter((school: SchoolEntity) =>
      school.name.includes(filters.name!),
    );
  }

  if (filters?.region) {
    result = result.filter((school: SchoolEntity) =>
      school.region.includes(filters.region!),
    );
  }
  if (filters?.city) {
    result = result.filter((school: SchoolEntity) =>
      school.city.includes(filters.city!),
    );
  }

  if (filters?.languages) {
    for (const language of filters.languages) {
      result = result.filter((school: SchoolEntity) =>
        school.foreign_languages.includes(language),
      );
    }
  }
  if (filters?.profile) {
    for (const profile of filters.profile) {
      result = result.filter((school: SchoolEntity) =>
        school.classes.includes(profile),
      );
    }
  }
  if (filters?.extendedSubject) {
    for (const subject of filters.extendedSubject) {
      result = result.filter((school: SchoolEntity) =>
        school.extended_subjects.includes(subject),
      );
    }
  }

  return result;
};

// const result = getAllSchools({
// //   name: 'Liceum',
//   //   region: 'MAŁOPOLSKIE',
//   //   extendedSubject: ['Matematyka'],
//   //   languages: ['Angielski'],
//   //   profile: ['Mat-Fiz'],
// });
// console.log(result.length);
