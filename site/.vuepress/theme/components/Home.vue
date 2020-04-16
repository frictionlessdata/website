<template>
  <div class="banner">
    <main class="main-section" aria-labelledby="main-title">
      <div class="content flex">
        <div class="tagline flex-1 sm:flex-1 md:flex-auto">
          <h3 class="text-4xl font-thin">The progressive data toolkit</h3>
          <p class="text-xl font-thin w-9/12 pb-5">{{ data.tagline || $description || 'Welcome to your VuePress site' }}</p>
          <a
            class="bg-secondary hover:bg-green-700 text-white outline-none border-none cursor-pointer font-medium text-sm py-4 px-6 rounded-full"
            href="/about/"
          >Why Frictionless Data?</a>
          <a
            class="bg-transparent hover:bg-green-700 text-green-500 cursor-pointer outline-none border border-solid border-secondary hover:text-white text-sm font-medium py-4 px-6 hover:border-transparent rounded-full shadow-lg"
            href="/guide/"
          >Get Started</a>
        </div>

        <div class="box flex-1 sm:flex-1 md:flex-auto">
          <img v-if="data.heroImage" :src="$withBase(data.heroImage)" height="500" :alt="data.heroAlt || 'toolbox'" />
        </div>
      </div>

      <div class="mb-5">
        <h3 class="text-center text-3xl">Widely Adopted and Used By</h3>
        <div class="flex items-center justify-around mx-40">
          <img src="/img/home/pandas.png" alt="Pandas" />
          <img src="img/home/kaggle.png" alt="Kaggle" />
          <img src="/img/home/openrefine.png" alt="Open Refine" />
          <img src="/img/home/data-gov-uk.png" alt="Data.uk" />
          <img src="/img/home/18f.png" alt="18F" />
          <img src="/img/home/data-gouv-fr.png" alt="Data.fr" />
        </div>
      </div>

      <section class="features bg-secondary text-white" v-if="data.features && data.features.length">
      <div
        class="feature"
        v-for="(feature, index) in data.features"
        :key="index"
      >
        <h3 class="text-3xl">{{ feature.title }}</h3>
        <p class="text-lg">{{ feature.details }}</p>
      </div>
    </section>
    </main>
    <Content class="theme-default-content custom" />
  </div>
</template>

<script>
import Vue from "vue";

export default {

  computed: {
    data() {
      return this.$page.frontmatter;
    },
  }
};
</script>

<style lang="stylus">
.hero {
  background: radial-gradient(70% 70% at 50% 100%, #e8e8e8 0%, #fafafa 100%);
}

.content {
  padding-top: 7rem;
  margin: 0 4rem;
}

.features {
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature {
  margin: 0 4rem;
}

@media (max-width: $MQMobile) {
  .content {
    padding-top: 4rem;
    margin: 0 0.5rem;
    flex-direction: row;
    justify-content: start;
  }

  .home {
    .features {
      flex-direction: column;
    }

    .feature {
      max-width: 100%;
      padding: 0 0;
    }
  }
}

@media (max-width: $MQMobileNarrow) {
  .content {
    padding-top: 4rem;
    margin: 0 0.5rem;
    flex-direction: row;
    justify-content: start;
  }

  .feature {
    h2 {
      font-size: 1.25rem;
    }
  }
}
</style>