import "@testing-library/jest-dom/extend-expect";
import { createStore } from "vuex";
import { mount } from "@vue/test-utils";

import { HeroStateType } from "@/store/hero/state";
import Heroes from "@/views/Heroes.vue";

const store = createStore({
  state() {
    return {
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
  },

  getters: {
    heroes: (state: HeroStateType) => {
      return state.heroes;
    },
    loading: (state: HeroStateType) => state.loading,
  },
});

describe("Heroes Page", () => {
  test("should render title", () => {
    const wrapper = mount(Heroes, {
      global: {
        plugins: [store],
      },
    });

    expect(wrapper.find("heading").text()).toEqual("Heroes Page");
  });
});
