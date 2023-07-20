<template>
  <ul class="flex flex-wrap justify-between gap-y-5 gap-x-5 text-lg">
    <li class="w-48" v-for="theme in themes" :key="theme.id">
      <label :for="`theme-${theme.name}`" class="radio">
        <input
          :id="`theme-${theme.name}`"
          name="pick-mage"
          type="radio"
          class="radio__input hidden"
          :value="theme.name"
          v-model="selectedTheme"
          @change="changeTheme(theme.name)"
        />
        <div class="radio__control">
          <div class="radio__control-wrap">
            <div class="radio__control-circle"></div>
            <img
              :src="require(`@/assets/${theme.name}-mage.png`)"
              :alt="`${theme.name} mage`"
              class="radio__control-img"
            />
          </div>
          <div class="radio__control-button">
            {{ theme.name === selectedTheme ? "Выбран" : "Выбрать" }}
          </div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ThemesList",
  components: {},
  data() {
    return {
      themes: [
        {
          name: "thunder",
          id: "1",
        },
        {
          name: "water",
          id: "2",
        },
        {
          name: "fire",
          id: "3",
        },
        {
          name: "ice",
          id: "4",
        },
      ],
      selectedTheme: "",
    };
  },
  methods: {
    ...mapActions(["updateActiveTheme"]),
    changeTheme(themeName) {
      this.themes = this.themes.map((theme) => ({
        ...theme,
        isActive: theme.name === themeName,
      }));
      this.selectedTheme = themeName;
      this.updateActiveTheme(themeName);
      localStorage.setItem("selectedTheme", themeName);
    },
  },
  mounted() {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme) {
      this.selectedTheme = selectedTheme;
      this.changeTheme(selectedTheme);
    } else {
      this.selectedTheme = "thunder";
    }
  },
};
</script>

<style lang="postcss" scoped>
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
