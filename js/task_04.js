const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName, onSuccess, onError) {
        if (this.pizzas.includes(pizzaName)) {
            return onSuccess(pizzaName);  
        }
        return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
    },
};
// Пиши код выше этой строки
  
// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}
  
// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}