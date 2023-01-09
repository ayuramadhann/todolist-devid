<script setup>
  import {
    ref,
    onMounted,
    computed
  } from 'vue'
  import axios from 'axios'
  import {
    RouterLink
  } from 'vue-router'

  import IllustrationAdd from './illustrations/IllustrationAdd.vue';

  const activities = ref([])

  async function getActivityData() {
    try {

      const response = await axios.get(
        'https://todo.api.devcode.gethired.id/activity-groups?email=ayut.ramadhan@gmail.com')
      activities.value = response.data.data
      console.log(activities.value.length);
    } catch (error) {
      console.error(error);
    }
  }
  
  const lengthActivity = computed(() => {
    return activities.value.length > 0
  })

  onMounted(() => {
    getActivityData()
  })
</script>
<template>
  <div class="container p-6 mx-auto">
    <div class="flex flex-wrap -mx-1 lg:-mx-4" v-if="lengthActivity">
        <RouterLink class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" data-cy="activity-item-0" :to="{name: 'detail', params:{id:activity.id} }" v-for="activity in activities">
          <div class="p-6 bg-white border border-gray-200 rounded-lg shadow-md ">
            <div class="h-32">
              <h5 class="mb-2 text-xl font-semibold " data-cy="activity-item-title">{{ activity.title }}</h5>
            </div>
            <div class="flex justify-between activity-card-footer">
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400" data-cy="activity-date">
                {{ activity.created_at }}</p>
              <a href="" data-cy="activity-item-delete-button">
                <img src="../assets/icons/activity-item-delete-button.svg" alt="">
              </a>
            </div>
          </div>
        </RouterLink>
    </div>
    <div v-else>
      <IllustrationAdd />
    </div>
  </div>
</template>