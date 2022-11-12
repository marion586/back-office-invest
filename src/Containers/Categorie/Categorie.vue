<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import ButtonComponentVue from "@/components/Button/ButtonComponent.vue";
import Modal from "@/components/Modal/content/ModalComponent.vue.vue";
import Input from "@/components/Input/Input.vue";
import { ref, onMounted } from "vue";
import CardCat from "@/components/CardCat/CardCat.vue";
import categorieService from "@/services/categorie";
import Loader from "@/components/Loader/LoaderComp.vue";

let showModal = ref(false);
let categorie = ref([]);
const urlImgData = ref("");
const name = ref("");
const loader = ref(true);
const onload = ref(false);
console.log(categorie.value);
function handleModal() {
  showModal.value = !showModal.value;
}
function handleInput(e) {
  name.value = e.target.value;
}

async function handleAddFile(e) {
  if (e.target.files) {
    console.log(e);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target.result) {
        urlImgData.value = e.target.result;
        console.log(urlImgData.value, "value");
      }
    };
    await reader.readAsDataURL(file);
  }
}

function validateAdd() {
  let obj = { name: name.value, image: urlImgData.value };
  onload.value = true;
  addData(obj);
  categorie.value.push(obj);
  handleModal();
  onload.value = false;
}

async function getData() {
  const { data } = await categorieService.getCategorie();
  if (data) {
    data.forEach((element) => {
      let obj = { name: element.name, image: element.image };
      categorie.value.push(obj);
    });
  }
  loader.value = false;
}
async function addData(params) {
  const { data } = await categorieService.addCategorie(params);
  console.log(data);
}
onMounted(() => {
  getData();
});
</script>

<template>
  <Loader v-if="loader" />
  <div v-else class="categorie">
    <div class="categorie__btn">
      <ButtonComponentVue @on-click="handleModal">
        <span>Nouveau catégorie</span>
      </ButtonComponentVue>
    </div>

    <div id="myModal">
      <Modal
        :isShowModal="showModal"
        titleModal="Creation Nouveau Categorie"
        contentId="myModal"
        modalWidth="400px"
      >
        <template #content>
          <Input
            placeholder="categorie Name"
            label="Nom du categorie:"
            name="name"
            type="text"
            @onInput="handleInput"
          />

          <Input
            class="input-file"
            placeholder="categorie Name"
            label="Image"
            name="file"
            inputType="file"
            @onInput="handleAddFile"
          />
          <div class="button-section">
            <ButtonComponentVue typeButton="secondary">
              <span>Annuler</span>
            </ButtonComponentVue>

            <ButtonComponentVue typeButton="secondary" @on-click="validateAdd">
              <a-spin v-if="onload" /><span>Valider</span>
            </ButtonComponentVue>
          </div>
        </template>
      </Modal>
      <div class="categorie__content" v-if="categorie.length > 0">
        <CardCat :data="cat" v-for="cat in categorie" :key="cat.name" />
      </div>

      <div class="categorie__empty" v-else>
        <a-empty description="data vide" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.categorie {
  @apply flex-col gap-[20px];

  &__btn {
    @apply flex justify-end border-[1px] p-[20px] rounded-[5px] border-[#ccc];
  }
  &__content {
    @apply flex border-[1px] p-[20px] gap-[20px] rounded-[5px] border-[#ccc] mt-[20px] h-auto flex-wrap;
  }
  &__empty {
    @apply h-[50vh] flex items-center justify-center;
  }
  .input-file {
  }
}
.button-section {
  display: flex;
  justify-content: end;
  gap: 10px;
}
input {
  width: 100%;
}
</style>
