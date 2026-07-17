import { faker } from "@faker-js/faker";
import { CustomerInfo } from "./customerinfo.type";

 export function createFakeCutomerData(): CustomerInfo {
  return {
    title: "Mr.",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    day: faker.date.birthdate().getDay.toString(),
    month: (faker.date.birthdate().getMonth() + 1).toString(),
    year: faker.date.birthdate().getFullYear().toString(),
  };
}
