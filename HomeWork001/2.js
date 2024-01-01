"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции,
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.orders = [];
  }
}

// const chiefs = new Map(
//     [
//       ["Олег", new Set(["Пицца"])],
//       ["Андрей", new Set(["Суши"])],
//       ["Анна", new Set(["Десерт"])]
//     ]
// );

const chiefs = new Map(
    [
      ["Олег", "Пицца"],
      ["Андрей", "Суши"],
      ["Анна", "Десерт"]
    ]
)

const dishes = new Map(
  [
    ["Маргарита", "Пицца"],
    ["Пепперони", "Пицца"],
    ["Три сыра", "Пицца"],
    ["Филадельфия", "Суши"],
    ["Калифорния", "Суши"],
    ["Чизмаки", "Суши"],
    ["Сеякемаки", "Суши"],
    ["Тирамису", "Десерт"],
    ["Чизкейк", "Десерт"]
  ]
)

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Service {
  // метод для получения имени шефа, который готовит такой тип блюда
  static getChiefByDishType(dishName) {
    let chiefName = null;
    chiefs.forEach(function(value, key){
      if (value === dishName) {
        chiefName = key
      }
    })
    return chiefName
  }
  // метод для проверки возможности заказа блюда
  static checkDish(dish) {
    return dishes.has(dish)
  }
  // метод для вывода информации после успешного заказа
  static printOrder (client) {
    console.log(`\nКлиент ${client.firstname} заказал:`)
    client.orders.forEach(function(order) {
      console.log(`${order.type} "${order.name}" - ${order.quantity}; готовит повар ${Service.getChiefByDishType(order.type)}`)
    } )
  }
}

class Manager {
  newOrder(client, ...orders) {
    for (const order of orders) {
      let findIndex = (client.orders.findIndex((item) => item.name === order.name))
      if (Service.checkDish(order.name)){
        if (findIndex === -1) {
          client.orders.push(order)
        } else {
          client.orders[findIndex].quantity += order.quantity
        }
      } else throw `${order.type} "${order.name}" - такого блюда не существует`
    }
    Service.printOrder(client)
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал:
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

console.log()

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал:
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.
