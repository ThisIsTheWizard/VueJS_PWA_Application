<template>
  <div id="home-page">
    <h1>Home Page</h1>
    <div class="my-flex">
      <input type="number" v-model="input_1" placeholder="Number" required />
      <button type="button">X</button>
      <input type="number" v-model="input_2" placeholder="Number" required />
      <button type="submit" @click="multiply">Multiply</button>
    </div>
    <h1>Results</h1>
    <ol>
      <li v-for="data in calculated_data" :key="data.id">{{ data.value }}</li>
    </ol>
    <h4 v-if="error">Please give some value to the inputs....</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_1: "",
      input_2: "",
      error: false
    };
  },
  computed: {
    calculated_data() {
      return this.$store.state.calculated_data;
    }
  },
  methods: {
    multiply() {
      if (this.input_1 !== "" && this.input_2 !== "") {
        let calculatedValue = this.input_1 * this.input_2;
        this.error = false;
        let id = 1;
        this.$store.dispatch("get_data", {
          id: +id,
          value: calculatedValue
        });
        this.input_1 = "";
        this.input_2 = "";
      } else {
        this.input_1 = "";
        this.input_2 = "";
        this.error = true;
      }
    }
  }
};
</script>

<style>
#home-page {
  text-align: center;
}
.my-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (max-width: 480px) {
  .my-flex {
    flex-direction: column;
  }
}
img {
  width: calc((100%) / 2);
}
</style>
