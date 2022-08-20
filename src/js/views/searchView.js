class SearchView {
  _parentElement = document.querySelector('.search');
  // #placeholder = this.#parentElement
  //   .querySelector('.search__field')
  //   .setAttribute('placeholder', 'Search over 1,000,000 recipes...');

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
