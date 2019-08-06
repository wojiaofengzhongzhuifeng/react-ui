const classes: (...names: Array<string | undefined>) => string = (...names) => {
  return names.filter(Boolean).join(' ');
};

export default classes;
