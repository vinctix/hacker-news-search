import News from '../models/news';
import Search from '../models/news-search';

const apiUrl = 'http://hn.algolia.com/api/v1/search';

function SearchHackNewsStories(query: string, callback: (newsList: News[]) => void) {
  const url = apiUrl + '?tags=story&query=' + query;
  const requestOptions: RequestInit = {
    method: 'GET',
  };
  fetch(url, requestOptions)
    .then(response => response.json())
    .then((x: Search) => callback(x.hits));
}

export default SearchHackNewsStories;