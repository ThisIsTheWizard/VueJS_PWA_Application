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
    <h2>{{ calculatedValue }}</h2>
    <h4 v-if="error">Please give some value to the inputs....</h4>
    <button type="button" @click="getData">Get Data</button>
    <p>{{ data }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      input_1: "",
      input_2: "",
      calculatedValue: "",
      error: false,
      data: ""
    };
  },
  methods: {
    multiply() {
      if (this.input_1 !== "" && this.input_2 !== "") {
        this.calculatedValue = this.input_1 * this.input_2;
        this.error = false;
      } else {
        this.calculatedValue = "";
        this.error = true;
      }
    },
    async getData() {
      await axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => (this.data = res.data))
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
#wizard {
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
</style>
