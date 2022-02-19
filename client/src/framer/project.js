export const mainImageWrap = {
  hidden: {
    height: '100vh',
    transition: { duration: 0.4, delay: 0 },
  },
  in: {
    height: document.body.offsetWidth > 400 ? '40vh' : '25vh',
    transition: { duration: 1.2, delay: 0.5 },
  },
  out: {
    height: '100vh',
    transition: { duration: 0.6, delay: 0 },
  },
};
