'use strict';

const projects = {
  kasbhoosh: {
    title: 'کسب‌هوش', category: 'دستیار هوشمند مدیریت کسب‌وکار', status: 'در حال توسعه',
    description: 'کسب‌هوش حاصل پیوند تجربه من در عملیات کسب‌وکار با علاقه‌ام به فناوری است. هدف این پروژه کمک به صاحبان کسب‌وکارهای کوچک برای ثبت راحت‌تر فعالیت‌های روزانه و دیدن تصویری روشن‌تر از فروش، موجودی و وضعیت مالی است. نسخه اولیه با تمرکز بر فروشگاه‌های کوچک پوشاک در حال توسعه است و قابلیت‌های پیشرفته هوشمند بخشی از مسیر توسعه محصول هستند.',
    focus: 'تجربه ساده برای صاحب کسب‌وکار، ثبت فعالیت‌ها و گزارش مدیریتی', role: 'ایده‌پردازی، تعریف نیازمندی‌ها، طراحی تجربه و هدایت توسعه با ابزارهای هوش مصنوعی'
  },
  nozhe: {
    title: 'نوژه | NOZHE', category: 'فروشگاه پوشاک زنانه و تجربه هوشمند', status: 'در مرحله طراحی محصول',
    description: 'نوژه ایده یک برند پوشاک زنانه با هویت بصری مینیمال، زنانه و معاصر است. این پروژه علاوه بر تجربه خرید آنلاین، چشم‌اندازی برای پیشنهاد استایل و پرو مجازی دارد. قابلیت‌های هوشمند هنوز بخشی از برنامه توسعه آینده‌اند و نباید آن‌ها را ویژگی فعال فروشگاه دانست.',
    focus: 'هویت برند، تجربه خرید، معماری صفحات و برنامه قابلیت‌های آینده', role: 'ایده‌پردازی برند، تعیین مسیر محصول و طراحی اولیه'
  },
  mahpoosh: {
    title: 'ماهپوش', category: 'وب‌سایت فروشگاهی فارسی', status: 'طراحی و بهبود صفحه اصلی',
    description: 'ماهپوش پروژه طراحی صفحه اصلی یک فروشگاه پوشاک زنانه فارسی است. تمرکز فعلی آن روی هماهنگی عکس‌ها با دسته‌بندی‌ها، ساختار درست کارت محصول، طراحی بنر اصلی و خوانایی و جذابیت بصری است. بخش‌هایی از تجربه خرید کامل هنوز در برنامه توسعه قرار دارند.',
    focus: 'رابط کاربری فارسی، دسته‌بندی کالا، بنر، کارت محصول و نمایش موبایل', role: 'طراحی و هدایت پیاده‌سازی مرحله‌ای با ابزارهای هوش مصنوعی'
  },
  academy: {
    title: 'آکادمی هیرو', category: 'وب‌اپلیکیشن آموزشی', status: 'برنامه‌ریزی و طراحی نسخه اولیه',
    description: 'آکادمی هیرو ایده یک محیط آموزشی با فضاهای مجزای دانش‌آموز، مشاور، والدین و مدیر است. در طرح اولیه، ثبت مطالعه، برنامه‌ریزی، پیگیری آزمون‌ها و مشاهده گزارش‌های پیشرفت پیش‌بینی شده است. این موارد در حال طراحی و تعریف نسخه اولیه‌اند.',
    focus: 'نقش‌های کاربری، برنامه مطالعه، گزارش پیشرفت و طراحی پنل‌ها', role: 'تحلیل نیاز، مشخص‌کردن بخش‌های محصول و همراهی در برنامه‌ریزی ساخت'
  },
  ziarat: {
    title: 'سامانه سفر زیارتی', category: 'طراحی سامانه رزرو خدمات سفر', status: 'طرح و نمونه اولیه',
    description: 'طرح اولیه یک سایت فارسی برای خدمات سفر زیارتی از تهران به شهرهایی مانند مشهد، قم، کربلا و مکه است. ایده اصلی ساده‌ترکردن انتخاب مقصد و تاریخ شمسی و ارائه مسیرهای شفاف برای خدماتی مانند اقامت و حمل‌ونقل است. این نسخه نمای طراحی‌شده و نمونه اولیه است، نه یک سامانه رزرو متصل و عملیاتی.',
    focus: 'تجربه جست‌وجوی خدمات سفر، فرم‌های فارسی و تاریخ شمسی', role: 'تعریف ایده و طراحی تجربه اولیه سایت'
  },
  podcast: {
    title: 'خانه پادکست', category: 'سایت محتوای صوتی', status: 'مرحله ایده و طراحی',
    description: 'طرح یک سایت فارسی برای انتشار مجموعه‌های صوتی و شنیدن پادکست؛ با درنظرگرفتن دو نوع محتوای رایگان و اشتراکی. ساختار صفحات و تجربه شنیدن در مرحله طراحی است و سیستم پرداخت و انتشار هنوز به‌عنوان امکانات آماده معرفی نمی‌شوند.',
    focus: 'معرفی پادکست، فهرست قسمت‌ها، پخش صوت و مدل محتوای رایگان و اشتراکی', role: 'تعریف نیاز و طراحی اولیه وب‌سایت'
  }
};

const menu = document.getElementById('mainNav');
const toggle = document.getElementById('menuToggle');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'بستن منو' : 'بازکردن منو');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'بازکردن منو');
  }));
  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const filterButtons = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('.project-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  filterButtons.forEach(b => {
    const isSelected = b === button;
    b.classList.toggle('active', isSelected);
    b.setAttribute('aria-pressed', String(isSelected));
  });
  cards.forEach(card => {card.hidden = filter !== 'all' && !card.dataset.category.split(' ').includes(filter)});
}));

const modal = document.getElementById('projectModal');
const modalDialog = modal?.querySelector('.modal-dialog');
const closeModalButton = document.getElementById('modalClose');
let lastFocused = null;
function closeModal() {
  if (!modal || modal.getAttribute('aria-hidden') === 'true') return;
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
  if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
}
function openModal(key) {
  const item = projects[key];
  if (!item || !modal) return;
  lastFocused = document.activeElement;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalCategory').textContent = item.category;
  document.getElementById('modalStatus').textContent = 'وضعیت پروژه: ' + item.status;
  document.getElementById('modalDescription').textContent = item.description;
  const info = document.getElementById('modalInfo');
  info.replaceChildren();
  [['تمرکز پروژه', item.focus], ['نقش من', item.role]].forEach(([label,value]) => {
    const row = document.createElement('div');
    const small = document.createElement('small');
    const strong = document.createElement('strong');
    small.textContent = label;
    strong.textContent = value;
    row.append(small,strong);
    info.append(row);
  });
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  closeModalButton.focus();
}
document.querySelectorAll('.detail-trigger').forEach(button => button.addEventListener('click', () => openModal(button.dataset.project)));
closeModalButton?.addEventListener('click', closeModal);
modal?.querySelector('[data-close-modal]')?.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeModal();
  if(e.key === 'Tab' && modal?.getAttribute('aria-hidden') === 'false') {
    const tabbables = [...modalDialog.querySelectorAll('button:not([disabled]), a[href], input:not([disabled])')];
    if (!tabbables.length) return;
    if(e.shiftKey && document.activeElement === tabbables[0]) {e.preventDefault();tabbables[tabbables.length-1].focus()}
    else if(!e.shiftKey && document.activeElement === tabbables[tabbables.length-1]) {e.preventDefault();tabbables[0].focus()}
  }
});

const copyEmail = document.getElementById('copyEmail');
copyEmail?.addEventListener('click', async () => {
  const email = 'mahsaneshat106@gmail.com';
  const original = copyEmail.innerHTML;
  try {
    if(navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
    else {
      const input = document.createElement('textarea');
      input.value = email;
      input.setAttribute('readonly','');
      input.style.position = 'fixed';
      input.style.opacity = '0';
      document.body.appendChild(input);
      input.select();
      if(!document.execCommand('copy')) throw new Error('Copy unsuccessful');
      input.remove();
    }
    copyEmail.textContent = 'ایمیل کپی شد ✓';
  } catch (_e) {
    copyEmail.textContent = 'کپی نشد؛ از لینک ایمیل استفاده کنید';
  }
  setTimeout(() => {copyEmail.innerHTML=original}, 2600);
});

document.getElementById('year').textContent = new Date().getFullYear().toString();
const progress = document.getElementById('progressBar');
let waiting = false;
function handleScroll() {
  if(waiting) return;
  waiting = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max * 100) : 0;
    progress.style.width = `${Math.min(100,Math.max(0,value))}%`;
    waiting = false;
  });
}
window.addEventListener('scroll',handleScroll,{passive:true});
handleScroll();
