<script setup>
  import {
    ref,
    onMounted,
  } from 'vue'
  import axios from 'axios'
  const activities = ref([])

  async function storeActivity() {
    try {
      await axios.post(
        'https://todo.api.devcode.gethired.id/activity-groups',{
          title: "New Activity",
          email: "ayut.ramadhan@gmail.com"
        })
    } catch (error) {
      console.error(error);
    }
  }
</script>

<template>
  <div class="container flex flex-wrap justify-between p-6 mx-auto mt-6">
    <h4 class="text-2xl font-bold text-black" data-cy="activity-title">Activity</h4>
    <button type="button" class="flex px-8 py-3 text-lg font-medium text-center text-white rounded-full bg-sky-500" data-cy="activity-add-button" @click="storeActivity()"> <span><img src="../../assets/icons/icon-plus.svg" alt=""></span> Tambah</button>
  </div>
</template>
