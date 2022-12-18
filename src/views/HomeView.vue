<script setup>
import AddActivity from '../components/layouts/AddActivity.vue'
import IllustrationAdd from '../components/illustrations/IllustrationAdd.vue'
import ActivityCard from '../components/ActivityCard.vue'
</script>

<template>
  <main>
    <AddActivity />
    <IllustrationAdd />
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <ActivityCard />
    </div>
  </main>
</template>
