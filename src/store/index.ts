import { createStore, createLogger } from "vuex";
import heroModule from "./hero";
import antiHeroModule from "./anti-hero";

export const store = createStore({
  modules: {
    heroModule,
    antiHeroModule,
  },
  plugins: [createLogger()],
});
