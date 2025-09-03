import type { Directive, DirectiveBinding } from 'vue'


interface ClickOutsideElement extends HTMLElement {
  clickOutsideEvent?: (event: Event) => void
}

const clickOutside: Directive<ClickOutsideElement, (event: Event) => void> = {
  beforeMount(el: ClickOutsideElement, binding: DirectiveBinding<(event: Event) => void>) {
    el.clickOutsideEvent = function (event: Event) {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: ClickOutsideElement) {
    if (el.clickOutsideEvent) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    }
  },
}

export default clickOutside
