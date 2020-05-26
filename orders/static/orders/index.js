var order = [];

function selectToppingStart(){
  $('.selectPizza').remove();
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
    if ( order[order.length-1][i] === $(topping).text().replace(/\s/g,'')) {
      order[order.length-1].splice(i, 1);
      $(topping).css("color", "White");
      return 0;
    }
  }
  if(order[order.length-1].length==4){
    alert("You already picked 3 toppings, try removing one before adding a new topping");
    return 0;
  }
  order[order.length-1].push($(topping).text().replace(/\s/g,''));
  $(topping).css("color", "SpringGreen");
}
function backTopping(){
  order.pop();
  $('.toppingsmenu').remove();
  $('.selectSomething').text("Select Size");
  const post_template = Handlebars.compile(document.querySelector('#size').innerHTML);
  document.querySelector('body').innerHTML += post_template();
}
function openMenu(){
  $('.cart').toggle();
}
function addToCart(){
  const post_template = Handlebars.compile(document.querySelector('#pizzaOrder').innerHTML);
  var context = {};
  context["size"] = order[order.length-1][0].charAt(0).toUpperCase() + order[order.length-1][0].slice(1);
  context["toppingsSub"] = [];
  for(var i=1; i<order[order.length-1].length;i++){
    if(i==order[order.length-1].length-1){
      context["toppingsSub"].push(order[order.length-1][i]);
    }
    else{
      context["toppingsSub"].push(order[order.length-1][i].concat(','));
    }
  }
  post = post_template(context);
  alert(post);
  $('.cart').append(post);
}
function deleteItem(button){
  button.parentElement.remove();
}
