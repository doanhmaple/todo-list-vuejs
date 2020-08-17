<template>
  <div>
    <form class="insert-task">
      <v-text-field dark v-model="name" label="Name" data-vv-name="name" required></v-text-field>

      <v-btn fab dark small color="pink" @click="sendTask()">
        <v-icon dark>add</v-icon>
      </v-btn>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    sendTask() {
      if (this.name.trim()) {
        this.$emit("insertTask", this.name);
        this.name = "";
      }
    },
  },
};
</script>