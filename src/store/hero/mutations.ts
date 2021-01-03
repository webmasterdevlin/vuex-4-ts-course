import * as types from "./types";
import { HeroStateType } from "@/store/hero/state";
import { HeroModel } from "@/models/heroModel";

const mutations = {
  [types.GET_HEROES](state: HeroStateType, heroes: HeroModel[]) {
    state.heroes = heroes;
  },

  [types.LOADING_HERO](state: HeroStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_HERO](state: HeroStateType, id: string) {
    state.heroes = state.heroes.filter((h) => h.id !== id);
  },

  [types.ADD_HERO](state: HeroStateType, createdHero: HeroModel) {
    state.heroes.push(createdHero);
  },

  [types.UPDATE_HERO](state: HeroStateType, updatedHero: HeroModel) {
    const index = state.heroes.findIndex((h) => h.id === updatedHero.id);
    state.heroes[index] = updatedHero;
  },
};

export default mutations;
