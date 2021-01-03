import { AntiHeroModel } from "@/models/antiHeroModel";

export type AntiHeroStateType = {
  antiHeroes: AntiHeroModel[];
  antiHero: AntiHeroModel;
  loading: boolean;
};

const state: AntiHeroStateType = {
  antiHeroes: [],
  antiHero: {
    id: "",
    firstName: "",
    lastName: "",
    house: "",
    knownAs: "",
  },
  loading: false,
};

export default state;
