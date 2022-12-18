<script setup>
import ModalCreate from '../ModalCreate.vue'

function toggleModal() {
  document.getElementById('modal').classList.toggle('hidden')
}

</script>

<template>
  <div class="container flex flex-wrap justify-between mx-auto mt-6 p-6">
    <div class="title-header flex items-center">
      <RouterLink to="/">
        <div class="btn-back mr-5"></div>
      </RouterLink>
      <h4 class="text-2xl text-black font-bold " contenteditable="true">Activity</h4>
      <button class="btn-edit ml-3"></button>
    </div>

    <div class="flex items-center">
      <div class="dropdown inline-block relative">
        <button class="rounded-full border mr-4 p-3">
          <div class="btn-sort"></div>
        </button>
        <ul class="dropdown-menu w-40 absolute hidden bg-white rounded divide-y shadow">
          <li class="h-12 flex items-center">
            <span class="icon-sort-newest mx-2 "></span>
            <a class="" href="#">Terbaru</a>
          </li>
          <li class="h-12 flex items-center">
            <span class="icon-sort-latest mx-2"></span>
            <a class="" href="#">Terlama</a>
          </li>
          <li class="h-12 flex items-center">
            <span class="icon-sort-ascending-alphabet mx-2"></span>
            <a class="" href="#">A-Z</a>
          </li>
          <li class="h-12 flex items-center">
            <span class="icon-sort-descending-alphabet mx-2"></span>
            <a class="" href="#">Z-A</a>
          </li>
          <li class="h-12 flex items-center">
            <span class="icon-sort-new mx-2"></span>
            <a class="" href="#">Belum Selesai</a>
          </li>
        </ul>
      </div>

      <button type="button" class="flex text-white bg-sky-500 font-medium rounded-full text-lg px-8 py-3 text-center" @click="toggleModal">
        <span><img src="../../assets/icons/icon-plus.svg" alt=""></span> Tambah</button>
    </div>

    <ModalCreate/>
    
  </div>
</template>

<style scoped>
  .dropdown:hover .dropdown-menu {
    display: block;
  }

  .btn-back {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/icon-arrow-left.svg");
  }

  .btn-edit {
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/todo-title-edit-button.svg");
  }

  .btn-sort {
    width: 24px;
    height: 24px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/icon-sort-asc.svg");
  }
  .icon-sort-new{
    width: 15px;
    height: 15px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/icon-sort-asc.svg");
  }
  .icon-sort-newest{
    width: 15px;
    height: 15px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/icon-sort-newest.svg");
  }
  .icon-sort-latest{
    width: 15px;
    height: 15px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/icon-sort-latest.svg");
  }
  .icon-sort-ascending-alphabet{
    width: 15px;
    height: 15px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/icon-sort-ascending-alphabet.svg");
  }
  .icon-sort-descending-alphabet{
    width: 15px;
    height: 15px;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    background-image: url("../../assets/icons/icon-sort-descending-alphabet.svg");
  }

  
</style>