export const isEmptyObj: (p1: any)=>boolean = (obj)=>{
  return Object.keys(obj).length === 0;
};

export const helps: (...names: Array<string | undefined>) => string = (...names) => {
  return names.filter(Boolean).join(' ');
};

export const scopeClass = (prefix: string)=>{
  return (className?: string | {[key: string]: boolean})=>{
    if(typeof className === 'string'){
      if(className){
        return `${prefix}-${className}`
      } else {
        return `${prefix}`
      }
    } else {
      if(className){
        let computedClassName = Object.keys(className).filter((classNameKey)=>{
          return className[classNameKey];
        }).join('-');
        return `${prefix}-${computedClassName}`
      } else {
        return `${prefix}`
      }
    }

  }
};

export const flatten: (p1: Array<any>)=>Array<any> = (array)=>{
  const resultArray: Array<any>= [];

  array.forEach((item)=>{
    if(item instanceof Array){
      resultArray.push(...item);
    } else {
      resultArray.push(item);
    }
  });

  return resultArray;
};

export const objectValueToArray: (p1: Object)=>Array<any> = (obj)=> {
  const resultArray: Array<any> = [];
  Object.keys(obj).map((objName: string)=>{
    // @ts-ignore
    resultArray.push(obj[objName]);
  });
  return resultArray;
};




