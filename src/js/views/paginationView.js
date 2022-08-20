import View from './View';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');
  _prevPage;
  _nextPage;

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    this._prevPage = this._generateMarkupButton('prev', curPage);
    this._nextPage = this._generateMarkupButton('next', curPage);

    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) return this._nextPage;

    // Last page
    if (curPage === numPages && numPages > 1) return this._prevPage;

    // Other page
    if (curPage < numPages) return `${this._prevPage}${this._nextPage}`;

    // Page 1 and there are NO other pages
    return '';
  }
  _generateMarkupButton(type, page) {
    if (type === 'prev') {
      return `
        <button data-goto=${page - 1} class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${page - 1}</span>
        </button>
      `;
    }
    if (type === 'next') {
      return `
        <button data-goto=${page + 1} class="btn--inline pagination__btn--next">
          <span>Page ${page + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>`;
    }
  }
}

export default new PaginationView();
