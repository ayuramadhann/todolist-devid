<script setup>
function toggleModal() {
  document.getElementById('modal').classList.toggle('hidden')
}

</script>
<template>
  <div class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden" id="modal">
    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-black opacity-30" />
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
      <div
        class="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full sm:w-full lg:w-1/2"
        role="dialog" aria-modal="true" aria-labelledby="modal-headline">

        <div class="bg-white p-5">
          <div class="modal-header flex justify-between mb-5">
            <h4 class="text-2xl text-black font-bold">Tambah List Item</h4>
            <button class="text-2xl text-gray-500 font-bold" @click="toggleModal">x</button>
          </div>
          <hr>
          <form action="" class="mt-5">
            <label class="block mb-2 text-sm font-medium text-gray-900">NAMA LIST ITEM</label>
            <input type="text" class="w-full border p-2 mt-2 mb-3" placeholder="Tambahkan nama list item" />

            <label for="priority" class="block mb-2 text-sm font-medium text-gray-900">PRIOTITY</label>
            <div class="dropdown inline-block ">
              <button class="border mr-4 p-3 w-40 flex items-center">
                <div class="w-4 h-4 rounded-full very-high mx-3"></div>
                Very High
              </button>
              <ul class="dropdown-menu-priority hidden w-40 bg-white rounded divide-y shadow">
                <li class="h-12 flex items-center">
                  <span class="w-4 h-4 rounded-full very-high mx-2 "></span>
                  <a class="" href="#">Very High</a>
                </li>
                <li class="h-12 flex items-center">
                  <span class="w-4 h-4 rounded-full high mx-2"></span>
                  <a class="" href="#">High</a>
                </li>
                <li class="h-12 flex items-center">
                  <span class="w-4 h-4 rounded-full medium mx-2"></span>
                  <a class="" href="#">Medium</a>
                </li>
                <li class="h-12 flex items-center">
                  <span class="w-4 h-4 rounded-full low mx-2"></span>
                  <a class="" href="#">Low</a>
                </li>
                <li class="h-12 flex items-center">
                  <span class="w-4 h-4 rounded-full very-low mx-2"></span>
                  <a class="" href="#">Very Low</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <hr>
        <div class="modal-footer px-4 py-3 text-right">
          <button type="button" class="text-white bg-sky-500 rounded-full px-8 py-3">Simpan</button>
        </div>
      </div>
    </div>
  </div>
</template>
