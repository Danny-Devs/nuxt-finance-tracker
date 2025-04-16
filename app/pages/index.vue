<script setup lang="ts">
import { transactionView } from '~/constants';

const selectedView = ref(transactionView[1]);

</script>

<template>
  <div>
    <section class="flex items-center justify-between mb-10">
      <h1 class="text-2xl font-extrabold">Summary</h1>
      <div>
        <USelectMenu
          v-model="selectedView"
          class="flex items-center gap-2"
          :items="transactionView"
          :search-input="false"
        />
      </div>
    </section>
  </div>
</template>
