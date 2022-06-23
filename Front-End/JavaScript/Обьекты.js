"*********ОБЪЕКТЫ**********"
    const myCity = {
        city : "New York",
        popular : true,
        country : "USA"
    }
    console.log(myCity.city) //"С помощью такого обращения, выводим значение свойства city из объекта myCity"
    
    console.log(myCity.popular) //"С помощью такого обращения, выводим значение свойства popular из объекта myCity"

    myCity.popular = false
    console.log(myCity.popular) //"С помощью такого обращения, меняем значения свойства popular из объекта myCity"

    myCity.year = 2022
    console.log(myCity.year) //"С помощью такого обращения, добавляем свойство year со значением 2022 в обьект myCity"

    delete myCity.country //"С помощью такого обращения, удаляем свойство country и его значение из объекта myCity"


"Доступ к значению свойства с использованием скобок"
    const myCity = {
        city : "New York"
    }
    myCity['popular'] = true //"добавляем через квадратные скобки свойство popular и значение в объект myCity"

    const countryProName = 'countryOne'
    myCity[countryProName] = 'USA' //"добавляем через квадратные скобки, значение переменной countryProName в свойство и добавляем к нему значение USA"
    //"Такой вид используется, когда необходимо создать свойство с названием переменной или любым обьектом"

"**********ВЛОЖЕНЫЕ ОБЪЕКТЫ**********"
    const myCityExt = {
        city : 'New York',
        info : {
            isPopular : true,
            country : 'USA'
        }
    }
    console.log(myCityExt.info.isPopular) //обращение к вложеному объекту
    delete myCityExt.info['isPopular'] //удаление свойства во вложеном объекте

"**********Использование переменных объекта**********"
    const name = 'Bogdan'
    const post = 23

    const user = {
        name : name,
        post : post,
        has : false
    }  //используем переменные вместо значения объекта

    //Можно использовать не только переменные но и любые выражения
    /*Можно записывать сокращенно. Если нужно из переменной вставить значение и название переменной будет совпадать
    с названием свойства, можно записывать так*/
    const name1 = 'Bogdan'
    const post1 = 23
    const user1 = {
        name1,
        post1,
        has1 : false
    }

"**********ГЛОБАЛЬНЫЕ ОБЪЕКТЫ**********"
    - Window (Веб браузер)
    - global (Node.js)

    "Унифицированный глобальный объект"
    globalThis

"**********ФУНКЦИЯ ВНУТРИ МЕТОДА**********"
    const myCity2 = {
        city : 'New York',
        cityGree : function () {
            console.log('Hello')
        }
    }
    myCity2.cityGree() //В примере значение метода есть функция

    const myCity3 = {
        city : 'New York',
        cityGree1 () {
            console.log('Hello')
        }
    }
    myCity2.cityGree() //Сокращенная запись первого варианта

