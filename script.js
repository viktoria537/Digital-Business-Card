document.addEventListener('DOMContentLoaded', () => {
    console.log("Портфолиото е заредено успешно!");
    
    const card = document.querySelector('.card');
    card.addEventListener('click', () => {
        alert('Благодаря, че разгледахте моя проект!');
    });
});
