const tabs = (tabHeader, tabItems, tabContent, classActive) => {
    const header = document.querySelector(tabHeader),
        items = document.querySelectorAll(tabItems),
        content = document.querySelectorAll(tabContent);

    const hideTabContent = () => {
        items.forEach(item => {
            item.classList.remove(classActive);
        });
        content.forEach(item => {
            item.style.display = "none";
            item.classList.remove('tabShowUp');
        });
    };

    const showTabContent = (i = 0) => {
        items[i].classList.add(classActive);
        content[i].style.display = "block";
        content[i].classList.add('tabShowUp');
    };

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains(tabItems.replace(/\./, "")) || target.parentNode.classList.contains(tabItems.replace(/\./, ""))) {
            items.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;