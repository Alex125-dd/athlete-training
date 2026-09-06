/* =====================================================
   ATHLETE — JAVASCRIPT
   Vanilla JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       MOBILE NAVIGATION
    ================================================= */

    const mobileMenu = document.getElementById("mobileMenu");
    const nav = document.getElementById("nav");

    mobileMenu.addEventListener("click", () => {
        nav.classList.toggle("open");

        const icon = mobileMenu.querySelector("i");

        if (nav.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });


    /* Close mobile menu after clicking a link */

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            const icon = mobileMenu.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });


    /* =================================================
       QUOTE CAROUSEL
    ================================================= */

    const quotes = [

        {
            text: "Дисциплина превращает намерение в действие.",
            author: "David Goggins"
        },

        {
            text: "Сила — это не только мышцы. Это способность продолжать работать.",
            author: "Arnold Schwarzenegger"
        },

        {
            text: "Прогресс строится из маленьких шагов, повторённых много раз.",
            author: "Athletic Principle"
        },

        {
            text: "Не ищи идеальный момент. Создай систему и придерживайся её.",
            author: "Training Mindset"
        }

    ];

    let quoteIndex = 0;

    const quoteText = document.getElementById("quoteText");
    const quoteAuthor = document.getElementById("quoteAuthor");
    const progress = document.querySelectorAll(".quote-progress span");

    function showQuote(index) {

        quoteText.classList.remove("fade");
        quoteAuthor.classList.remove("fade");

        void quoteText.offsetWidth;

        quoteText.textContent = quotes[index].text;
        quoteAuthor.textContent = quotes[index].author;

        quoteText.classList.add("fade");
        quoteAuthor.classList.add("fade");

        progress.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }


    document
        .querySelector(".quote-next")
        .addEventListener("click", () => {

            quoteIndex++;

            if (quoteIndex >= quotes.length) {
                quoteIndex = 0;
            }

            showQuote(quoteIndex);

        });


    document
        .querySelector(".quote-prev")
        .addEventListener("click", () => {

            quoteIndex--;

            if (quoteIndex < 0) {
                quoteIndex = quotes.length - 1;
            }

            showQuote(quoteIndex);

        });


    /* Automatic rotation */

    setInterval(() => {

        quoteIndex++;

        if (quoteIndex >= quotes.length) {
            quoteIndex = 0;
        }

        showQuote(quoteIndex);

    }, 6000);


    /* =================================================
       PROGRAM BUILDER
    ================================================= */

    const builderForm = document.getElementById("builderForm");

    const steps = document.querySelectorAll(".builder-step");
    const stepIndicators = document.querySelectorAll(".step");

    let currentStep = 1;


    function showStep(stepNumber) {

        currentStep = stepNumber;

        steps.forEach(step => {

            step.classList.toggle(
                "active",
                Number(step.dataset.step) === stepNumber
            );

        });

        stepIndicators.forEach(step => {

            step.classList.toggle(
                "active",
                Number(step.dataset.step) === stepNumber
            );

        });

    }


    /* Next buttons */

    document.querySelectorAll(".next-btn").forEach(button => {

        button.addEventListener("click", () => {

            if (currentStep < 4) {
                showStep(currentStep + 1);
            }

        });

    });


    /* Previous buttons */

    document.querySelectorAll(".prev-btn").forEach(button => {

        button.addEventListener("click", () => {

            if (currentStep > 1) {
                showStep(currentStep - 1);
            }

        });

    });


    /* =================================================
       PLAN GENERATION
    ================================================= */

    const generatedPlan = document.getElementById("generatedPlan");
    const planTitle = document.getElementById("planTitle");
    const planMeta = document.getElementById("planMeta");
    const schedule = document.getElementById("schedule");


    const goalNames = {

        mass: "Набор массы",

        strength: "Сила",

        endurance: "Выносливость",

        fitness: "Общая форма"

    };


    const levelNames = {

        beginner: "Новичок",

        intermediate: "Средний",

        advanced: "Продвинутый"

    };


    const equipmentNames = {

        gym: "Тренажёрный зал",

        dumbbells: "Гантели",

        bodyweight: "Собственный вес"

    };


    const baseWorkouts = {

        mass: [
            ["День 1", "Верх тела", "Жим + тяговые движения + упражнения на плечи"],
            ["День 2", "Низ тела", "Приседательный паттерн + задняя поверхность бедра"],
            ["День 3", "Всё тело", "Умеренная силовая работа на основные группы"]
        ],

        strength: [
            ["День 1", "Базовая сила", "Техника основных движений + вспомогательные упражнения"],
            ["День 2", "Низ тела", "Приседательный паттерн + корпус"],
            ["День 3", "Верх тела", "Жимовые и тяговые движения"]
        ],

        endurance: [
            ["День 1", "Кардио", "Лёгкая аэробная работа в комфортном темпе"],
            ["День 2", "Функциональная", "Умеренный круг из базовых движений"],
            ["День 3", "Кардио", "Ровная работа с контролем интенсивности"]
        ],

        fitness: [
            ["День 1", "Full Body", "Базовые движения на всё тело"],
            ["День 2", "Кардио + корпус", "Умеренная аэробная работа + упражнения на корпус"],
            ["День 3", "Full Body", "Сбалансированная тренировка"]
        ]

    };


    builderForm.addEventListener("submit", event => {

        event.preventDefault();


        const goal =
            document.querySelector(
                'input[name="goal"]:checked'
            ).value;

        const level =
            document.querySelector(
                'input[name="level"]:checked'
            ).value;

        const equipment =
            document.querySelector(
                'input[name="equipment"]:checked'
            ).value;

        const days =
            Number(
                document.querySelector(
                    'input[name="days"]:checked'
                ).value
            );


        planTitle.textContent =
            `${goalNames[goal]} — ${days} дня`;


        planMeta.innerHTML = `

            <span class="meta-pill">
                ${goalNames[goal]}
            </span>

            <span class="meta-pill">
                ${levelNames[level]}
            </span>

            <span class="meta-pill">
                ${equipmentNames[equipment]}
            </span>

            <span class="meta-pill">
                ${days} тренировки/нед.
            </span>

        `;


        const workouts = [...baseWorkouts[goal]];


        /* Add extra days if user selected 4 or 5 */

        if (days >= 4) {

            workouts.push([
                "День 4",
                "Дополнительная работа",
                "Умеренная тренировка по выбранному направлению"
            ]);

        }


        if (days >= 5) {

            workouts.push([
                "День 5",
                "Активное восстановление",
                "Лёгкая активность и мобильность"
            ]);

        }


        schedule.innerHTML = "";


        workouts.slice(0, days).forEach(workout => {

            const article = document.createElement("article");

            article.className = "workout-day";

            article.innerHTML = `

                <h4>
                    ${workout[0]} · ${workout[1]}
                </h4>

                <p>
                    ${workout[2]}
                </p>

            `;

            schedule.appendChild(article);

        });


        generatedPlan.classList.add("visible");

        generatedPlan.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });


    /* Close generated plan */

    document
        .getElementById("closePlan")
        .addEventListener("click", () => {

            generatedPlan.classList.remove("visible");

        });


    /* =================================================
       PROGRAM FILTERS
    ================================================= */

    const filterButtons =
        document.querySelectorAll(".filter");

    const programCards =
        document.querySelectorAll(".program-card");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;


            filterButtons.forEach(item => {
                item.classList.remove("active");
            });

            button.classList.add("active");


            programCards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hidden");

                } else {

                    card.classList.add("hidden");

                }

            });

        });

    });


    /* =================================================
       PROGRAM MODAL
    ================================================= */

    const modal =
        document.getElementById("programModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalWorkouts =
        document.getElementById("modalWorkouts");


    const programs = {

        arnold: {

            category: "BODYBUILDING",

            title: "Arnold-inspired",

            description:
                "Демонстрационный гипертрофический сплит с акцентом на контроль движения.",

            workouts: [

                ["Жим гантелей лёжа", "3 подхода", "8–12 повторений"],

                ["Тяга верхнего блока", "3 подхода", "8–12 повторений"],

                ["Жим гантелей сидя", "3 подхода", "8–12 повторений"],

                ["Разгибание рук", "2 подхода", "10–15 повторений"],

                ["Сгибание рук", "2 подхода", "10–15 повторений"]

            ]

        },


        fraser: {

            category: "CROSSFIT",

            title: "Fraser Method",

            description:
                "Функциональная тренировка с контролируемой интенсивностью.",

            workouts: [

                ["Разминка", "1 блок", "8–10 минут"],

                ["Приседание с собственным весом", "3 подхода", "10 повторений"],

                ["Отжимания", "3 подхода", "8–12 повторений"],

                ["Гребля / кардио", "1 блок", "5–8 минут"],

                ["Мобильность", "1 блок", "5–10 минут"]

            ]

        },


        arm: {

            category: "ARM WRESTLING",

            title: "Arm Power",

            description:
                "Общая силовая подготовка кистей и предплечий без экстремальных нагрузок.",

            workouts: [

                ["Сгибание кисти", "2 подхода", "12–15 повторений"],

                ["Разгибание кисти", "2 подхода", "12–15 повторений"],

                ["Фермерская прогулка", "3 подхода", "20–30 секунд"],

                ["Молотковые сгибания", "3 подхода", "8–12 повторений"],

                ["Работа на хват", "2 подхода", "20–30 секунд"]

            ]

        },


        goggins: {

            category: "ENDURANCE",

            title: "Goggins-inspired",

            description:
                "Постепенное развитие общей выносливости и дисциплины.",

            workouts: [

                ["Лёгкий бег", "1 блок", "15–25 минут"],

                ["Ходьба", "1 блок", "10 минут"],

                ["Упражнения с собственным весом", "2 подхода", "8–12 повторений"],

                ["Мобильность", "1 блок", "8–10 минут"]

            ]

        },


        strength: {

            category: "POWERLIFTING",

            title: "Strength Base",

            description:
                "Базовая силовая программа с приоритетом техники.",

            workouts: [

                ["Приседательный паттерн", "3 подхода", "5–8 повторений"],

                ["Жимовой паттерн", "3 подхода", "5–8 повторений"],

                ["Тяговый паттерн", "3 подхода", "6–8 повторений"],

                ["Корпус", "2 подхода", "8–12 повторений"]

            ]

        },


        athletic: {

            category: "FITNESS",

            title: "Athletic Base",

            description:
                "Сбалансированная программа общей физической подготовки.",

            workouts: [

                ["Приседание", "3 подхода", "8–12 повторений"],

                ["Отжимания", "3 подхода", "8–12 повторений"],

                ["Тяговое движение", "3 подхода", "8–12 повторений"],

                ["Кардио", "1 блок", "10–20 минут"],

                ["Мобильность", "1 блок", "5–10 минут"]

            ]

        }

    };


    function openModal(programKey) {

        const program = programs[programKey];

        if (!program) return;


        modalCategory.textContent =
            program.category;

        modalTitle.textContent =
            program.title;

        modalDescription.textContent =
            program.description;


        modalWorkouts.innerHTML = "";


        program.workouts.forEach(workout => {

            const item =
                document.createElement("div");

            item.className =
                "modal-exercise";

            item.innerHTML = `

                <strong>
                    ${workout[0]}
                </strong>

                <span>
                    ${workout[1]}
                </span>

                <span>
                    ${workout[2]}
                </span>

            `;

            modalWorkouts.appendChild(item);

        });


        modal.classList.add("visible");

        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

    }


    function closeModal() {

        modal.classList.remove("visible");

        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }


    document
        .querySelectorAll(".program-open")
        .forEach(button => {

            button.addEventListener("click", () => {

                openModal(button.dataset.program);

            });

        });


    modalClose.addEventListener(
        "click",
        closeModal
    );


    document
        .querySelector(".modal-overlay")
        .addEventListener(
            "click",
            closeModal
        );


    /* ESC closes modal */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("visible")
        ) {

            closeModal();

        }

    });


    /* =================================================
       HEADER BACKGROUND ON SCROLL
    ================================================= */

    const header =
        document.querySelector(".header");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {

            header.style.background =
                "rgba(13,13,13,.95)";

        } else {

            header.style.background =
                "rgba(18,18,18,.82)";

        }

    });


    /* =================================================
       INITIAL STATE
    ================================================= */

    showStep(1);
    showQuote(0);

});
