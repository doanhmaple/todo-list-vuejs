<template>
  <div>
    <v-chip label color="blue" text-color="white" @click="$emit('update:statusTasksRender', 'All')">
      <v-icon left>label</v-icon>All Tasks
    </v-chip>
    <v-chip
      label
      color="green"
      text-color="white"
      @click="$emit('update:statusTasksRender', 'Done')"
    >
      <v-icon left>label</v-icon>Tasks Done
    </v-chip>
    <v-chip
      label
      color="pink"
      text-color="white"
      @click="$emit('update:statusTasksRender', 'Going')"
    >
      <v-icon left>label</v-icon>Tasks Going
    </v-chip>
  </div>
</template>
<script>
export default {
  props: ["renderStatusComplete"],
};
</script>