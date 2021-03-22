<template>
  <div class="container-fluid mb-5">
    <h1>Anti-Heroes Page</h1>
    <div
      v-if="editingTracker === '0'"
      class="d-flex flex-row justify-content-start"
    >
      <div class="d-flex">
        <Form
          :text="'Save New AntiHero'"
          :obj="antiHeroForm"
          @handleSubmit="
            addAntiHeroAction(antiHeroForm);
            antiHeroForm = {};
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
      <div v-if="antiHeroes.length > 0">
        <div
          data-testid="card"
          class="card mt-3"
          style="width: auto"
          v-for="antiHero in antiHeroes"
          :key="antiHero.id"
        >
          <div class="card-header">
            <div
              v-if="editingTracker === antiHero.id"
              class="d-flex flex-row justify-content-start"
            >
              <div class="mb-5">
                <Form
                  :text="'Update AntiHero'"
                  :obj="antiHero"
                  @handleSubmit="updateAntiHeroAction(antiHero)"
                />
              </div>
            </div>

            <div v-else>
              <h3 class="card-title">
                {{ antiHero.firstName }} {{ antiHero.lastName }}
              </h3>
              <h5 class="card-subtitle mb-2 text-muted">
                {{ antiHero.house }}
              </h5>
              <p class="card-text">{{ antiHero.knownAs }}</p>
            </div>
          </div>

          <section class="card-body">
            <div>
              <button
                data-testid="cancel-button"
                v-if="editingTracker === antiHero.id"
                @click="() => (editingTracker = '0')"
                class="btn btn-info card-link col text-center"
              >
                Cancel
              </button>
              <button
                data-testid="edit-button"
                v-else
                @click="() => (editingTracker = antiHero.id)"
                class="btn btn-primary card-link col text-center"
              >
                Edit
              </button>
              <button
                data-testid="delete-button"
                @click="removeAntiHeroAction(antiHero.id)"
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
import { AntiHeroModel } from "@/models/antiHeroModel";

export default defineComponent({
  name: "AntiHeroes",
  components: { Form },

  // Vue 2
  /*
  data: () => ({
      antiHeroForm: {
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
    const antiHeroForm = ref<AntiHeroModel>({
      id: "",
      firstName: "",
      lastName: "",
      house: "",
      knownAs: "",
    });
    const editingTracker = ref("0");

    return {
      antiHeroForm,
      editingTracker,
    };
  },

  computed: {
    ...mapGetters("antiHeroModule", {
      antiHeroes: "antiHeroes",
      loading: "loading",
    }),
  },

  methods: {
    ...mapActions("antiHeroModule", [
      "getAntiHeroesAction",
      "removeAntiHeroAction",
      "addAntiHeroAction",
      "updateAntiHeroAction",
    ]),

    /* In html template or in code
    onSubmitAntiHero() {
      this.addAntiHeroAction(this.antiHeroForm);
      this.antiHeroForm = {};
    },
    */
  },

  async mounted() {
    await this.getAntiHeroesAction();
  },
});
</script>

<style scoped></style>
