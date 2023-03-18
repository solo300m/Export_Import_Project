import { getRandomColor } from '../src/utils/utils';

export default function initApp(){
    console.log('Hello, World!');
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.textContent = `Изменить цвет страницы`;
    btn.addEventListener('click',() => {
        document.body.style.background = getRandomColor();
    })


    document.body.append(btn);
}