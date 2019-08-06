import { parseString }  from 'xml2js'

export const parser = (data) => {
  parseString(data, (err, result)=>{
    console.log(result);
  })
};


