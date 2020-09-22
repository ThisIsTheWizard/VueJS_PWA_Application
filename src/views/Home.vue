<template>
  <div class="container" style="border: 1px solid rgba(0, 0, 0, 0.1); text-align: center; font-family: Calibri">
    <header style="background-color: rgba(7, 40, 63, 1); padding: 0.5rem; color: #fff">
      <h1>Multiplication PWA Application</h1>
    </header>
    <form @submit.prevent="multiply()" style="display: flex; margin: 1rem 0;">
        <input
          type="number"
          v-model="input_1"
          placeholder="First Value"
          required
          style="flex: 2; border: 1px solid rgba(0, 0, 0, 0.1); padding: 0.2rem 0.5rem;"
        />
        <input
          type="number"
          v-model="input_2"
          placeholder="Second Value"
          required
          style="flex: 2; border: 1px solid rgba(0, 0, 0, 0.1); padding: 0.2rem 0.5rem;"
        />
        <button
          type="submit"
          style="flex: 1; border: 1px solid rgba(0, 0, 0, 0.1); background-color: rgba(7, 40, 63, 1); color: #fff; font-weight: 550;"
        >
          Multiply
        </button>
      </form>
    <h1>Results</h1>
    <ul style="margin: 1rem 0; list-tyle: none; color: #fff; font-weight: 550; padding: 0">
      <li
        v-for="data in calculated_data"
        :key="data.id"
        style="margin: 0.2rem 0; background-color: rgba(7, 40, 63, 1); padding: 0.3rem;"
      >{{ data.value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_1: "",
      input_2: ""
    };
  },
  computed: {
    calculated_data() {
      return this.$store.state.calculated_data;
    }
  },
  methods: {
    multiply() {
      let calculatedValue = this.input_1 * this.input_2;
      let value = `${this.input_1} X ${this.input_2} = ${calculatedValue}`;
      let id = this.calculated_data.length;
      this.$store.dispatch("get_data", {
        id: id++,
        value: value
      });
      this.input_1 = "";
      this.input_2 = "";
    }
  }
};
</script>

<style>
*, ::after, ::before {
  box-sizing: border-box;
}
form {
  flex-direction: column;
}
.container, .container-fluid, .container-lg, .container-md, .container-sm, .container-xl {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container, .container-sm {
    max-width: 540px;
  }
  form {
    flex-direction: row;
  }
}
@media (min-width: 768px) {
  .container, .container-md, .container-sm {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container, .container-lg, .container-md, .container-sm {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1140px;
  }
}
</style>
