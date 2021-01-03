import { AntiHeroStateType } from "@/store/anti-hero/state";

const getters = {
  antiHeroes: (state: AntiHeroStateType) => {
    return state.antiHeroes;
  },
  loading: (state: AntiHeroStateType) => state.loading,
};
export default getters;
