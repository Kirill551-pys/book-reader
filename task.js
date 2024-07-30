// Получаем все элементы с классом font-size
const fontSizeButtons = document.querySelectorAll('.font-size');

// Получаем элемент книги
const bookElement = document.getElementById('book');

// Обработчик событий для кнопок смены размера шрифта
fontSizeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки

    // Убираем класс active со всех кнопок
    fontSizeButtons.forEach(btn => btn.classList.remove('font-size_active'));

    // Добавляем класс active к нажатой кнопке
    event.target.classList.add('font-size_active');

    // Получаем размер шрифта из data-атрибута кнопки
    const fontSize = event.target.dataset.size;

    // Удаляем все классы размера шрифта с элемента книги
    bookElement.classList.remove('book_fs-small', 'book_fs-big');

    // Добавляем соответствующий класс размера шрифта
    if (fontSize === 'small') {
      bookElement.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
      bookElement.classList.add('book_fs-big');
    }
  });
});