

// NAV: mantener "Contacto" sin navegación aunque el HTML cambie
document.addEventListener('DOMContentLoaded', ()=>{
  const nav = document.querySelector('nav');
  if (!nav) return;
  const items = Array.from(nav.querySelectorAll('a, .nav-li'));
  items.forEach(el => {
    const txt = (el.textContent||'').trim().toLowerCase();
    if (txt === 'contacto'){
      let link = el.tagName.toLowerCase()==='a' ? el : el.querySelector('a');
      if (link){
        link.removeAttribute('href');
        link.classList.add('is-disabled');
        link.setAttribute('aria-disabled','true');
      }else if (el.classList && el.classList.contains('nav-li')){
        if (!el.querySelector('.is-disabled')){
          const span = document.createElement('span');
          span.className = 'is-disabled';
          span.setAttribute('aria-disabled','true');
          span.textContent = 'Contacto';
          el.textContent = '';
          el.appendChild(span);
        }
      }
    }
  });
});

// Footer year
document.addEventListener('DOMContentLoaded', ()=>{
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
