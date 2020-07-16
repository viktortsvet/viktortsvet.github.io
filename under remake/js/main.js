import modal from './modals';
import tabs from './tabs';

window.addEventListener('DOMContentLoaded', () => {

    modal({
        modalWindow: '.menu-modal',
        modalClose: '.close-menu',
        modalOpen: '.header__hamburger',
        animationIn: 'showUp',
        animationOut: 'showDown'
    });

    modal({
        modalOpen: '.signIn',
        modalClose: '.closeSignIn',
        modalWindow: '.Sign-In',
        animationIn: 'fadeFromUp',
        animationOut: 'fadeIntoUp'
    });

    modal({
        modalWindow: '.Sign-Up',
        modalOpen: '.signUp',
        modalClose: '.closeSignUp',
        animationIn: 'fadeOutLeft',
        animationOut: 'fadeInLeft'
    });

    tabs('.services__block', '.services__tab', '.services__tab-content', 'active');
});