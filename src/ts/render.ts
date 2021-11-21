function init() {

    let anyCastWindow = window as any;
    let currentWindow = anyCastWindow.app.currentWindow;
    document.getElementById("app-min-btn").addEventListener("click", function (e) {
        e.preventDefault();

        currentWindow.minimize();
    });
    
    document.getElementById("app-max-btn").addEventListener("click", function (e) {
        e.preventDefault();

    	if (currentWindow.isMaximized()) {
			currentWindow.restore();
     	}
		else {
			currentWindow.maximize();
		}
    });
    
    document.getElementById("app-close-btn").addEventListener("click", (e) => {
        e.preventDefault();

      	currentWindow.close();
    });
}

if (document.readyState === "complete") {
  	init();
} 
else {
 	document.addEventListener("DOMContentLoaded", init);
}

//! Menu Loaders

function addModalListener(btnId: string, modalId: string) {
    document.getElementById(btnId).addEventListener('click', (e) => {
        e.preventDefault();

        let modal = document.getElementById(modalId);
        let html  = document.getElementsByTagName('html')[0];

        modal.classList.add('is-active');
        html.classList.add('is-clipped');

        modal.querySelector('.modal-background').addEventListener('click', (e) => {
            e.preventDefault();

            modal.classList.remove('is-active');
            html.classList.remove('is-clipped');
        });
    });
}

//Settings
addModalListener('nav-settings-btn', 'settings-modal');

//Test
addModalListener('nav-settings-2-btn', 'anotherMenu-modal');

const activeModalMenuMap: Record<string, string> = {};

function displayModalMenu(modalName: string, menuContentId: string) {
    if (activeModalMenuMap[modalName]) (document.querySelector(`#${activeModalMenuMap[modalName]}`) as any).style.display = 'none';
    (document.querySelector(`#${menuContentId}`) as any).style.display = 'unset';
    activeModalMenuMap[modalName] = menuContentId;
}