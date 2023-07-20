<template>
  <div
    :class="`font-primary theme theme--${activeTheme} flex flex-col h-screen`"
  >
    <main class="flex-grow pt-10 text-primary text-center">
      <clicker-field />
    </main>

    <footer-section>
      <footer-menu @theme-selected="updateActiveTheme"> </footer-menu>
    </footer-section>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

import ClickerField from "./components/ClickerField";
import FooterSection from "./components/FooterSection";
import FooterMenu from "./components/FooterMenu";
export default {
  name: "App",
  components: {
    ClickerField,
    FooterSection,
    FooterMenu,
  },
  data() {
    return {
      messages: {
        ru: {
          welcome: "Добро пожаловать в крутилку мага!",
          description:
            "Вас бесят маги бездны? Поэтому мы сделали еще больше магов бездны!",
          counter: "Прокруток мага:",
        },
      },
      counter: 0,
    };
  },
  computed: {
    ...mapGetters(["activeTheme"]),
  },
  methods: {
    ...mapMutations(["setActiveTheme"]),
    updateActiveTheme(themeName) {
      this.setActiveTheme(themeName);
    },
  },
};
</script>
<style lang="postcss">
.theme {
  @apply bg-cover bg-no-repeat bg-center;
}
.theme--thunder {
  @apply bg-thunder bg-thunder-img;
}

.theme--water {
  @apply bg-water bg-water-img;
}

.theme--fire {
  @apply bg-fire bg-fire-img;
}

.theme--ice {
  @apply bg-ice bg-ice-img;
}

.button {
  @apply flex items-center justify-center shadow-custom transition-all duration-500;
}

.button--primary {
  @apply text-secondary bg-primary hover:bg-primaryLight hover:text-golden;
}

.credits {
  @apply flex justify-center flex-wrap gap-x-7 gap-y-2;
}

.credits__item-wrap {
  @apply relative w-100 border-2 border-solid rounded-l-3xl border-socialLink-bg;
}

.credits__item-wrap::before {
  content: "";
  @apply absolute -right-[22px] top-1/2 -translate-y-1/2 w-[150px] h-[86px] from-transparent to-70% bg-gradient-to-r;
}

.theme.theme--thunder .credits__item-wrap::before {
  @apply to-thunder;
}

.theme.theme--water .credits__item-wrap::before {
  @apply to-water;
}

.theme.theme--fire .credits__item-wrap::before {
  @apply to-fire;
}

.theme.theme--ice .credits__item-wrap::before {
  @apply to-ice;
}

.credits__link {
  @apply flex items-center gap-2 py-1 pr-5 pl-2 border-2 border-solid rounded-l-3xl border-socialLink-border bg-socialLink-bg hover:text-golden hover:shadow-custom transition-all duration-500;
}

.radio__input {
  @apply hidden;
}

.radio__control {
  @apply flex flex-col cursor-pointer;
}

.radio__control-wrap {
  @apply relative flex justify-center w-full h-full;
}

.radio__control-circle {
  position: relative;
  @apply relative w-27 h-27 rounded-full bg-primary bg-opacity-50;
}

.radio__control-circle::before {
  content: "";
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 w-21 h-21 rounded-full bg-primary transition-transform duration-500;
}
.radio__control-img {
  @apply absolute bottom-0 left-1/2 -translate-x-1/2;
}

.radio__control-button {
  @apply rounded-3xl px-4 py-3 text-primary border-2 border-solid border-primary bg-transparent w-full max-w-[192px] shadow-custom transition-all duration-500;
}

.radio__input:checked + .radio__control .radio__control-button {
  @apply text-secondary bg-primary;
}

.radio__control:hover .radio__control-button,
.radio__input:checked + .radio__control:hover .radio__control-button {
  @apply text-golden border-primaryLight;
}

.radio__control:hover .radio__control-circle::before,
.radio__input:checked + .radio__control .radio__control-circle::before {
  @apply scale-100;
}
</style>
