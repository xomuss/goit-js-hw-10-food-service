import dishes from '../data/menu.json';
import itemTemplates from '../templates/menu.hbs';
import themes from './themes';

const refs = {
  menuList: document.querySelector('.js-menu'),
  body: document.body,
  switcher: document.querySelector('#theme-switch-toggle'),
};

const markup = itemTemplates(dishes);
refs.menuList.insertAdjacentHTML('beforeend', markup);

refs.switcher.checked = localStorage.getItem('theme') === themes.DARK;

const saveSettings =
  localStorage.getItem('theme') === null
    ? themes.LIGHT
    : localStorage.getItem('theme');
refs.body.classList.add(saveSettings);

const changeClass = (add, rem) => {
  refs.body.classList.remove(rem);
  refs.body.classList.add(add);
  localStorage.setItem('theme', add);
};

refs.switcher.addEventListener('change', ({ target }) => {
  if (target.checked) {
    changeClass(themes.DARK, themes.LIGHT);
  } else {
    changeClass(themes.LIGHT, themes.DARK);
  }
});
