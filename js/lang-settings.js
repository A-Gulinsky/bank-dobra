import { langArr } from './lang.js'


const select = document.querySelector(`.change-lang`)

const allLang = ['en' , 'ua']

select.addEventListener(`change`, changeURLLanguage)

// change URL (lang)
function changeURLLanguage() {
  let lang = select.value
  location.href = window.location.pathname + '#' + lang
  location.reload()
}

function changeLanguage() {
  let hash = window.location.hash
  hash = hash.substring(1)

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname +`#ua`
    location.reload()
  }
  select.value = hash
  document.querySelector(`title`).innerHTML = langArr['logo'][hash]

  for (let key in langArr) {
    document.querySelector(`.lang-`+key).innerHTML = langArr[key][hash]
  }
}

changeLanguage()