const root = document.documentElement;
const themeButton = document.querySelector('#themeButton');
const menuButton = document.querySelector('#menuButton');
const sidebar = document.querySelector('#sidebar');
const searchInput = document.querySelector('#searchInput');
const progressBar = document.querySelector('#progressBar');
const progressText = document.querySelector('#progressText');
const backToTop = document.querySelector('#backToTop');
const imageDialog = document.querySelector('#imageDialog');

const savedTheme = localStorage.getItem('capstonebook-guide-theme');
if (savedTheme) root.dataset.theme = savedTheme;

themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  localStorage.setItem('capstonebook-guide-theme', next);
});

menuButton?.addEventListener('click', () => sidebar.classList.toggle('open'));
sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => sidebar.classList.remove('open'));
});

document.querySelectorAll('pre').forEach((pre) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-button';
  button.textContent = 'Sao chép';
  button.addEventListener('click', async () => {
    const code = pre.querySelector('code')?.innerText ?? pre.innerText;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.append(textArea);
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
    } catch {
      button.textContent = 'Chọn và Ctrl+C';
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(pre.querySelector('code') ?? pre);
      selection.removeAllRanges();
      selection.addRange(range);
      window.setTimeout(() => { button.textContent = 'Sao chép'; }, 2400);
      return;
    }
    button.textContent = 'Đã chép';
    button.classList.add('copied');
    window.setTimeout(() => {
      button.textContent = 'Sao chép';
      button.classList.remove('copied');
    }, 1600);
  });
  pre.append(button);
});

const searchable = [...document.querySelectorAll('.searchable')];
let searchSummary;

function runSearch() {
  const query = searchInput.value.trim().toLocaleLowerCase('vi');
  let visible = 0;
  searchable.forEach((item) => {
    const haystack = `${item.dataset.search ?? ''} ${item.innerText}`.toLocaleLowerCase('vi');
    const match = !query || haystack.includes(query);
    item.classList.toggle('search-hidden', !match);
    if (match) visible += 1;
  });

  searchSummary?.remove();
  if (query) {
    searchSummary = document.createElement('div');
    searchSummary.className = 'search-summary';
    searchSummary.textContent = visible
      ? `Tìm thấy ${visible} mục liên quan đến “${searchInput.value.trim()}”.`
      : `Không tìm thấy “${searchInput.value.trim()}”. Thử từ khóa: EC2, Atlas, CORS, SSH, Vercel.`;
    document.querySelector('main').prepend(searchSummary);
  }
}

searchInput.addEventListener('input', runSearch);
document.addEventListener('keydown', (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape') {
    searchInput.value = '';
    runSearch();
    searchInput.blur();
    sidebar.classList.remove('open');
  }
});

const navLinks = [...sidebar.querySelectorAll('a[href^="#"]')];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver((entries) => {
  const active = entries
    .filter((entry) => entry.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!active) return;
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${active.target.id}`);
  });
}, { rootMargin: '-20% 0px -65% 0px', threshold: [0, .1, .5] });
observedSections.forEach((section) => observer.observe(section));

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const percent = max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0;
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${percent}%`;
  backToTop.classList.toggle('visible', window.scrollY > 700);
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.shot img').forEach((img) => {
  img.addEventListener('click', () => {
    const dialogImage = imageDialog.querySelector('img');
    dialogImage.src = img.src;
    dialogImage.alt = img.alt;
    imageDialog.querySelector('p').textContent = img.closest('figure')?.querySelector('figcaption')?.innerText ?? img.alt;
    imageDialog.showModal();
  });
});
imageDialog.querySelector('.dialog-close').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

const checklist = document.querySelector('#securityChecklist');
const checklistKey = 'capstonebook-guide-security-checks';
const boxes = [...checklist.querySelectorAll('input[type="checkbox"]')];
const savedChecks = JSON.parse(localStorage.getItem(checklistKey) || '[]');
boxes.forEach((box, index) => {
  box.checked = Boolean(savedChecks[index]);
  box.addEventListener('change', () => {
    localStorage.setItem(checklistKey, JSON.stringify(boxes.map((item) => item.checked)));
  });
});
document.querySelector('#resetChecklist').addEventListener('click', () => {
  boxes.forEach((box) => { box.checked = false; });
  localStorage.removeItem(checklistKey);
});
