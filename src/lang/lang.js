import strings from './strings';

const langs = [
  'en',
  'de'
  ];
let curLang = navigator.language.split('-')[0];
!langs.includes(curLang) && (curLang = 'de');

const getStrings=(string, lang)=>{
  let res={};

    Object.entries(string).forEach(([key,value])=>
        res[key]= !value[lang]&& typeof value === 'object'
        ? getStrings(value, lang)
        : value[lang] || value
    );
    return res;
};

export default getStrings(strings, curLang);