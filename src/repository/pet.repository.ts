import { DbClient } from "../db";
import { Pet } from "../entity/pet.type";
import { Repository } from "./repository";

export class PetRepository extends Repository<Pet> {
  protected readonly tableName = 'pet';
  
  protected toEntity(item: any) {
    const {id, name, age, weight_in_kg} = item;

    return {
      id,
      name,
      age,
      weightInKg: parseFloat(weight_in_kg)
    }
  }

  constructor(client: DbClient) {
    super(client)
  }
}