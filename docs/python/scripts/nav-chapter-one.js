Vue.component('nav-chapter-one-todo-item', {
    props: ['todo'],
    template: '<li><a :href="todo.url">{{ todo.text }}</a></li>'
})

var navChapterOneData = {
    navList: [
        { id: 0, text: '1.1 - Getting Started', url: "https://tutor.xn--80ahslc6a.com/python" },
        { id: 1, text: '1.11 - Installation', url: "https://tutor.xn--80ahslc6a.com/python#Installation"},
        { id: 2, text: '1.12 - Editors and Linters', url: "https://tutor.xn--80ahslc6a.com/python#Editors-and-Linters"}
    ]
}

var navChapterOne = new Vue({
    el: 'body > section > nav',
    data: navChapterOneData
})