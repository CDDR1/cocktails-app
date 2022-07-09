const Searchbar = ({onTextChange}) => {
    return (
        <div className='w-full bg-white p-5 rounded-sm shadow-lg max-w-2xl mx-auto mt-10 flex flex-col'>
            <span className='inline-block mb-2.5 font-semibold'>Search your favorite cocktail!</span>
            <input onChange={(e) => onTextChange(e.target.value)} type='text' placeholder='Type here...' className='bg-blue-100 border-2 border-blue-400 rounded-sm px-1 py-2 lg:py-1'></input>
        </div>
    );
};

export default Searchbar;