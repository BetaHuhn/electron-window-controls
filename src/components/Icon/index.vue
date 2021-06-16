<template>
  <div class="icon-wrapper" :style="{ '--size': size }">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .icon-wrapper {
        width: var(--size);
        height: var(--size);
    }
</style>