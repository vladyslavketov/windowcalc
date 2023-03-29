import refs from "../../../common/js/refs";

refs.calcForm.addEventListener('change', onCalcFormChange);

const calcFormRefs = {
  category: refs.calcForm.querySelector('.calc-form__category'),
  categoryList: refs.calcForm.querySelector('.calc-form__category-list'),
  titleCategory: refs.calcForm.querySelector('.calc-form__box-title.category'),
}

// const categoryList = calcFormRefs.categoryList;
// console.log(categoryList);
// console.log(cat.value);
// console.log(cat.options[cat.selectedIndex].value);
// console.log(cat.options[cat.selectedIndex].text);
onFirstLoad();

function onFirstLoad() {
  const id = calcFormRefs.category.options[calcFormRefs.category.selectedIndex].value;
  const text = calcFormRefs.category.options[calcFormRefs.category.selectedIndex].text;
  console.log("id", id, "text", text);

  calcFormRefs.titleCategory.innerText = text;
  setIsHiddenClass('.calc-form__category-list', `[data-id="${id}"]`);
}


function onCalcFormChange(e) {
  const isCategorySelect = e.target.classList.contains('calc-form__category');

  if (isCategorySelect) {
    const id = e.target.options[e.target.selectedIndex].value;
    const text = e.target.options[e.target.selectedIndex].text;

    calcFormRefs.titleCategory.innerText = text;
    setIsHiddenClass('.calc-form__category-list', `[data-id="${id}"]`);

    const currentList = document.querySelector(`.calc-form__category-list[data-id="${id}"]`);    
    console.log(currentList);
  }
}

export default function setIsHiddenClass(querySelector, attr) {
  const currentEl = document.querySelector(`${querySelector}${attr}`);
  const elList = document.querySelectorAll(querySelector);

  for (const item of elList) {
    item.classList.add('isHidden');
  }

  if (currentEl) currentEl.classList.remove('isHidden');
}