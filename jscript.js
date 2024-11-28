function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function openWindow(type) {
    const desktop = document.getElementById('desktop');
    const windowDiv = document.createElement('div');
    windowDiv.className = 'window';
    windowDiv.innerHTML = `<div class="window-header">${type === 'calc' ? 'Калькулятор' : 'Блокнот'}</div>
                           <div class="window-content">${type === 'calc' ? 'Здесь будет калькулятор.' : 'Здесь будет блокнот.'}</div>`;
    windowDiv.style.top = `${Math.random() * 500}px`;
    windowDiv.style.left = `${Math.random() * 800}px`;
    desktop.appendChild(windowDiv);
}