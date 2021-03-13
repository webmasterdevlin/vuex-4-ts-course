import { render } from "@testing-library/vue";
import Home from "@/views/Home.vue";

describe("Home Page", () => {
  test("should render title", () => {
    render(Home);
  });
});
