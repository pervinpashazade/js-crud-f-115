const search_input = document.getElementById("searchInput")

const list = JSON.parse(localStorage.getItem("student_list"))

console.log(list);

search_input.addEventListener("input", function (event) {
    console.log(event.target.value);

    const results = list.filter(student => student.name.toLowerCase().startsWith(event.target.value.toLowerCase()))

    console.log(results);
})