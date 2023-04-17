const scrollOnLoad = () => {
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight, { behavior: 'smooth' });
  }, 1000);
};

export default scrollOnLoad;
