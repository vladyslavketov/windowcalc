var e={body:document.querySelector("body"),header:document.querySelector("header"),loader:document.querySelector(".loader"),modal:document.querySelector(".modal"),modalCloseBtn:document.querySelector(".backdrop .modal__close-btn"),pagination:document.querySelector("div.pagination"),btnUp:document.querySelector(".btn-up"),calcForm:document.querySelector(".calc-form")};window.addEventListener("load",(()=>{window.scrollTo(0,0),e.body.classList.remove("isLoading"),e.loader.parentElement.classList.add("isHidden")})),window.addEventListener("scroll",(function(){const t=window.pageYOffset;t>40?(e.body.classList.add("isScrolling"),t>500?e.btnUp.classList.remove("isHidden"):t<=500&&e.btnUp.classList.add("isHidden")):t<=40&&e.body.classList.remove("isScrolling")})),e.btnUp.addEventListener("click",(function(){window.scrollTo(0,0)})),e.calcForm.addEventListener("change",(function(e){if(e.target.classList.contains("calc-form__category")){const c=e.target.options[e.target.selectedIndex].value,r=e.target.options[e.target.selectedIndex].text;t.titleCategory.innerText=r,o(".calc-form__category-list",`[data-id="${c}"]`);const a=document.querySelector(`.calc-form__category-list[data-id="${c}"]`);console.log(a)}}));const t={category:e.calcForm.querySelector(".calc-form__category"),categoryList:e.calcForm.querySelector(".calc-form__category-list"),titleCategory:e.calcForm.querySelector(".calc-form__box-title.category")};function o(e,t){const o=document.querySelector(`${e}${t}`),c=document.querySelectorAll(e);for(const e of c)e.classList.add("isHidden");o&&o.classList.remove("isHidden")}!function(){const e=t.category.options[t.category.selectedIndex].value,c=t.category.options[t.category.selectedIndex].text;console.log("id",e,"text",c),t.titleCategory.innerText=c,o(".calc-form__category-list",`[data-id="${e}"]`)}();
//# sourceMappingURL=index.1daae28b.js.map
