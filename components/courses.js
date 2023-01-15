var courses_jsonData = [{
    "courses": [
        {
            "title": "Trail connect (Rocketseat)",
            "description": "Successfully completed the Discover Connect track on 7/31/2022. The learning curriculum includes: programming fundamentals, computer operation, the internet and more.",
            "infos": "Workload: 2h &nbsp &nbsp &nbsp #JavaScript &nbsp &nbsp &nbsp #CSS &nbsp &nbsp &nbsp #HTML",
            "img": "9"
        },
        {
            "title": "Internet programming with JavaScript",
            "description": "On February 15, 2022, he completed the Internet Programming with JavaScript course",
            "infos": "Workload: 2h &nbsp &nbsp &nbsp #JavaScript",
            "img": "5"
        },
        {
            "title": "Positioning elements with Flexbox in CSS",
            "description": "On February 17, 2022, completed the course Positioning elements with Flexbox in CSS",
            "infos": "Workload: 4h &nbsp &nbsp &nbsp #CSS",
            "img": "7"
        },
        {
            "title": "Trail fundamentals (Rocketseat)",
            "description": "Successfully completed Discover's Fundamental trail on 1/13/2023, with a workload of 27h46. The learning curriculum includes: HTML, CSS, JavaScript, NodeJS, SQL and more.",
            "infos": "Workload: 27h &nbsp &nbsp &nbsp #HTML &nbsp &nbsp &nbsp #CSS &nbsp &nbsp &nbsp #JavaScript &nbsp &nbsp &nbsp #NodeJS &nbsp &nbsp &nbsp #SQL",
            "img": "14"
        },
        {
            "title": "UX & UI IN PRACTICE",
            "description": "Participated and concluded the activities of the UI & UX Design Event - UX & UI IN PRACTICE web series from 01/31/2022 to 02/06/2022, from online mode and with a workload of 12 hours and 10 minutes.",
            "infos": "Workload: 12h &nbsp &nbsp &nbsp #UX &nbsp &nbsp &nbsp #UI",
            "img": "2"
        },
        {
            "title": "Building pages for Internet with Bootstrap",
            "description": "On January 13, 2023, he completed the course Building pages for Internet with Bootstrap with a workload of 4 hours.",
            "infos": "Workload: 4h &nbsp &nbsp &nbsp #Bootstrap",
            "img": "12"
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
        <img class="recent-courses__img" src="assets/img/${courses_obj[0].courses[number_obj_courses].img}.jpeg" alt="">
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
    if (view_all_courses.textContent == "view all") {
        view_all_courses.textContent="view less"
        courses_section.innerHTML=""
        loadcourses(courses_obj[0].courses.length)
    } else {
        courses_section.innerHTML=""
        view_all_courses.textContent="view all"
        loadcourses(2)
    }
}


loadcourses(2)

