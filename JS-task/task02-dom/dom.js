function changeOuterLinks() {
    const links = document.querySelectorAll('nav#link-list a');
    links.forEach((element) => {
        if (element.innerHTML.includes('outer-link')) {
            element.target = '_blank';
            element.innerHTML = `<strong>${element.innerHTML}</strong>`;
        }
    });

    const nav = document.querySelector('nav');

    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.margin = '0px auto';
    nav.style.width = '30%';
    nav.style.border = '1px solid blue';
    nav.style.padding = '16px';

}

export { changeOuterLinks };