<template>
  <div class="clicker flex flex-col h-full overflow-hidden relative">
    <div class="clicker__info z-10">
      <div
        class="text-base px-40 py-13 bg-main-gradient max-w-[1184px] mx-auto"
      >
        <h1 class="text-2xl">{{ messages.ru.welcome }}</h1>

        <p class="text-xl mt-4">
          {{ messages.ru.description }}
        </p>
      </div>

      <div class="mt-4 px-40 pt-6 pb-5 bg-main-gradient max-w-[1184px] mx-auto">
        <p class="text-xl">{{ messages.ru.counter }}</p>
        <p class="text-2xl mt-1">{{ counter }}</p>
      </div>
    </div>

    <div class="clicker__canvas flex flex-col flex-grow justify-end pb-16">
      <transition-group name="mages" @after-enter="onAnimationEnd">
        <transition v-for="blockId in blocks" mode="out-in" :key="blockId">
          <img
            class="mage"
            :src="require(`@/assets/${activeTheme}-mage.gif`)"
          />
        </transition>
      </transition-group>
      <div class="z-10">
        <button
          class="button button--primary rounded-3xl px-4 py-3 w-full max-w-[392px] mx-auto"
          @click="incrementCounter()"
        >
          Крутить мага!
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ClickerField",
  components: {},
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
      blocks: [], // Массив для хранения ID блоков
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
    incrementCounter() {
      this.counter++;
      localStorage.setItem("counterValue", this.counter.toString());
      this.blocks.push(Date.now()); // Добавляем текущую метку времени в качестве уникального ID блока
      this.playSound("Banks24_1027", "wav");
      // if (this.counter === 100) {
      //   alert("100");
      // } else if (this.counter === 1000) {
      //   alert("1000");
      // }
    },
    playSound(soundName, format) {
      import(`@/assets/${soundName}.${format}`).then((module) => {
        const audio = new Audio(module.default);
        audio.play();
      });
    },
    onAnimationEnd() {
      this.blocks.shift();
    },
  },

  mounted() {
    const savedCounterValue = localStorage.getItem("counterValue");
    if (savedCounterValue) {
      this.counter = parseInt(savedCounterValue);
    } else {
      this.counter = 0;
    }
  },
};
</script>

<style>
.mage {
  position: absolute;
  bottom: 0;
  right: 50%;

  opacity: 0;
}

.mages-enter-active {
  animation: slideIn 1.5s linear;
  opacity: 1;
}

@keyframes slideIn {
  from {
    right: -250px;
  }
  to {
    right: calc(100% + 250px);
  }
}
</style>
