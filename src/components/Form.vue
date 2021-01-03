<template>
  <div class="card my-2" style="width: auto">
    <VeeForm
      @submit="onSubmit"
      :validation-schema="yupValidation"
      class="card-header"
      style="min-width: 460px"
    >
      <section class="form-group mb-2">
        <label for="firstName">First Name</label>
        <ErrorMessage name="firstName" class="text-danger" />
        <Field
          id="firstName"
          v-model="obj.firstName"
          placeholder="📛"
          autocomplete="off"
          name="firstName"
          as="input"
          type="text"
          class="form-control"
        />
      </section>

      <section class="form-group mb-2">
        <label for="lastName">Last Name</label>
        <ErrorMessage name="lastName" class="text-danger" />
        <Field
          id="lastName"
          v-model="obj.lastName"
          placeholder="📛"
          autocomplete="off"
          name="lastName"
          as="input"
          type="text"
          class="form-control"
        />
      </section>
      <section class="form-group mb-2">
        <label for="house">House</label>
        <ErrorMessage name="house" class="text-danger" />
        <Field
          id="house"
          v-model="obj.house"
          placeholder="🏠"
          autocomplete="off"
          name="house"
          as="input"
          type="text"
          class="form-control"
        />
      </section>
      <section class="form-group mb-2">
        <label for="knownAs">Known as</label>
        <ErrorMessage name="knownAs" class="text-danger" />
        <Field
          id="knownAs"
          v-model="obj.knownAs"
          placeholder="👀"
          autocomplete="off"
          name="knownAs"
          as="input"
          type="text"
          class="form-control"
        />
      </section>
      <button type="submit" class="btn btn-success">
        {{ text }}
      </button>
    </VeeForm>
  </div>
</template>

<script lang="ts">
import { Field, Form as VeeForm, ErrorMessage } from "vee-validate";
import { yupValidation } from "@/helpers/yupValidation";
import { defineComponent, PropType } from "vue";

type Props = {
  id: string;
  firstName: string;
  lastName: string;
  house: string;
  knownAs: string;
};

export default defineComponent({
  name: "Form",
  components: {
    VeeForm,
    Field,
    ErrorMessage,
  },

  props: {
    text: {
      type: String,
      required: true,
    },
    obj: {
      type: Object as PropType<Props>,
      required: true,
    },
  },

  data: () => ({
    yupValidation: yupValidation,
  }),

  methods: {
    onSubmit() {
      this.$emit("handleSubmit");
    },
  },
});
</script>

<style scoped></style>
