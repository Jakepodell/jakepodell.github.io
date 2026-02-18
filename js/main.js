// ─── SCROLL: shrink nav ───────────────────────────────────────────────────────
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ─── SCROLL REVEAL ────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.12 }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── MAGNETIC BUTTONS ─────────────────────────────────────────────────────────
document.querySelectorAll('.btn-group .btn').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    btn.style.transform = `translate(${dx * 7}px, ${dy * 5}px)`;
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = '';
  });
});

// ─── COMMAND PALETTE ──────────────────────────────────────────────────────────
const commands = [
  { label: 'About',      desc: 'Who I am',               icon: '◈',  action: () => scrollTo('#about') },
  { label: 'Experience', desc: "Where I've worked",       icon: '◉',  action: () => scrollTo('#experience') },
  { label: 'Skills',     desc: 'Tech I work with',        icon: '◇',  action: () => scrollTo('#skills') },
  { label: 'Education',  desc: 'Cornell & CUAir',         icon: '◎',  action: () => scrollTo('#education') },
  { label: 'Contact',    desc: 'Get in touch',            icon: '◌',  action: () => scrollTo('#contact') },
  { label: 'Resume',     desc: 'Open PDF',                icon: '↗',  action: () => window.open('res/Jake Podell.pdf', '_blank') },
  { label: 'GitHub',     desc: 'github.com/jakepodell',   icon: '⌥',  action: () => window.open('https://github.com/jakepodell', '_blank') },
  { label: 'LinkedIn',   desc: '/in/jakepodell',          icon: 'in', action: () => window.open('https://linkedin.com/in/jakepodell', '_blank') },
];

function scrollTo(selector) {
  closeCmd();
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

const overlay   = document.getElementById('cmd-overlay');
const modal     = document.getElementById('cmd-modal');
const cmdInput  = document.getElementById('cmd-input');
const cmdList   = document.getElementById('cmd-list');

let activeIdx = 0;
let filtered  = [...commands];

function openCmd() {
  overlay.classList.add('open');
  cmdInput.value = '';
  renderList('');
  cmdInput.focus();
}

function closeCmd() {
  overlay.classList.remove('open');
}

function renderList(query) {
  const q = query.toLowerCase().trim();
  filtered = q
    ? commands.filter(c => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q))
    : [...commands];

  if (!filtered.length) {
    cmdList.innerHTML = `<div class="cmd-empty">No results</div>`;
    activeIdx = -1;
    return;
  }

  cmdList.innerHTML = filtered.map((c, i) => `
    <div class="cmd-item${i === 0 ? ' active' : ''}" data-i="${i}">
      <div class="cmd-icon">${c.icon}</div>
      <div class="cmd-text">
        <div class="cmd-label">${c.label}</div>
        <div class="cmd-desc">${c.desc}</div>
      </div>
      <div class="cmd-enter">↵</div>
    </div>
  `).join('');

  activeIdx = 0;

  cmdList.querySelectorAll('.cmd-item').forEach((el, i) => {
    el.addEventListener('click', () => { filtered[i].action(); });
    el.addEventListener('mouseenter', () => setActive(i));
  });
}

function setActive(i) {
  activeIdx = i;
  cmdList.querySelectorAll('.cmd-item').forEach((el, j) => {
    el.classList.toggle('active', j === i);
  });
  const activeEl = cmdList.querySelector('.cmd-item.active');
  if (activeEl) activeEl.scrollIntoView({ block: 'nearest' });
}

cmdInput.addEventListener('input', () => renderList(cmdInput.value));

cmdInput.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    setActive(Math.min(activeIdx + 1, filtered.length - 1));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    setActive(Math.max(activeIdx - 1, 0));
  } else if (e.key === 'Enter') {
    if (filtered[activeIdx]) filtered[activeIdx].action();
  } else if (e.key === 'Escape') {
    closeCmd();
  }
});

overlay.addEventListener('click', (e) => {
  if (!modal.contains(e.target)) closeCmd();
});

document.addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    overlay.classList.contains('open') ? closeCmd() : openCmd();
  }
});
