var order = [];

function selectToppingStart(){
  $('.row').remove();
  $('.selectSomething').text("Select Toppings");
  const post_template = Handlebars.compile(document.querySelector('#toppings').innerHTML);
  document.querySelector('body').innerHTML += post_template();

}
function selectSize(size){
  order.push([]);
  order[order.length-1].push(size);
  selectToppingStart();
}
function selectTopping(topping){
  for( var i = 0; i < order[order.length-1].length; i++){
    if ( order[order.length-1][i] === $(topping).text()) {
      order[order.length-1].splice(i, 1);
      $(topping).css("color", "White");
      return 0;
    }
  }
  if(order[order.length-1].length==4){
    alert("You already picked 3 toppings, try removing one before adding a new topping");
    return 0;
  }
  order[order.length-1].push($(topping).text());
  $(topping).css("color", "SpringGreen");
}
function backTopping(){
  order.pop();
  $('.toppingsmenu').remove();
  $('.selectSomething').text("Select Size");
  const post_template = Handlebars.compile(document.querySelector('#size').innerHTML);
  document.querySelector('body').innerHTML += post_template();
}
