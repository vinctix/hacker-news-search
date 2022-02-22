import { useState } from 'react';
import useBadgeClass from '../hooks/UseBadgeClass';
import News from '../models/news';
import FormatStringDate from '../services/format-string-date';
import './NewsListItem.css';

type SearchItemProps = {
  news: News,
};

function NewsListItem(props: SearchItemProps) {
  const [news] = useState<News>(props.news);
  const badgeColor = useBadgeClass(props.news.points);

  return (
    <li
      className="NewsListItem flex space-x-3"
    >
      <div className="flex flex-col items-center w-auto">
        <div className='text-center text-sm'>SCORE</div>
        <div className={`px-1 ${badgeColor} text-white rounded text-sm text-center score`}>
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