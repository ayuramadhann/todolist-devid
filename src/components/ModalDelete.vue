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
        <div class="p-5 modal-content grid justify-items-center">
          <img src="../assets/icons/icon-warning-delete.svg" alt="">
          <p class="mt-5">Apakah anda yakin menghapus activity “Meeting dengan Client”?</p>
        </div>
        <hr>
        <div class="modal-footer px-4 py-3 text-center">
          <button type="button" class="text-black bg-gray-200 rounded-full px-8 py-3 mr-3">Batal</button>
          <button type="button" class="text-white bg-red-500 rounded-full px-8 py-3 ml-3">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>
