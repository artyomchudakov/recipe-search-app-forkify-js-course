import View from './View';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recepies found for your query. Please, try again.';
  _successMessage = '';

  _generateMarkup() {
    // And so then all of this year will basically become a string. And so in the end, we end up with an array of strings.
    // So because of map, and then in the end we join all of that together and end up with
    // a big string with all the markup that we want to render.
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
