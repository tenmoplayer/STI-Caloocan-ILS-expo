document.addEventListener('DOMContentLoaded', () => {
    const modals = {
      mangorate: document.getElementById('modal-mango'),
      strawrate: document.getElementById('modal-straw'),
      applerate: document.getElementById('modal-apple'),
      pandanrate: document.getElementById('modal-pandan')
    };
  
    Object.keys(modals).forEach(id => {
      const trigger = document.getElementById(id);
      const modal = modals[id];
      const closeBtn = modal.querySelector('.close');
  
      trigger.addEventListener('click', () => {
        modal.style.display = 'flex';
      });
  
      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    });
  });