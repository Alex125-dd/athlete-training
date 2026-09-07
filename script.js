/* =========================================================
   ATHLETE
   script.js

   Здесь находится:

   1. Данные тренировочной программы
   2. Генерация дней
   3. Аккордеон
   4. Модальное окно
   5. SVG-визуализация упражнений
   6. Мобильное меню

   Чтобы изменить программу, в первую очередь
   редактируй массив trainingProgram ниже.
========================================================= */


/* =========================================================
   TRAINING PROGRAM
========================================================= */

const trainingProgram = [

    /* =====================================================
       DAY 1
    ===================================================== */

    {
        day: 1,

        title: "Грудь + Трицепс",

        weekday: "Понедельник",

        exercises: [

            {
                name: "Жим штанги лёжа",

                muscle: "Грудь · Трицепс",

                sets: 4,

                reps: "8–10",

                rest: 90,

                /*
                    Вместо ненадёжной фотографии
                    используем встроенную SVG-иконку.

                    Значение можно менять:
                    dumbbell
                    person
                    barbell
                */

                image: "barbell",

                /*
                    ID YouTube-видео.
                    Можно заменить на другое видео.

                    Если оставить пустую строку "",
                    будет показана только SVG-визуализация.
                */

                video: "rT7rgXQtDcI",

                description:
                    "Базовое упражнение для развития мышц груди и трицепса.",

                technique: [
                    "Установи устойчивое положение корпуса на скамье.",
                    "Опускай штангу контролируемо.",
                    "Не используй рывок при подъёме.",
                    "Выбирай нагрузку, которую можешь контролировать."
                ]
            },


            {
                name: "Разводка гантелей",

                muscle: "Грудь",

                sets: 3,

                reps: "12",

                rest: 60,

                image: "dumbbell",

                video: "eozdVDA78K0",

                description:
                    "Изолированное упражнение с акцентом на мышцы груди.",

                technique: [
                    "Сохраняй небольшой сгиб в локтях.",
                    "Разводи руки плавно.",
                    "Не опускай гантели глубже комфортной амплитуды."
                ]
            },


            {
                name: "Отжимания на брусьях",

                muscle: "Грудь · Трицепс",

                sets: 3,

                reps: "до отказа",

                rest: 90,

                image: "person",

                video: "2z8JmcrW-As",

                description:
                    "Упражнение с собственным весом для груди и трицепса.",

                technique: [
                    "Начинай с устойчивого положения.",
                    "Не раскачивай корпус.",
                    "Используй контролируемую амплитуду.",
                    "Не продолжай упражнение через боль."
                ]
            },


            {
                name: "Французский жим",

                muscle: "Трицепс",

                sets: 3,

                reps: "10",

                rest: 60,

                image: "barbell",

                video: "d_KZxkY_0cM",

                description:
                    "Изолированное упражнение для трицепса.",

                technique: [
                    "Сохраняй локти стабильными.",
                    "Опускай вес медленно.",
                    "Не используй чрезмерную нагрузку."
                ]
            }

        ]
    },


    /* =====================================================
       DAY 2
    ===================================================== */

    {
        day: 2,

        title: "Спина + Бицепс",

        weekday: "Среда",

        exercises: [

            {
                name: "Подтягивания",

                muscle: "Спина · Бицепс",

                sets: 4,

                reps: "до отказа",

                rest: 120,

                image: "person",

                video: "eGo4IYlbE5g",

                description:
                    "Базовое упражнение с собственным весом для мышц спины.",

                technique: [
                    "Начинай движение из стабильного положения.",
                    "Не раскачивай корпус.",
                    "Поднимайся контролируемо.",
                    "Медленно возвращайся вниз."
                ]
            },


            {
                name: "Тяга штанги в наклоне",

                muscle: "Спина",

                sets: 4,

                reps: "8",

                rest: 90,

                image: "barbell",

                video: "FWJR5Ve8bnQ",

                description:
                    "Базовое тяговое упражнение для мышц спины.",

                technique: [
                    "Сохраняй нейтральное положение позвоночника.",
                    "Не округляй поясницу.",
                    "Подтягивай вес контролируемо.",
                    "Избегай рывков."
                ]
            },


            {
                name: "Тяга верхнего блока",

                muscle: "Широчайшие",

                sets: 3,

                reps: "12",

                rest: 60,

                image: "person",

                video: "CAwf7n6Luuc",

                description:
                    "Тяговое движение с акцентом на широчайшие мышцы.",

                technique: [
                    "Сохраняй стабильное положение корпуса.",
                    "Тяни рукоять к верхней части груди.",
                    "Не раскачивайся.",
                    "Контролируй возвращение веса."
                ]
            },


            {
                name: "Подъём штанги на бицепс",

                muscle: "Бицепс",

                sets: 3,

                reps: "10",

                rest: 60,

                image: "barbell",

                video: "kwG2ipFRgfo",

                description:
                    "Классическое упражнение для бицепса.",

                technique: [
                    "Держи локти относительно неподвижно.",
                    "Не раскачивай корпус.",
                    "Поднимай вес плавно.",
                    "Контролируй опускание."
                ]
            }

        ]
    },


    /* =====================================================
       DAY 3
    ===================================================== */

    {
        day: 3,

        title: "Ноги + Плечи",

        weekday: "Пятница",

        exercises: [

            {
                name: "Приседания со штангой",

                muscle: "Квадрицепс · Ягодицы",

                sets: 4,

                reps: "8–10",

                rest: 120,

                image: "barbell",

                video: "ultWZbUMPL8",

                description:
                    "Базовое упражнение для мышц нижней части тела.",

                technique: [
                    "Сохраняй устойчивое положение стоп.",
                    "Держи корпус подконтрольно.",
                    "Колени должны двигаться в направлении носков.",
                    "Используй комфортную глубину."
                ]
            },


            {
                name: "Жим ногами",

                muscle: "Ноги",

                sets: 3,

                reps: "12",

                rest: 90,

                image: "person",

                video: "IZxyjW7MPJQ",

                description:
                    "Упражнение для развития мышц ног.",

                technique: [
                    "Сохраняй устойчивое положение таза.",
                    "Не выпрямляй колени резко.",
                    "Контролируй движение платформы."
                ]
            },


            {
                name: "Жим гантелей сидя",

                muscle: "Плечи",

                sets: 4,

                reps: "10",

                rest: 60,

                image: "dumbbell",

                video: "qEwKCR5JCog",

                description:
                    "Жимовое упражнение для плечевого пояса.",

                technique: [
                    "Сохраняй устойчивое положение корпуса.",
                    "Не используй инерцию.",
                    "Поднимай гантели плавно."
                ]
            },


            {
                name: "Махи гантелями в стороны",

                muscle: "Средняя дельта",

                sets: 3,

                reps: "15",

                rest: 45,

                image: "dumbbell",

                video: "3VcKaXpzqRo",

                description:
                    "Изолированное упражнение для средней части плеч.",

                technique: [
                    "Используй небольшой вес.",
                    "Не раскачивай корпус.",
                    "Поднимай руки контролируемо.",
                    "Не выполняй движение рывком."
                ]
            }

        ]
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const trainingList =
    document.getElementById("trainingList");

const modal =
    document.getElementById("exerciseModal");

const modalClose =
    document.getElementById("modalClose");

const modalVideo =
    document.getElementById("modalVideo");

const modalFallback =
    document.getElementById("modalFallback");

const modalTitle =
    document.getElementById("modalTitle");

const modalMuscle =
    document.getElementById("modalMuscle");

const modalDescription =
    document.getElementById("modalDescription");

const modalStats =
    document.getElementById("modalStats");

const modalTechnique =
    document.getElementById("modalTechnique");

const showTechniqueButton =
    document.getElementById("showTechniqueButton");

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");


/* =========================================================
   SVG ICONS

   Важный момент:

   Здесь НЕТ внешних картинок.

   Все визуализации встроены непосредственно
   в JavaScript как SVG.

   Поэтому они не могут превратиться в
   "битую картинку".
========================================================= */

const exerciseIcons = {

    dumbbell: `
        <svg
            viewBox="0 0 64 64"
            aria-hidden="true"
        >
            <path d="M12 22v20"/>
            <path d="M20 17v30"/>
            <path d="M44 17v30"/>
            <path d="M52 22v20"/>
            <path d="M20 25h24"/>
            <path d="M20 39h24"/>
        </svg>
    `,


    barbell: `
        <svg
            viewBox="0 0 64 64"
            aria-hidden="true"
        >
            <path d="M8 26v12"/>
            <path d="M14 20v24"/>
            <path d="M22 24v16"/>
            <path d="M22 32h20"/>
            <path d="M42 24v16"/>
            <path d="M50 20v24"/>
            <path d="M56 26v12"/>
        </svg>
    `,


    person: `
        <svg
            viewBox="0 0 64 64"
            aria-hidden="true"
        >
            <circle cx="32" cy="12" r="6"/>
            <path d="M32 18v16"/>
            <path d="M20 25l12 6 12-6"/>
            <path d="M32 34l-10 18"/>
            <path d="M32 34l10 18"/>
            <path d="M20 25l-8 12"/>
            <path d="M44 25l8 12"/>
        </svg>
    `

};


/* =========================================================
   GET EXERCISE SVG

   Если неизвестный тип картинки —
   автоматически используется dumbbell.
========================================================= */

function getExerciseIcon(type = "dumbbell") {

    return (
        exerciseIcons[type] ||
        exerciseIcons.dumbbell
    );

}


/* =========================================================
   FORMAT REST TIME
========================================================= */

function formatRest(seconds) {

    if (seconds < 60) {

        return `${seconds} сек`;

    }


    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;


    if (remainingSeconds === 0) {

        return `${minutes} мин`;

    }


    return `${minutes} мин ${remainingSeconds} сек`;

}


/* =========================================================
   CREATE EXERCISE VISUAL
========================================================= */

function createExerciseVisual(exercise) {

    const visual =
        document.createElement("div");

    visual.className =
        "exercise-visual";


    visual.innerHTML = `

        ${getExerciseIcon(exercise.image)}

        <span class="exercise-play">
            ▶
        </span>

    `;


    return visual;

}


/* =========================================================
   CREATE EXERCISE CARD
========================================================= */

function createExerciseCard(exercise) {

    const card =
        document.createElement("article");

    card.className =
        "exercise-card";

    card.setAttribute(
        "role",
        "button"
    );

    card.setAttribute(
        "tabindex",
        "0"
    );


    const visual =
        createExerciseVisual(exercise);


    const info =
        document.createElement("div");


    info.innerHTML = `

        <div class="exercise-name">
            ${escapeHTML(exercise.name)}
        </div>

        <div class="exercise-muscle">
            ${escapeHTML(exercise.muscle)}
        </div>

        <div class="exercise-stats">

            <span class="exercise-stat">
                <strong>${exercise.sets}</strong>
                подходов
            </span>

            <span class="exercise-stat">
                <strong>${escapeHTML(exercise.reps)}</strong>
                повторений
            </span>

            <span class="exercise-stat">
                <strong>${formatRest(exercise.rest)}</strong>
                отдых
            </span>

        </div>

    `;


    card.appendChild(visual);

    card.appendChild(info);


    /* Клик мышью */

    card.addEventListener(
        "click",
        () => openExerciseModal(exercise)
    );


    /* Клавиатура */

    card.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter" ||
                event.key === " "
            ) {

                event.preventDefault();

                openExerciseModal(exercise);

            }

        }
    );


    return card;

}


/* =========================================================
   CREATE TRAINING DAY
========================================================= */

function createTrainingDay(day) {

    const article =
        document.createElement("article");

    article.className =
        "training-day";


    /* ---------- HEADER ---------- */

    const header =
        document.createElement("button");

    header.type = "button";

    header.className =
        "day-header";

    header.setAttribute(
        "aria-expanded",
        "false"
    );


    header.innerHTML = `

        <span class="day-number">
            ${String(day.day).padStart(2, "0")}
        </span>

        <span class="day-main">

            <strong>
                День ${day.day} ·
                ${escapeHTML(day.weekday)}
            </strong>

            <span>
                ${escapeHTML(day.title)}
                ·
                ${day.exercises.length}
                ${getExerciseWord(day.exercises.length)}
            </span>

        </span>

        <span
            class="day-arrow"
            aria-hidden="true"
        ></span>

    `;


    /* ---------- CONTENT ---------- */

    const content =
        document.createElement("div");

    content.className =
        "day-content";


    const contentInner =
        document.createElement("div");

    contentInner.className =
        "day-content-inner";


    const exerciseList =
        document.createElement("div");

    exerciseList.className =
        "exercise-list";


    day.exercises.forEach(
        exercise => {

            exerciseList.appendChild(
                createExerciseCard(exercise)
            );

        }
    );


    contentInner.appendChild(
        exerciseList
    );

    content.appendChild(
        contentInner
    );


    article.appendChild(header);

    article.appendChild(content);


    /* =====================================================
       ACCORDION

       Одновременно открыт только один день.
    ===================================================== */

    header.addEventListener(
        "click",
        () => {

            const isOpen =
                article.classList.contains("open");


            /*
                Закрываем остальные дни.
            */

            document
                .querySelectorAll(".training-day.open")
                .forEach(otherDay => {

                    if (otherDay !== article) {

                        otherDay.classList.remove("open");

                        const otherHeader =
                            otherDay.querySelector(
                                ".day-header"
                            );

                        if (otherHeader) {

                            otherHeader.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }

                    }

                });


            /*
                Переключаем текущий день.
            */

            article.classList.toggle(
                "open",
                !isOpen
            );


            header.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );

        }
    );


    return article;

}


/* =========================================================
   RENDER TRAINING PROGRAM
========================================================= */

function renderTrainingProgram() {

    trainingList.innerHTML = "";


    trainingProgram.forEach(
        (day, index) => {

            const dayElement =
                createTrainingDay(day);


            trainingList.appendChild(
                dayElement
            );


            /*
                Первый день открыт
                сразу после загрузки.
            */

            if (index === 0) {

                dayElement.classList.add(
                    "open"
                );


                dayElement
                    .querySelector(".day-header")
                    .setAttribute(
                        "aria-expanded",
                        "true"
                    );

            }

        }
    );

}


/* =========================================================
   OPEN MODAL
========================================================= */

function openExerciseModal(exercise) {

    modalTitle.textContent =
        exercise.name;


    modalMuscle.textContent =
        exercise.muscle;


    modalDescription.textContent =
        exercise.description;


    /* ---------- STATS ---------- */

    modalStats.innerHTML = `

        <div class="modal-stat">

            <span>Подходы</span>

            <strong>
                ${exercise.sets}
            </strong>

        </div>


        <div class="modal-stat">

            <span>Повторения</span>

            <strong>
                ${escapeHTML(exercise.reps)}
            </strong>

        </div>


        <div class="modal-stat">

            <span>Отдых</span>

            <strong>
                ${formatRest(exercise.rest)}
            </strong>

        </div>

    `;


    /* ---------- TECHNIQUE ---------- */

    modalTechnique.innerHTML = "";


    exercise.technique.forEach(
        item => {

            const li =
                document.createElement("li");

            li.textContent =
                item;

            modalTechnique.appendChild(li);

        }
    );


    /*
        Всегда сначала показываем
        SVG fallback.

        Это гарантирует, что пользователь
        не увидит пустой блок.
    */

    modalFallback.innerHTML =
        getExerciseIcon(exercise.image);


    modalFallback.classList.remove(
        "hidden"
    );


    /* ---------- VIDEO ---------- */

    modalVideo.innerHTML = "";


    if (exercise.video) {

        const iframe =
            document.createElement("iframe");


        iframe.src =
            `https://www.youtube-nocookie.com/embed/${encodeURIComponent(exercise.video)}?rel=0`;


        iframe.title =
            `Техника: ${exercise.name}`;


        iframe.loading =
            "lazy";


        iframe.allow =
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";


        iframe.setAttribute(
            "allowfullscreen",
            ""
        );


        /*
            При загрузке видео SVG исчезает.

            Если YouTube недоступен,
            SVG остаётся доступной
            визуализацией упражнения.
        */

        iframe.addEventListener(
            "load",
            () => {

                modalFallback.classList.add(
                    "hidden"
                );

            }
        );


        modalVideo.appendChild(
            iframe
        );

    }


    /* ---------- SHOW MODAL ---------- */

    modal.classList.add(
        "visible"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";


    /*
        Ставим фокус на кнопку закрытия.
    */

    modalClose.focus();

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    modal.classList.remove(
        "visible"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    /*
        Полностью удаляем iframe.

        Благодаря этому видео гарантированно
        перестаёт воспроизводиться после закрытия.
    */

    modalVideo.innerHTML = "";


    document.body.style.overflow =
        "";

}


/* =========================================================
   MODAL EVENTS
========================================================= */

modalClose.addEventListener(
    "click",
    closeModal
);


document
    .querySelectorAll("[data-close-modal]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeModal
        );

    });


/*
    Закрытие клавишей ESC.
*/

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("visible")
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   SHOW SVG TECHNIQUE
========================================================= */

showTechniqueButton.addEventListener(
    "click",
    () => {

        modalVideo.innerHTML = "";


        modalFallback.classList.remove(
            "hidden"
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

menuButton.addEventListener(
    "click",
    () => {

        const isOpen =
            mainNav.classList.toggle("open");


        menuButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


/*
    После нажатия на ссылку меню
    закрываем мобильную навигацию.
*/

mainNav
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


/* =========================================================
   HELPER: EXERCISE WORD
========================================================= */

function getExerciseWord(number) {

    if (
        number % 10 === 1 &&
        number % 100 !== 11
    ) {

        return "упражнение";

    }


    if (
        number % 10 >= 2 &&
        number % 10 <= 4 &&
        (
            number % 100 < 10 ||
            number % 100 >= 20
        )
    ) {

        return "упражнения";

    }


    return "упражнений";

}


/* =========================================================
   HELPER: SAFE TEXT
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   START APPLICATION
========================================================= */

renderTrainingProgram();
