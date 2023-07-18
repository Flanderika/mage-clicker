<template>
  <div class="font-primary theme theme--thunder flex flex-col h-screen">
    <header class="pt-10 text-primary text-center">
      <div
        class="text-base px-40 py-13 bg-main-gradient max-w-[1184px] mx-auto"
      >
        <h1 class="text-2xl">Добро пожаловать в крутилку мага!</h1>

        <p class="text-xl mt-4">
          Вас бесят маги бездны? <br />Поэтому мы сделали еще больше магов
          бездны!
        </p>
      </div>

      <div class="mt-4 px-40 pt-6 pb-5 bg-main-gradient max-w-[1184px] mx-auto">
        <p class="text-xl">Прокруток мага:</p>
        <p class="text-2xl mt-1">100</p>
      </div>
    </header>

    <main class="flex flex-grow justify-center pb-16">
      <div class="mt-auto w-full">
        <button
          class="button button--primary rounded-3xl px-4 py-3 w-full max-w-[392px] mx-auto"
        >
          Крутить мага!
        </button>
      </div>
    </main>

    <footer class="footer mt-[14px]">
      <div class="menu active">
        <div class="menu__wrapper">
          <div class="menu__action">
            <button class="button button--primary w-13 h-13 rounded-full">
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
            </button>
          </div>

          <div class="menu__content text-center">
            <div>
              <h2 class="text-2xl text-primary">Создатели:</h2>

              <div class="mt-10">
                <ul class="credits text-lg text-white">
                  <li class="credits__item">
                    <div class="credits__item-wrap">
                      <a href="" class="credits__link">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5 26C8.04416 26 2 21.0751 2 15C2 8.92487 8.04416 4 15.5 4C22.9558 4 29 8.92487 29 15C29 18.2578 27.2619 21.1849 24.5 23.1991C24.3333 23.466 24.1 24.3 24.5 25.5C24.7873 26.3619 25.2397 26.8937 25.5726 27.2849C25.819 27.5746 26 27.7873 26 28C26 28.5 22.3779 29.2956 20.5 27.5C19.3 26.3 18.8384 25.7851 18.7577 25.6776C17.7144 25.8882 16.6232 26 15.5 26ZM11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5ZM17 15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5ZM21.5 17C22.3284 17 23 16.3284 23 15.5C23 14.6716 22.3284 14 21.5 14C20.6716 14 20 14.6716 20 15.5C20 16.3284 20.6716 17 21.5 17Z"
                            fill="white"
                          />
                        </svg>
                        <span> Artist : Rishamon </span>
                      </a>
                    </div>
                  </li>

                  <li class="credits__item">
                    <div class="credits__item-wrap">
                      <a href="" class="credits__link">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5 26C8.04416 26 2 21.0751 2 15C2 8.92487 8.04416 4 15.5 4C22.9558 4 29 8.92487 29 15C29 18.2578 27.2619 21.1849 24.5 23.1991C24.3333 23.466 24.1 24.3 24.5 25.5C24.7873 26.3619 25.2397 26.8937 25.5726 27.2849C25.819 27.5746 26 27.7873 26 28C26 28.5 22.3779 29.2956 20.5 27.5C19.3 26.3 18.8384 25.7851 18.7577 25.6776C17.7144 25.8882 16.6232 26 15.5 26ZM11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5ZM17 15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5ZM21.5 17C22.3284 17 23 16.3284 23 15.5C23 14.6716 22.3284 14 21.5 14C20.6716 14 20 14.6716 20 15.5C20 16.3284 20.6716 17 21.5 17Z"
                            fill="white"
                          />
                        </svg>

                        <span> Developer : Flanderika </span>
                      </a>
                    </div>
                  </li>

                  <li class="credits__item">
                    <div class="credits__item-wrap">
                      <a href="" class="credits__link">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M15.5 26C8.04416 26 2 21.0751 2 15C2 8.92487 8.04416 4 15.5 4C22.9558 4 29 8.92487 29 15C29 18.2578 27.2619 21.1849 24.5 23.1991C24.3333 23.466 24.1 24.3 24.5 25.5C24.7873 26.3619 25.2397 26.8937 25.5726 27.2849C25.819 27.5746 26 27.7873 26 28C26 28.5 22.3779 29.2956 20.5 27.5C19.3 26.3 18.8384 25.7851 18.7577 25.6776C17.7144 25.8882 16.6232 26 15.5 26ZM11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5ZM17 15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5C14 14.6716 14.6716 14 15.5 14C16.3284 14 17 14.6716 17 15.5ZM21.5 17C22.3284 17 23 16.3284 23 15.5C23 14.6716 22.3284 14 21.5 14C20.6716 14 20 14.6716 20 15.5C20 16.3284 20.6716 17 21.5 17Z"
                            fill="white"
                          />
                        </svg>

                        <span> Ктоя я? : Alrexi </span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-21">
              <h2 class="text-2xl text-primary">Выберите мага бездны</h2>

              <div class="mt-10">
                <ul
                  class="flex flex-wrap justify-between gap-y-2 gap-x-5 text-lg"
                >
                  <li class="w-48">
                    <label for="radio1" class="radio">
                      <input
                        id="radio1"
                        name="pick-mage"
                        type="radio"
                        class="radio__input hidden"
                      />
                      <div class="radio__control">
                        <div class="radio__control-wrap">
                          <div class="radio__control-circle"></div>
                          <img
                            src="./assets/thunder-mage.png"
                            alt="thunder mage"
                            class="radio__control-img"
                          />
                        </div>
                        <div class="radio__control-button">Выбран</div>
                      </div>
                    </label>
                  </li>

                  <li class="w-48">
                    <label for="radio2" class="radio">
                      <input
                        id="radio2"
                        name="pick-mage"
                        type="radio"
                        class="radio__input hidden"
                      />
                      <div class="radio__control">
                        <div class="radio__control-wrap">
                          <div class="radio__control-circle"></div>
                          <img
                            src="./assets/water-mage.png"
                            alt="thunder mage"
                            class="radio__control-img"
                          />
                        </div>
                        <div class="radio__control-button">Выбран</div>
                      </div>
                    </label>
                  </li>

                  <li class="w-48">
                    <label for="radio3" class="radio">
                      <input
                        id="radio3"
                        name="pick-mage"
                        type="radio"
                        class="radio__input hidden"
                      />
                      <div class="radio__control">
                        <div class="radio__control-wrap">
                          <div class="radio__control-circle"></div>
                          <img
                            src="./assets/fire-mage.png"
                            alt="thunder mage"
                            class="radio__control-img"
                          />
                        </div>
                        <div class="radio__control-button">Выбран</div>
                      </div>
                    </label>
                  </li>

                  <li class="w-48">
                    <label for="radio4" class="radio">
                      <input
                        id="radio4"
                        name="pick-mage"
                        type="radio"
                        class="radio__input hidden"
                      />
                      <div class="radio__control">
                        <div class="radio__control-wrap">
                          <div class="radio__control-circle"></div>
                          <img
                            src="./assets/ice-mage.png"
                            alt="thunder mage"
                            class="radio__control-img"
                          />
                        </div>
                        <div class="radio__control-button">Выбран</div>
                      </div>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="postcss">
.theme {
  @apply bg-cover bg-no-repeat bg-center;
}
.theme--thunder {
  @apply bg-thunder bg-thunder-img;
}
.theme--thunder .menu__wrapper {
  @apply bg-thunder;
}

.button {
  @apply flex items-center justify-center shadow-custom transition-all duration-500;
}

.button--primary {
  @apply text-secondary bg-primary hover:bg-primaryLight hover:text-golden;
}
.menu {
  @apply flex flex-col h-16;
}

.menu::before {
  content: "";
  @apply opacity-0;
}
.menu__wrapper {
  @apply relative h-full;
}

.menu__content {
  @apply hidden px-19 pt-20 pb-23;
}

.menu.active {
  @apply absolute top-0 left-0 h-full w-full;
}

.menu.active .menu__wrapper {
  @apply h-auto;
}

.menu.active .menu__content {
  @apply block;
}

.menu.active::before {
  @apply flex-grow bg-modalBg opacity-100;
}

.menu__action {
  @apply absolute right-[100px] -top-4;
}

.credits {
  @apply flex justify-center flex-wrap gap-x-1 gap-y-2;
}

.credits__item-wrap {
  @apply w-[426px] border-2 border-solid rounded-l-3xl border-socialLink-bg;
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
