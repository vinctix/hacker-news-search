import { useState } from 'react';
import News from '../models/news';
import FormatStringDate from '../services/format-string-date';
import './NewsListItem.css';
type SearchItemProps = {
  news: News,
};

function NewsListItem(props: SearchItemProps) {
  const [news] = useState<News>(props.news);

  return (
    <li
      className="NewsListItem flex space-x-3"
    >
      <div className="flex flex-col items-center w-auto">
        <div className='text-center text-sm'>SCORE</div>
        <div className="px-1 bg-blue-500 text-white rounded text-sm text-center score">
          {news.points | 0} pts.
        </div>
      </div>
      <div className='grow flex flex-col'>
        <a href={news.url} className="hover:text-blue-600" target="_blank" rel='noreferrer'>{news.title}</a>
        <div className='flex justify-between text-gray-500'>
          <div>{news.author}</div>
          <div>{FormatStringDate(news.created_at)}</div>
        </div>
      </div>
    </li>   
  );
}

export default NewsListItem;