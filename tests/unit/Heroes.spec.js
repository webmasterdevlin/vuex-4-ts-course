import "@testing-library/jest-dom/extend-expect";

import { mount } from "@vue/test-utils";
import Heroes from "@/views/Heroes.vue";
import { store } from "@/store";

describe("Heroes Page", () => {
  const wrapper = mount(Heroes, {
    global: {
      plugins: [store],
    },
  });

  test("should render title", async () => {
    const title = await wrapper.find("h1").text();
    expect(title).toBe("Heroes Page");
  });

  test("should render heroes", async () => {
    const cards = await wrapper.findAll(".card-header");
    expect(cards).toHaveLength(1);
  });
});
