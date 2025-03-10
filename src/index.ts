import "./styles/index.scss";
export { default as MyButton } from "./components/Button.vue";
// export { default as Icon } from './components/Icon.vue'

// Export styles separately
export const styles = {
  variables: () => import("./styles/variables.scss"),
  utilities: () => import("./styles/utilities.scss"),
};

// Export icons separately
// export * as icons from './icons'
