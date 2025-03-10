<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "MyButton",
});

interface Props {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
});

const classes = computed(() => [
  "my-btn",
  `my-btn--${props.variant}`,
  `my-btn--${props.size}`,
  { "my-btn--disabled": props.disabled },
]);
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.my-btn {
  padding: var(--spacing-md);
  color: var(--color-white);
  background: var(--color-primary);

  &--secondary {
    background: var(--color-secondary);
  }

  &--outline {
    background: transparent;
    border: 1px solid var(--color-primary);
  }

  &--sm {
    padding: var(--spacing-sm);
  }

  &--lg {
    padding: var(--spacing-lg);
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
</style>
