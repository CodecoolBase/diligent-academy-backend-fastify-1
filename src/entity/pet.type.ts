export type Pet = {
  id: number,
  name: string,
  age: number,
  weightInKg: number,
};

export type PetProperties = Omit<Pet, 'id'>;
