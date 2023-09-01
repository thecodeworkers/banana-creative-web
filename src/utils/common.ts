export const scrolling = (reference: any) => {
  if (reference) {
    const target = reference.current;
    // La medida de 112 es la medida del header, se le resta para que quede en el punto exacto
    window.scrollTo({ top: target.offsetTop - 112, behavior: 'smooth' });
  }
};

export const scrollTo = (ref: any, offset = 0) => {
  window.scrollTo({ top: ref.offsetTop - offset, behavior: 'smooth' });
};
