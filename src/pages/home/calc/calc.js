import refs from "../../../common/js/refs";

const calcFormRefs = {
  category: refs.calcForm.querySelector('.calc-form__category'),
  categoryList: refs.calcForm.querySelector('.calc-form__category-list'),
  titleCategory: refs.calcForm.querySelector('.calc-form__box-title.category'),
  imgBox: refs.calcForm.querySelector('.size__img-box'),
}

refs.calcForm.addEventListener('change', onCalcFormChange);

onFirstLoad();

function onFirstLoad() {
  const id = calcFormRefs.category.options[calcFormRefs.category.selectedIndex].value;
  const text = calcFormRefs.category.options[calcFormRefs.category.selectedIndex].text;
  const currentCatList = document.querySelector(`.calc-form__category-list[data-id="${id}"]`);
  const checkedInputCatList = currentCatList.querySelector('[checked]');
  const catItem = checkedInputCatList.closest('.calc-form__category-item');
  const imgSrc = catItem.querySelector('.calc-form__category-img').getAttribute('src');
  const imgAlt = catItem.querySelector('.calc-form__category-img').getAttribute('alt');

  calcFormRefs.imgBox.innerHTML = `
  <img
    class="calc-form__category-img"
    src="${imgSrc}"
    alt="${imgAlt}"
  />`;

  calcFormRefs.titleCategory.innerText = text;
  setIsHiddenClass('.calc-form__category-list', `[data-id="${id}"]`);
}

function onCalcFormChange(e) {
  const isCategorySelect = e.target.classList.contains('calc-form__category');
  const isCatItemInput = e.target.classList.contains('calc-form__category-input');

  if (isCategorySelect) {
    const id = e.target.options[e.target.selectedIndex].value;
    const text = e.target.options[e.target.selectedIndex].text;

    const currentCatList = document.querySelector(`.calc-form__category-list[data-id="${id}"]`);
    const checkedInputCatList = currentCatList.querySelector('[checked]');
    const catItem = checkedInputCatList.closest('.calc-form__category-item');
    const imgSrc = catItem.querySelector('.calc-form__category-img').getAttribute('src');
    const imgAlt = catItem.querySelector('.calc-form__category-img').getAttribute('alt');

    calcFormRefs.imgBox.innerHTML = `
    <img
      class="calc-form__category-img"
      src="${imgSrc}"
      alt="${imgAlt}"
    />`;

    calcFormRefs.titleCategory.innerText = text;
    setIsHiddenClass('.calc-form__category-list', `[data-id="${id}"]`);
  }

  if (isCatItemInput) {
    const catItem = e.target.closest('.calc-form__category-item');
    const imgSrc = catItem.querySelector('.calc-form__category-img').getAttribute('src');
    const imgAlt = catItem.querySelector('.calc-form__category-img').getAttribute('alt');

    calcFormRefs.imgBox.innerHTML = `
    <img
      class="calc-form__category-img"
      src="${imgSrc}"
      alt="${imgAlt}"
    />`;
  }
}

function setIsHiddenClass(querySelector, attr) {
  const currentEl = document.querySelector(`${querySelector}${attr}`);
  const elList = document.querySelectorAll(querySelector);

  for (const item of elList) {
    item.classList.add('isHidden');
  }

  if (currentEl) currentEl.classList.remove('isHidden');
}