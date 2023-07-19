<template>
  <div class="menu" :class="{ active: isActive }">
    <div class="menu__wrapper">
      <div class="menu__action">
        <button
          class="button button--primary w-13 h-13 rounded-full"
          @click="toggleMenu()"
        >
          <div v-show="!isActive">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_477_218)">
                <mask
                  id="mask0_477_218"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <rect width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_477_218)">
                  <path
                    d="M18.5 29.3333H13.5C13.1666 29.3333 12.8778 29.2222 12.6333 29C12.3889 28.7778 12.2444 28.5 12.2 28.1667L11.8 25.0667C11.5111 24.9556 11.2389 24.8222 10.9833 24.6667C10.7278 24.5111 10.4778 24.3444 10.2333 24.1667L7.33331 25.3667C7.0222 25.4778 6.71109 25.4889 6.39998 25.4C6.08887 25.3111 5.84443 25.1222 5.66665 24.8333L3.19998 20.5333C3.0222 20.2444 2.96665 19.9333 3.03332 19.6C3.09998 19.2667 3.26665 19 3.53332 18.8L6.03332 16.9C6.01109 16.7444 5.99998 16.5944 5.99998 16.45V15.55C5.99998 15.4056 6.01109 15.2556 6.03332 15.1L3.53332 13.2C3.26665 13 3.09998 12.7333 3.03332 12.4C2.96665 12.0667 3.0222 11.7556 3.19998 11.4667L5.66665 7.16667C5.8222 6.85556 6.06109 6.66112 6.38332 6.58334C6.70554 6.50556 7.0222 6.52223 7.33331 6.63334L10.2333 7.83334C10.4778 7.65556 10.7333 7.48889 11 7.33334C11.2666 7.17778 11.5333 7.04445 11.8 6.93334L12.2 3.83334C12.2444 3.50001 12.3889 3.22223 12.6333 3.00001C12.8778 2.77778 13.1666 2.66667 13.5 2.66667H18.5C18.8333 2.66667 19.1222 2.77778 19.3666 3.00001C19.6111 3.22223 19.7555 3.50001 19.8 3.83334L20.2 6.93334C20.4889 7.04445 20.7611 7.17778 21.0166 7.33334C21.2722 7.48889 21.5222 7.65556 21.7666 7.83334L24.6666 6.63334C24.9778 6.52223 25.2889 6.51112 25.6 6.6C25.9111 6.68889 26.1555 6.87778 26.3333 7.16667L28.8 11.4667C28.9778 11.7556 29.0333 12.0667 28.9666 12.4C28.9 12.7333 28.7333 13 28.4666 13.2L25.9666 15.1C25.9889 15.2556 26 15.4056 26 15.55V16.45C26 16.5944 25.9778 16.7444 25.9333 16.9L28.4333 18.8C28.7 19 28.8666 19.2667 28.9333 19.6C29 19.9333 28.9444 20.2444 28.7666 20.5333L26.3 24.8C26.1222 25.0889 25.8722 25.2833 25.55 25.3833C25.2278 25.4833 24.9111 25.4778 24.6 25.3667L21.7666 24.1667C21.5222 24.3444 21.2666 24.5111 21 24.6667C20.7333 24.8222 20.4666 24.9556 20.2 25.0667L19.8 28.1667C19.7555 28.5 19.6111 28.7778 19.3666 29C19.1222 29.2222 18.8333 29.3333 18.5 29.3333ZM16.0666 20.6667C17.3555 20.6667 18.4555 20.2111 19.3666 19.3C20.2778 18.3889 20.7333 17.2889 20.7333 16C20.7333 14.7111 20.2778 13.6111 19.3666 12.7C18.4555 11.7889 17.3555 11.3333 16.0666 11.3333C14.7555 11.3333 13.65 11.7889 12.75 12.7C11.85 13.6111 11.4 14.7111 11.4 16C11.4 17.2889 11.85 18.3889 12.75 19.3C13.65 20.2111 14.7555 20.6667 16.0666 20.6667Z"
                    fill="currentColor"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_477_218">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>

          <div v-show="isActive">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Frame 14" clip-path="url(#clip0_477_346)">
                <g id="cancel">
                  <mask
                    id="mask0_477_346"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="32"
                    height="32"
                  >
                    <rect
                      id="Bounding box"
                      width="32"
                      height="32"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_477_346)">
                    <path
                      id="cancel_2"
                      d="M16 17.8667L19.8667 21.7333C20.1111 21.9778 20.4222 22.1 20.8 22.1C21.1778 22.1 21.4889 21.9778 21.7333 21.7333C21.9778 21.4889 22.1 21.1778 22.1 20.8C22.1 20.4222 21.9778 20.1111 21.7333 19.8667L17.8667 16L21.7333 12.1333C21.9778 11.8889 22.1 11.5778 22.1 11.2C22.1 10.8222 21.9778 10.5111 21.7333 10.2667C21.4889 10.0222 21.1778 9.9 20.8 9.9C20.4222 9.9 20.1111 10.0222 19.8667 10.2667L16 14.1333L12.1333 10.2667C11.8889 10.0222 11.5778 9.9 11.2 9.9C10.8222 9.9 10.5111 10.0222 10.2667 10.2667C10.0222 10.5111 9.9 10.8222 9.9 11.2C9.9 11.5778 10.0222 11.8889 10.2667 12.1333L14.1333 16L10.2667 19.8667C10.0222 20.1111 9.9 20.4222 9.9 20.8C9.9 21.1778 10.0222 21.4889 10.2667 21.7333C10.5111 21.9778 10.8222 22.1 11.2 22.1C11.5778 22.1 11.8889 21.9778 12.1333 21.7333L16 17.8667ZM16 29.3333C14.1556 29.3333 12.4222 28.9833 10.8 28.2833C9.17778 27.5833 7.76667 26.6333 6.56667 25.4333C5.36667 24.2333 4.41667 22.8222 3.71667 21.2C3.01667 19.5778 2.66667 17.8444 2.66667 16C2.66667 14.1556 3.01667 12.4222 3.71667 10.8C4.41667 9.17778 5.36667 7.76667 6.56667 6.56667C7.76667 5.36667 9.17778 4.41667 10.8 3.71667C12.4222 3.01667 14.1556 2.66667 16 2.66667C17.8444 2.66667 19.5778 3.01667 21.2 3.71667C22.8222 4.41667 24.2333 5.36667 25.4333 6.56667C26.6333 7.76667 27.5833 9.17778 28.2833 10.8C28.9833 12.4222 29.3333 14.1556 29.3333 16C29.3333 17.8444 28.9833 19.5778 28.2833 21.2C27.5833 22.8222 26.6333 24.2333 25.4333 25.4333C24.2333 26.6333 22.8222 27.5833 21.2 28.2833C19.5778 28.9833 17.8444 29.3333 16 29.3333Z"
                      fill="currentColor"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_477_346">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </button>
      </div>

      <div class="menu__content text-center">
        <div>
          <h2 class="text-2xl text-primary">Создатели:</h2>

          <div class="mt-10">
            <credits-list />
          </div>
        </div>

        <div class="mt-21">
          <h2 class="text-2xl text-primary">Выберите мага бездны</h2>

          <div class="mt-10">
            <themes-list />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CreditsList from "./CreditsList";
import ThemesList from "./ThemesList";
export default {
  name: "FooterMenu",
  data() {
    return {
      isActive: false,
    };
  },
  components: {
    CreditsList,
    ThemesList,
  },
  methods: {
    toggleMenu() {
      if (!this.isActive) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
};
</script>
<style lang="postcss">
.theme--thunder .menu__wrapper {
  @apply bg-thunder;
}
.theme--thunder .menu::before {
  @apply bg-modalBg-thunder;
}

.theme--water .menu__wrapper {
  @apply bg-water;
}
.theme--water .menu::before {
  @apply bg-modalBg-water;
}

.theme--fire .menu__wrapper {
  @apply bg-fire;
}
.theme--fire .menu::before {
  @apply bg-modalBg-fire;
}

.theme--ice .menu__wrapper {
  @apply bg-ice;
}
.theme--ice .menu::before {
  @apply bg-modalBg-ice;
}

.menu {
  @apply absolute pointer-events-none bottom-0 left-0 h-full w-full overflow-hidden;
}

.menu::before {
  content: "";
  @apply absolute top-0 left-0 w-full h-full opacity-0 transition-opacity duration-500;
}

.menu__wrapper {
  transition: max-height 500ms ease-in;
  @apply absolute bottom-0 left-0 pointer-events-auto max-h-16 w-full;
}

.menu__content {
  @apply px-19 pt-20 pb-23;
}

.menu.active {
  @apply max-h-full;
}

.menu.active::before {
  @apply opacity-100 pointer-events-auto;
}

.menu.active .menu__wrapper {
  @apply max-h-full;
}

.menu__action {
  @apply absolute right-[100px] -top-4;
}
</style>
