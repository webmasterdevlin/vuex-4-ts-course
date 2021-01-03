import * as types from "./types";
import {
  deleteAntiHeroAxios,
  getAntiHeroesAxios,
  postAntiHeroAxios,
  putAntiHeroAxios,
} from "@/services/antiHeroService";
import { AntiHeroModel } from "@/models/antiHeroModel";

export function getAntiHeroesAction({ commit }: any) {
  commit(types.LOADING_ANTI_HERO, true);

  return getAntiHeroesAxios()
    .then(({ data }) => commit(types.GET_ANTI_HEROES, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_ANTI_HERO, false));
}

export function removeAntiHeroAction({ commit }: any, payload: string) {
  commit(types.LOADING_ANTI_HERO, true);

  return deleteAntiHeroAxios(payload)
    .then(() => commit(types.REMOVE_ANTI_HERO, payload))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_ANTI_HERO, false));
}

export function addAntiHeroAction({ commit }: any, payload: AntiHeroModel) {
  commit(types.LOADING_ANTI_HERO, true);

  return postAntiHeroAxios(payload)
    .then(({ data }) => commit(types.ADD_ANTI_HERO, data))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_ANTI_HERO, false));
}

export function updateAntiHeroAction({ commit }: any, payload: AntiHeroModel) {
  commit(types.LOADING_ANTI_HERO, true);

  return putAntiHeroAxios(payload)
    .then(() => commit(types.UPDATE_ANTI_HERO, payload))
    .catch((e) => console.log(e.message))
    .finally(() => commit(types.LOADING_ANTI_HERO, false));
}
