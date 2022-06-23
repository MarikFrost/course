{
    "user" : 1,
    "id" : 1,
    "title" : "Teat title",
    "status" : {
        "completed" : false
    }
} //синтаксис json файла

"**********Конвертация**********"
    //JSON -> Объект
    JSON.parse()

    //Обьект -> JSON
    JSON.stringify()

"**********Мутация в JavaScript**********"
    const person = {
        name : 'Bob',
        age : 25
    }
    const person2 = person  //присваеваем адрес ячейки памяти, где лежит объект
    person2.age = 26 //меняя person2 меняется person

    "Как избежать мутации"
    "Пример 1"
        const person3 = Object.assign({}, person)
        person3.age = 80
        console.log(person.age) //значение не поменялось. Этот вариант не распространяется на вложенные объекты
    
    "Пример 2"
        const person4 = {...person}
        person4.age = 65
        console.log(person.age)  //значение не поменялось. Этот вариант тоже не распространяется на вложенные объекты
    
    "Пример 3"
        const person5 = JSON.parse(JSON.stringify(person))
        person5.age = 1
        console.log(person.age) //значение не поменялось. Подходит для вложенных объектов


