<template>
    <div>
        <div class="title">Todo List ({{length}}) </div>
    </div>
</template>
<script>
export default {
  props: [
    'length'
  ]
}
</script>