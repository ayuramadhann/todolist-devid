<template>
    <div class="container mx-auto p-6">
      <div class="w-full mt-5 p-6 bg-white border rounded-lg shadow-md flex justify-between">
        <div class="flex items-center">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 ">
            <div class="w-4 h-4 rounded-full very-high ml-3"></div>
            <label for="default-checkbox" class="ml-2 text-xl">Daftar Belanja Bulanan</label>
            <button class="btn-edit ml-3"></button>
        </div>
        <button class="btn-delete ml-3"></button>
      </div>
      <!-- <div class="w-full mt-5 p-6 bg-white border rounded-lg shadow-md flex justify-between">
        <div class="flex items-center">
            <input id="default-checkbox" cheked type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 ">
            <div class="w-4 h-4 rounded-full very-high ml-3"></div>
            <label for="default-checkbox" class="ml-2 text-xl line-through text-gray-400">Daftar Belanja Bulanan</label>
            <button class="btn-edit ml-3"></button>
        </div>
        <button class="btn-delete ml-3"></button>
      </div> -->
    </div>
</template> 

<style>
.btn-delete {
    width: 24px;
    height: 24px;
    background-image: url("../../src/assets/icons/activity-item-delete-button.svg");
  }
.btn-edit {
    width: 24px;
    height: 24px;
    background-image: url("../../src/assets/icons/todo-title-edit-button.svg");
  }

  .very-high{
    background-color: #ED4C5C;
  }
  .high{
    background-color: #F8A541;
  }
  .medium{
    background-color: #00A790;
  }
  .low{
    background-color: #428BC1;
  }
  .very-low{
    background-color: #8942C1;
  }
</style>