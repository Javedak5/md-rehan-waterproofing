document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => io.observe(el));
});

/* WhatsApp floating button + pop-up */
document.addEventListener('DOMContentLoaded', () => {
  const PHONE = '919501615689';
  const page = (document.body.dataset.wa || 'waterproofing');
  const msg = encodeURIComponent('Hello MD Rehan Waterproofing, I need help with ' + page + '.');
  const url = 'https://wa.me/' + PHONE + '?text=' + msg;
  const box = document.createElement('div');
  box.className = 'wa';
  box.innerHTML =
    '<div class="wa-pop" role="dialog" aria-label="Chat on WhatsApp">' +
      '<button class="wa-x" aria-label="Close">&times;</button>' +
      '<b>Leak problem?</b><p>Message us on WhatsApp for a quick reply.</p>' +
      '<a class="go" href="' + url + '" target="_blank" rel="noopener">Chat on WhatsApp</a>' +
    '</div>' +
    '<a class="wa-fab" href="' + url + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' +
      '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.200l-.3-.2-3 .8.8-2.900-.2-.3A8.200 8.200 0 1 1 12 20.200zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8s-.4-.1-.6.100-.7.800-.8 1-.3.200-.6.100a6.700 6.700 0 0 1-3.300-2.900c-.2-.4.200-.4.700-1.300.1-.2 0-.3 0-.4l-.8-1.800c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.100-.7.300s-.9.900-.9 2.100 1 2.500 1.100 2.600c.1.200 1.900 2.900 4.600 4 2.300.9 2.700.7 3.200.7.500-.1 1.600-.7 1.800-1.300s.2-1.200.2-1.300-.2-.2-.4-.3z"/></svg>' +
    '</a>';
  document.body.appendChild(box);
  const pop = box.querySelector('.wa-pop');
  box.querySelector('.wa-x').addEventListener('click', () => pop.classList.remove('show'));
  let closed = false;
  try { closed = sessionStorage.getItem('waClosed') === '1'; } catch(e){}
  box.querySelector('.wa-x').addEventListener('click', () => { try { sessionStorage.setItem('waClosed','1'); } catch(e){} });
  if (!closed) setTimeout(() => pop.classList.add('show'), 4000);
});
