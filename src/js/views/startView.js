import View from './View';

class StartView extends View {
  _parentElement = document.querySelector('.recipe');
  _input = document.querySelector('.search__field');
  _logo = document.querySelector('.header__logo');

  addHandlerCopyToInput() {
    this._parentElement.addEventListener(
      'click',
      this._addCopyQueryToInput.bind(this)
    );
  }
  _addCopyQueryToInput(e) {
    const queryElement = e.target.closest('.query-item__link');
    if (!queryElement) return;

    const query = queryElement.innerHTML.trim();
    this._input.value = query;
  }

  _searchQueries =
    'carrot,broccoli,asparagus,cauliflower,corn,cucumber,green pepper,lettuce,mushrooms,onion,potato,pumpkin,red pepper,tomato,beetroot,brussel sprouts,peas,zucchini,radish,sweet potato,artichoke,leek,cabbage,celery,chili,garlic,basil,coriander,parsley,dill,rosemary,oregano,cinnamon,saffron,green bean,bean,chickpea,lentil,apple,apricot,avocado,banana,blackberry,blackcurrant,blueberry,boysenberry,cherry,coconut,fig,grape,grapefruit,kiwifruit,lemon,lime,lychee,mandarin,mango,melon,nectarine,orange,papaya,passion fruit,peach,pear,pineapple,plum,pomegranate,quince,raspberry,strawberry,watermelon,salad,pizza,pasta,popcorn,lobster,steak,bbq,pudding,hamburger,pie,cake,sausage,tacos,kebab,poutine,seafood,chips,fries,masala,paella,som tam,chicken,toast,marzipan,tofu,ketchup,hummus,chili,maple syrup,parma ham,fajitas,champ,lasagna,poke,chocolate,croissant,arepas,bunny chow,pierogi,donuts,rendang,sushi,ice cream,duck,curry,beef,goat,lamb,turkey,pork,fish,crab,bacon,ham,pepperoni,salami,ribs';

  _generateMarkup() {
    const markup = `
    <ul class="search-queries">
      ${this._searchQueries.split(',').map(this._generateListItem).join('')}
    </ul>
    `;
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }
  _generateListItem(item) {
    return `
      <li class="query-item">
        <a class="query-item__link" href="#">
          ${item}
        </a>
      </li>
      `;
  }
}

export default new StartView();
