import * as types from "./types";
import {
  deleteHeroAxios,
  getHeroesAxios,
  postHeroAxios,
  putHeroAxios,
} from "@/services/heroService";
import { HeroModel } from "@/models/heroModel";

export function getHeroesAction({ commit }) {
  commit(types.LOADING_HERO, true);

  return getHeroesAxios()
    .then(({ data }) => commit(types.GET_HEROES, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_HERO, false));
}

export function removeHeroAction({ commit }, payload: string) {
  commit(types.LOADING_HERO, true);

  return deleteHeroAxios(payload)
    .then(() => commit(types.REMOVE_HERO, payload))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_HERO, false));
}

export function addHeroAction({ commit }, createdHero: HeroModel) {
  commit(types.LOADING_HERO, true);

  return postHeroAxios(createdHero)
    .then(({ data }) => commit(types.ADD_HERO, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_HERO, false));
}

export function updateHeroAction({ commit }, updatedHero: HeroModel) {
  commit(types.LOADING_HERO, true);

  return putHeroAxios(updatedHero)
    .then(() => commit(types.UPDATE_HERO, updatedHero))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_HERO, false));
}
