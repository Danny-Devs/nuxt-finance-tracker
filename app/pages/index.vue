<script setup lang="ts">
import { transactionViewOptions } from '~/constants';

const selectedView = ref(transactionViewOptions[1]);

</script>

<template>
  <div>
    <section class="flex items-center justify-between mb-10">
      <h1 class="text-2xl font-extrabold">Summary</h1>
      <div>
        <USelectMenu
          v-model="selectedView"
          class="flex items-center gap-2"
          :items="transactionViewOptions"
          :search-input="false"
        />
      </div>
    </section>
  </div>
</template>
