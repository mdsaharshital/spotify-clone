import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';

const Discover = () => {
  const genreTitle = 'Pop';

  return (
    <div className="flex flex-col ">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h1 className="text-white text-3xl font-bold text-left">Discover {genreTitle}</h1>
        <select onChange={() => {}} name="genre" id="" className="bg-black p-3 text-gray-300 text-sm rounded-lg outline-none sm:mt-0 mt-5">
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
