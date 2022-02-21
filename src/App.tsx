import { useState } from 'react';
import News from './models/news';
import SearchInput from './components/SearchInput';
import NewsListItem from './components/NewsListItem';
import Header from './components/Header';

function App() {
  const [newsList, setNewsList] = useState<News[]>([]);

  return (
    <div className="App w-full h-screen">
      <div className="pt-10 px-3 flex flex-col items-center">
        <Header />
        <div className='mt-10 w-full max-w-md'>
          <SearchInput newsReceived={setNewsList} />
        </div>
        <ul className="mt-10 space-y-5 max-w-full">
        {newsList.map(news => {
          return (
            <NewsListItem news={news} key={news.objectID} />
          );
        })}
      </ul>
      </div>
    </div>
  ); 
}

export default App;
