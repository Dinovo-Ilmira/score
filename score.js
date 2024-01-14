// Шаг 1: Создание массива с оценками от 1 до 100 для 12 студентов
const grades = Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 1);

// Шаг 2: Расчет и вывод среднего балла
const averageGrade = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log("Средний балл студентов:", averageGrade.toFixed(2));

// Шаг 3: Поиск и вывод максимального балла
const maxGrade = Math.max(...grades);
console.log("Максимальный балл:", maxGrade);

// Шаг 4: Поиск и вывод минимального балла
const minGrade = Math.min(...grades);
console.log("Минимальный балл:", minGrade);

// Шаг 5: Подсчет и вывод количества студентов с положительной оценкой
const positiveGradesCount = grades.filter(grade => grade >= 60).length;
console.log("Количество студентов с положительной оценкой:", positiveGradesCount);

// Шаг 6: Подсчет и вывод количества студентов с отрицательной оценкой
const negativeGradesCount = grades.filter(grade => grade < 60).length;
console.log("Количество студентов с отрицательной оценкой:", negativeGradesCount);

// Шаг 7: Преобразование числовых оценок в буквенные оценки
const letterGrades = grades.map(grade => {
    if (grade >= 80) return "A";
    else if (grade >= 60) return "B";
    else if (grade >= 40) return "C";
    else if (grade >= 20) return "D";
    else return "E";
});

console.log("Буквенные оценки студентов:", letterGrades);
