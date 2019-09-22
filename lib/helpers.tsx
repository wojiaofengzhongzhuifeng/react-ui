export const isEmptyObj: (p1: any)=>boolean = (obj)=>{
  return Object.keys(obj).length === 0;
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



