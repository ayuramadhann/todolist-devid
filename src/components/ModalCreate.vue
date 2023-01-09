<script setup>
  function toggleModal() {
    document.getElementById('modal').classList.toggle('hidden')
  }
  function showDropdown(){
    // document.getElementById('dropdown-menu-priority').classList.toggle('hidden')
    const element = document.getElementById("dropdown-menu-priority");
    element.classList.remove("hidden");
  }
</script>
<template>
  <div class="fixed top-0 left-0 z-10 hidden w-full overflow-y-auto" id="modal">
    <div class="flex items-center justify-center px-4 pt-4 pb-20 text-center min-height-100vh sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-black opacity-30" />
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div
        class="inline-block w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl align-center sm:my-8 sm:align-middle sm:w-full lg:w-1/2"
        role="dialog" aria-modal="true" aria-labelledby="modal-headline">

        <div class="p-5 bg-white">
          <div class="flex justify-between mb-5 modal-header">
            <h4 class="text-2xl font-bold text-black">Tambah List Item</h4>
            <button class="text-2xl font-bold text-gray-500" @click="toggleModal">x</button>
          </div>
          <hr>
          <form action="" class="mt-5">
            <label class="block mb-2 text-sm font-medium text-gray-900">NAMA LIST ITEM</label>
            <input type="text" class="w-full p-2 mt-2 mb-3 border" placeholder="Tambahkan nama list item" />

            <label for="priority" class="block mb-2 text-sm font-medium text-gray-900">PRIOTITY</label>
            <div class="inline-block dropdown ">
              <button class="flex items-center w-40 p-3 mr-4 border" @click="showDropdown">
                <div class="w-4 h-4 mx-3 rounded-full very-high"></div>
                Very High
              </button>
              <ul class="w-40 bg-white divide-y rounded shadow" id="dropdown-menu-priority">
                <li class="flex items-center h-12">
                  <span class="w-4 h-4 mx-2 rounded-full very-high "></span>
                  <a class="" href="#">Very High</a>
                </li>
                <li class="flex items-center h-12">
                  <span class="w-4 h-4 mx-2 rounded-full high"></span>
                  <a class="" href="#">High</a>
                </li>
                <li class="flex items-center h-12">
                  <span class="w-4 h-4 mx-2 rounded-full medium"></span>
                  <a class="" href="#">Medium</a>
                </li>
                <li class="flex items-center h-12">
                  <span class="w-4 h-4 mx-2 rounded-full low"></span>
                  <a class="" href="#">Low</a>
                </li>
                <li class="flex items-center h-12">
                  <span class="w-4 h-4 mx-2 rounded-full very-low"></span>
                  <a class="" href="#">Very Low</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <hr>
        <div class="px-4 py-3 text-right modal-footer">
          <button type="button" class="px-8 py-3 text-white rounded-full bg-sky-500">Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>