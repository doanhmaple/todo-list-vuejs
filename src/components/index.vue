<template>
  <div class="main">
    <div class="header">
      <Title :length="tasks.length" />
      <Progress :tasks="tasks"/>
			<InsertButton @insertTask="insertTask"/>
      <SelectComplete :statusTasksRender.sync="statusTasksRender"/>
    </div>
    <Task 
    v-for="task in renderTasks" 
    :key="task.id" 
    :task="task"
    @changeStatusEmit="changeStatusEmit"
    @removeStatusEmit="removeStatusEmit"
    />
  </div>
</template>
<script>
import Title from "@/components/Title";
import Progress from "@/components/Progress";
import Task from "@/components/Task";
import InsertButton from "@/components/InsertButton";
import SelectComplete from "@/components/SelectComplete";
import localStorage from './../services/localStorage.js'

export default {
  components: {
    Title,
    Progress,
		Task,
    InsertButton,
    SelectComplete
  },
  computed: {
    renderTasks () {
      if(this.statusTasksRender === 'All') {
        return this.tasks
      }
      if(this.statusTasksRender === 'Done') {
        return this.tasks.filter(i => i.isComplete)
      }
      if(this.statusTasksRender === 'Going') {
        return this.tasks.filter(i => !i.isComplete)
      }
    }
  },
  data() {
    return {
      statusTasksRender: 'All',
			valueDeterminate: 50,
			tasks: localStorage.getTasks() || [
				{ id: 0, isComplete: false, content: 'Do homework' },
				{ id: 1, isComplete: true, content: 'Play game' }
			]
    };
  },
  methods: {
    insertTask (e) {
      this.tasks.unshift({
        id: this.uuidv4(),
        isComplete: false,
        content: e
      })
      localStorage.setTasks(this.tasks)
    },
    changeStatusEmit (e) {
      let task = this.tasks.find(task => task.id === e)
      task.isComplete = !task.isComplete
      localStorage.setTasks(this.tasks)
    },
    removeStatusEmit (e) {
      this.tasks = this.tasks.filter(task => task.id != e)
      localStorage.setTasks(this.tasks)
    },
    uuidv4() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }
};
</script>
		