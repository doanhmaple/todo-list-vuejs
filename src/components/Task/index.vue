<template>
  <div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutRight"
      appear
    >
      <div
      class="task"
      :class="task.isComplete ? 'complete' : 'incomplete'"
      @click="$emit('changeStatusEmit', task.id)"
      @dblclick="$emit('removeStatusEmit', task.id)"
      >
        {{task.content}}
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'Task',
  props: ['task']
}
</script>