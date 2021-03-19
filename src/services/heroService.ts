import { api, Endpoints } from "@/api/axios-config";
import { HeroModel } from "@/models/heroModel";

export async function getHeroesAxios() {
  console.log("GET_HEROES_AXIOS:");
  return await api.get<HeroModel[]>(Endpoints.heroes);
}

export async function deleteHeroAxios(id: string) {
  return await api.delete<void>(`${Endpoints.heroes}/${id}`);
}

export async function postHeroAxios(hero: HeroModel) {
  return await api.post<HeroModel>(Endpoints.heroes, hero);
}

export async function putHeroAxios(hero: HeroModel) {
  return await api.put<void>(`${Endpoints.heroes}/${hero.id}`, hero);
}
