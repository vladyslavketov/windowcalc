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

export default function setIsHiddenClass(querySelector, attr) {
  const currentEl = document.querySelector(`${querySelector}${attr}`);
  const elList = document.querySelectorAll(querySelector);

  for (const item of elList) {
    item.classList.add('isHidden');
  }

  if (currentEl) currentEl.classList.remove('isHidden');
}

export default function catImgMarkup(data) {
  if (!data) return;

  const { articleId, title, price, img } = data;

  return `
    <li class="cart-products__item">
      <article class="product-card" data-id="${articleId}">
        <img class="product-card__img" src="${img}" alt="${title}" width="320" height="240">
        <div class="product-card__desc">
          <h3 class="product-card__title">${title}</h3>
        </div>
        <div class="product-card__counter counter">
          <button class="counter__control" data-action="decrement" disabled>-</button>
          <p class="counter__value">1</p>
          <button class="counter__control" data-action="increment">+</button>
        </div>
        <div class="product-card__cost-wrap">
          <p class="product-card__cost" data-price="${price}">${price}</p>
          <span>грн</span>
        </div>
        <button class="product-card__btn--delete modal__close-btn" type="button" aria-label="Кнопка видалення картки товару">
          <span class="burger-line"></span>
          <span class="burger-line"></span>
        </button>
      </article>
    </li>
  `;
}