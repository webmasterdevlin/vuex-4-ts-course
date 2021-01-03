import { HeroStateType } from "@/store/hero/state";

const getters = {
  heroes: (state: HeroStateType) => {
    return state.heroes;
  },
  loading: (state: HeroStateType) => state.loading,
};
export default getters;
