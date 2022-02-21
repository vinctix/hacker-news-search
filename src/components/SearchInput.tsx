import News from '../models/news';
import SearchHackNewsStories from '../services/hacker-news-service';


type SearchProps = {
  newsReceived: (news: News[]) => any;
};

function SearchInput(props: SearchProps) {
  
  const handleChange = (e: any) => {
    if(!e.target.value) {
      props.newsReceived([]); 
      return;
    }
    SearchHackNewsStories(e.target.value, newsList => props.newsReceived(newsList));
  }

  return (
    <div className="Search">
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-2.5"
        placeholder="Effectuez une recherche sur Hacker News"
        onChange={handleChange}
      >
      </input>
    </div>
  );
}

export default SearchInput;