<template>
  <ul class="credits text-lg text-white">
    <li class="credits__item" v-for="user in users" :key="user.index">
      <div class="credits__item-wrap">
        <a :href="user.url" class="credits__link">
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
          <span> {{ user.position }} : {{ user.name }} </span>
        </a>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "CreditsList",
  components: {},
  data() {
    return {
      users: [
        {
          name: "Rishamon",
          position: "Artist",
          url: "https://vk.com/rishamon",
        },
        {
          name: "Flanderika",
          position: "Developer",
          url: "https://github.com/Flanderika",
        },
        {
          name: "Ктоя я?",
          position: "Alrexi",
          url: "https://vk.com/id204459514",
        },
      ],
    };
  },
};
</script>
<style lang="postcss">
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
</style>
