const NavData = [
  {
    id: 0,
    title: 'Главная',
    shortTitle: 'Главная',
    link: '/',
    icon: 'material-symbols:home-rounded',
    bg: ''
  },
  {
    id: 1,
    title: 'Смартфоны',
    shortTitle: 'Каталог',
    link: '/catalog',
    icon: 'tabler:category',
    bg: ''
  },
  {
    id: 2,
    title: 'Ремонтные сервисы',
    shortTitle: 'Сервисы',
    link: '/services',
    icon: 'fluent:wrench-screwdriver-24-regular',
    bg: ''
  },
  // {
  //   id: 3,
  //   title: 'Быстрые продажи',
  //   shortTitle: 'Продажа',
  //   link: '/hot-sales',
  //   icon: 'material-symbols:local-fire-department-rounded',
  //   bg: ''
  // },
  // {
  //   id: 4,
  //   title: 'iPhone под заказ',
  //   shortTitle: 'Заказать',
  //   link: '/on-order',
  //   icon: 'material-symbols:border-color-outline',
  //   bg: ''
  // },
  {
    id: 5,
    title: 'Профиль',
    shortTitle: 'Профиль',
    link: '/lk',
    icon: 'ic:baseline-account-circle',
    bg: ''
  },
]

const lkNavData = [
  {
    id: 0,
    title: "Личный кабинет",
    component: "lk",
  },
  {
    id: 1,
    title: "Заказы",
    component: "order",
  },
]

export { 
  NavData, 
  lkNavData
}