import * as types from "./types";
import { AntiHeroStateType } from "@/store/anti-hero/state";
import { AntiHeroModel } from "@/models/antiHeroModel";

const mutations = {
  [types.GET_ANTI_HEROES](
    state: AntiHeroStateType,
    antiHeroes: AntiHeroModel[]
  ) {
    state.antiHeroes = antiHeroes;
  },

  [types.LOADING_ANTI_HERO](state: AntiHeroStateType, toggle: boolean) {
    state.loading = toggle;
  },

  [types.REMOVE_ANTI_HERO](state: AntiHeroStateType, id: string) {
    state.antiHeroes = state.antiHeroes.filter((h) => h.id !== id);
  },

  [types.ADD_ANTI_HERO](
    state: AntiHeroStateType,
    createdAntiHero: AntiHeroModel
  ) {
    state.antiHeroes.push(createdAntiHero);
  },

  [types.UPDATE_ANTI_HERO](
    state: AntiHeroStateType,
    updatedAntiHero: AntiHeroModel
  ) {
    const index = state.antiHeroes.findIndex(
      (h) => h.id === updatedAntiHero.id
    );
    state.antiHeroes[index] = updatedAntiHero;
  },
};

export default mutations;
