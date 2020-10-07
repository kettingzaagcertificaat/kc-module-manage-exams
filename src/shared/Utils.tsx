import { Persoon } from 'generated/graphql';
import { DeepPartial } from 'ts-essentials';

export const personDisplayName = (person: DeepPartial<Persoon>): string => {
  return `${person.Voorletters} ${person.Tussenvoegsel ? person.Tussenvoegsel + ' ' : ''}${
    person.Achternaam
  }`;
};
