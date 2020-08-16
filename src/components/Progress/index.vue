<template>
  <div>
    <v-progress-linear 
    background-color="green lighten-4"
    color="green lighten-1" 
    :value="getCountComplete"></v-progress-linear>
  </div>
</template>
<script>
export default {
  name: 'Progres',
  props: ['tasks'],
  computed: {
    getCountComplete () {
      let length = this.tasks.length
      let complete = this.tasks.filter(task => task.isComplete).length
      return (length - length + complete) / length * 100
    }
  },
  data () {
    return {
      value: 30
    }
  }
}
</script>