import { ref, type Ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

type RevealOptions = {
  rootMargin?: string
  threshold?: number | number[]
}

/**
 * Scroll-reveal helper (robust): it reveals ONCE when a sentinel enters viewport.
 * We mount the animated content only after reveal, so @vueuse/motion can run its enter animation on mount.
 */
export function useRevealMotion(options: RevealOptions = {}) {
  const sentinel = ref<HTMLElement | null>(null)
  const revealed = ref(false)

  const { stop } = useIntersectionObserver(
    sentinel as Ref<HTMLElement | null>,
    ([entry]) => {
      if (entry?.isIntersecting) {
        revealed.value = true
        stop()
      }
    },
    {
      rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      threshold: options.threshold ?? 0.15,
    },
  )

  return { sentinel, revealed }
}


