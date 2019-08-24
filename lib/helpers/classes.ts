export const classes: (...names: Array<string | undefined>) => string = (...names) => {
  return names.filter(Boolean).join(' ');
};

export const scopeClass = (prefix: string)=>{
  return (className?: string)=>{
    if(className){
      return `${prefix}-${className}`
    } else {
      return `${prefix}`
    }
  }
};
