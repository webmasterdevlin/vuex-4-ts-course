import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/vue";
import Home from "@/views/Home.vue";

describe("Home Page", () => {
  test("should render title", () => {
    render(Home);

    const title = screen.getByRole("heading", {
      name: "Vue 3 and Vuex 4 course",
    });
    expect(title).toBeInTheDocument();
  });
});
