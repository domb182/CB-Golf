document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('ProductModal');
  const closeButton = modal.querySelector('.close-btn');
  const modalContent = modal.querySelector('.product-media-modal__content');
  const firstImageElement = document.querySelector('.first-image');
  const firstMediaElement = modal.querySelector('[data-media-id]');
  const firstMediaId = firstMediaElement ? firstMediaElement.getAttribute('data-media-id') : null;
  firstImageElement.setAttribute('data-media-id', firstMediaId);
  
  document.querySelectorAll('.open-gallery-image').forEach(img => {  
    img.addEventListener('click', () => {
      const mediaId = img.getAttribute('data-media-id');
      const correspondingModalContent = modal.querySelector(`[data-media-id="${mediaId}"]`);
      const parentElement = correspondingModalContent ? correspondingModalContent.parentElement : null;
      

      if (correspondingModalContent) {
        
        if (!modalContent) return;
        modalContent.prepend(parentElement);
        modalContent.scrollTop = 0;
      }
      document.body.prepend(modal);
      document.body.classList.add('modal-open');
      modal.setAttribute('open', '');
    });
  });

  closeButton.addEventListener('click', () => {
    modal.removeAttribute('open');
  });
    // Close the modal when any image is clicked
        modal.addEventListener('click', () => {
        if (modal.hasAttribute('open')) {
            document.body.classList.remove('modal-open');
          modal.removeAttribute('open');
        };
        });
    
});