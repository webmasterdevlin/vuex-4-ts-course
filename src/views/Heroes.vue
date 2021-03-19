<template>
  <div class="container-fluid mb-5">
    <h1>Heroes Page</h1>
    <div
      v-if="editingTracker === '0'"
      class="d-flex flex-row justify-content-start"
    >
      <div class="mb-2">
        <Form
          :text="'Save New Hero'"
          :obj="heroForm"
          @handleSubmit="
            addHeroAction(heroForm);
            heroForm = {};
          "
        />
      </div>
    </div>
    <div v-if="loading" class="d-flex flex-row justify-content-center">
      <!-- reusable, can be separated to its own file -->
      <div
        class="spinner-border"
        style="width: 6rem; height: 6rem; color: purple"
        role="status"
      ></div>
    </div>
    <section v-else>
      <!-- reusable, can be separated to its own file -->
      <div v-if="heroes.length > 0">
        <div
          class="card mt-3"
          style="width: auto"
          v-for="hero in heroes"
          :key="hero.id"
        >
          <div class="card-header">
            <div
              v-if="editingTracker === hero.id"
              class="d-flex flex-row justify-content-start"
            >
              <div class="mb-2">
                <Form
                  :text="'Update Hero'"
                  :obj="hero"
                  @handleSubmit="updateHeroAction(hero)"
                />
              </div>
            </div>

            <div v-else>
              <h3 class="card-title">
                {{ hero.firstName }} {{ hero.lastName }}
              </h3>
              <h5 class="card-subtitle mb-2 text-muted">{{ hero.house }}</h5>
              <p class="card-text">{{ hero.knownAs }}</p>
            </div>
          </div>

          <section class="card-body">
            <div>
              <button
                v-if="editingTracker === hero.id"
                @click="() => (editingTracker = '0')"
                class="btn btn-info card-link col text-center"
              >
                Cancel
              </button>
              <button
                v-else
                @click="() => (editingTracker = hero.id)"
                class="btn btn-primary card-link col text-center"
              >
                Edit
              </button>
              <button
                @click="removeHeroAction(hero.id)"
                class="btn btn-outline-danger card-link col text-center"
              >
                Delete
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { defineComponent, ref } from "vue";
import Form from "@/components/Form.vue";
import { HeroModel } from "@/models/heroModel";

export default defineComponent({
  name: "Heroes",
  components: { Form },

  // Vue 2
  /*
  data: () => ({
      heroForm: {
        id: "",
        firstName: "",
        lastName: "",
        house: "",
        knownAs: "",
      },

      editingTracker: "0",
    }),
  */

  // Vue 3
  setup() {
    const heroForm = ref<HeroModel>({
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: "",
    });
    const editingTracker = ref("0");

    return {
      heroForm,
      editingTracker,
    };
  },

  computed: {
    ...mapGetters("heroModule", {
      heroes: "heroes",
      loading: "loading",
    }),
  },

  methods: {
    ...mapActions("heroModule", [
      "getHeroesAction",
      "removeHeroAction",
      "addHeroAction",
      "updateHeroAction",
    ]),

    /* In html template or in code
    onSubmitHero() {
      this.addHeroAction(this.heroForm);
      this.heroForm = {};
    },
    */
  },

  mounted() {
    this.getHeroesAction();
  },
});
</script>

<style scoped></style>
