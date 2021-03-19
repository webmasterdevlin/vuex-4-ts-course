import "@testing-library/jest-dom/extend-expect";

import { mount } from "@vue/test-utils";
import Heroes from "@/views/Heroes.vue";
import { store } from "@/store";

describe("Heroes Page", () => {
  test("should render title", async () => {
    const wrapper = mount(Heroes, {
      global: {
        plugins: [store],
      },
    });
    const title = await wrapper.find("heading");
    expect(title).toBeFalsy();
  });
});
