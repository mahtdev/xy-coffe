// Shared utility functions

export const smoothScrollTo = (targetId: string, offset: number = 80): void => {
  const target = document.querySelector(targetId) as HTMLElement;
  if (target) {
    const offsetTop = target.offsetTop - offset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }
): IntersectionObserver => {
  return new IntersectionObserver(callback, options);
};

export const addScrollAnimation = (elements: Element[]): void => {
  const observer = createIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
};
