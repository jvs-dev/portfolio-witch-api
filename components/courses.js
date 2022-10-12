var courses_jsonData = [{
    "courses": [
        {
            "title": "Trilha conectar (Rocketseat)",
            "description": "Concluiu com sucesso a trilha Conectar do Discover em 31.07.2022. O currículo de aprendizado inclui: fundamentos da programação, funcionamento de computadores, internet e mais.",
            "infos": "Carga horária:2h23min &nbsp &nbsp &nbsp #JavaScript &nbsp &nbsp &nbsp #CSS &nbsp &nbsp &nbsp #HTML"
        },
        {
            "title": "Dio",
            "description": "Em 15 de Fevereiro de 2022, concluiu o curso Programação para internet com JavaScript",
            "infos": "carga horária de 2h &nbsp &nbsp &nbsp #JavaScript"
        },
        {
            "title": "Dio",
            "description": "em 17 de Fevereiro de 2022, concluiu o curso Posicionando elementos com Flexbox em CSS",
            "infos": "carga horária de 4h &nbsp &nbsp &nbsp #CSS"
        }
    ]
}]

const courses_str = JSON.stringify(courses_jsonData)
const courses_obj = JSON.parse(courses_str)
var courses_section = document.getElementById("courses-section")
var view_all_courses = document.getElementById("view_all-courses")

function loadcourses(amountCourses) {
    let number_obj_courses = 0
    while (number_obj_courses < amountCourses) {
        let article = document.createElement("article")
        courses_section.insertAdjacentElement("beforeend", article)
        article.classList.add("rightsection__card")
        article.classList.add("recent-courses__article")
        article.innerHTML = `
        <img class="recent-courses__img" src="assets/img/${number_obj_courses}.jpg" alt="">
        <div class="flex-column-spacebetween">
            <h3 class="recent-courses__title">${courses_obj[0].courses[number_obj_courses].title}</h3>
            <p class="recent-courses__description">${courses_obj[0].courses[number_obj_courses].description}</p>
            <div class="flex-row-center">
                <p class="recent-courses__infos">${courses_obj[0].courses[number_obj_courses].infos}</p>
            </div>
        </div>
        `
        setTimeout(() => {
            article.classList.add("opacity-animation")
          }, 1);
        number_obj_courses =  number_obj_courses + 1
    }
}

view_all_courses.onclick = function () {
    if (view_all_courses.textContent == "Veja todos") {
        view_all_courses.textContent="Veja menos"
        courses_section.innerHTML=""
        loadcourses(courses_obj[0].courses.length)
    } else {
        courses_section.innerHTML=""
        view_all_courses.textContent="Veja todos"
        loadcourses(2)
    }
}


loadcourses(2)

