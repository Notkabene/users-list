export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('click-outside', {
    mounted (el, binding) {
      let { clickOutsideEvent } = el;
      clickOutsideEvent = (event: Event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.addEventListener("click", clickOutsideEvent);
    },
    unmounted (el) {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  });
});
