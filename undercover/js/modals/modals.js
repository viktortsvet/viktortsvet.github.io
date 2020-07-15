const modal = ({modalWindow, modalClose, modalOpen, animationIn, animationOut} = {}) => {

    const windowModal = document.querySelector(modalWindow),
        btnModalOpen = document.querySelector(modalOpen),
        btnModalClose = document.querySelector(modalClose);

    btnModalOpen.addEventListener('click', () => {
        windowModal.style.display = 'block';
        windowModal.classList.remove(animationOut);
        windowModal.classList.add(animationIn);
    });

    btnModalClose.addEventListener('click', () => {
        windowModal.classList.remove(animationIn);
        windowModal.classList.add(animationOut);
        setTimeout(() => {
            windowModal.style.display = 'none';
        }, 1000);
    });
};

export default modal;