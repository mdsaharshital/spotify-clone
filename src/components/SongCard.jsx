import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, i }) => {
  const activeSong = 'ahg';
  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm  rounded-lg animate-slideup cursor-pointer">
      <div className="relative w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause />
        </div>
        <img src={song.images?.coverart} alt="" />
        <div />

      </div>
        <div className="mt-4 flex flex-col">
          <p className='text-white'>
            <Link>
              {song.title}
            </Link>
          </p>
        </div>
    </div>
  );
};
export default SongCard;
