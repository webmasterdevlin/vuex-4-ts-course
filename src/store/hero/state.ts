import { HeroModel } from "@/models/heroModel";

export type HeroStateType = {
  heroes: HeroModel[];
  hero: HeroModel;
  loading: boolean;
};

const state: HeroStateType = {
  heroes: [],
  hero: {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: "",
  },
  loading: false,
};

export default state;
