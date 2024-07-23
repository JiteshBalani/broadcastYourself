import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { toggleMenu } from '../../utils/appSlice';
import { useEffect, useState } from 'react';
import { API_KEY, Search_API } from '../../utils/constants';
import { truncateTitle } from '../../utils/videoCardUtilities';

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // console.log(searchQuery);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchQuery) fetchSearchResults();
        }, 1800)

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const fetchSearchResults = async () => {
        const data = await fetch(`${Search_API}${searchQuery}&key=${API_KEY}`);
        const searchResults = await data.json();
        console.log(searchResults);
        setSuggestions(searchResults.items);
    }


    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    };


    return (
        <div>
            <div className='h-5 px-3 py-8 bg-gray-900 text-white flex items-center justify-between border-b-2 border-white'>
                <div className='h-5 flex items-center justify-between space-x-2'>
                    <img
                        onClick={() => toggleMenuHandler()}
                        className='w-8 rounded-lg cursor-pointer' alt='menu' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s' />
                    <Link to="/"><span className='font-bold text-2xl text-red-500'>YouTube</span></Link>
                </div>
                <div className='flex-col w-4/12 h-12 items-center justify-center '>
                    <div className='rounded-full w-full h-full flex items-center justify-center bg-gray-800 border border-gray-500 p-5'>
                        <input type='text' value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setShowSuggestions(true)}
                            onBlur={() => setShowSuggestions(false)}
                            className='bg-gray-800 w-5/6 outline-none' placeholder='Search' />

                        <button className='px-2 w-1/6 border-l-2 border-gray-500'>🔍</button>
                    </div>
                    {showSuggestions && (
                        <div className="fixed bg-black text-white z-50 shadow-lg rounded-lg">
                            <ul>
                                {suggestions.map((s, idx) => (
                                    <li title={s.snippet.title} key={idx} className="py-2 px-3 shadow-sm hover:bg-yellow-600 font-semibold">
                                        🔦  {truncateTitle(s.snippet.title, 67)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>


                <div className='h-5 flex items-center '>
                    <img className='w-8 rounded-full cursor-pointer' alt='user' src='https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Navbar