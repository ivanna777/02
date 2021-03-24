function fetchPicture(searchPicture) { 
    return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchPicture}&page=1&per_page=12&key=20828965-4298cb7d6f87f653ca708a263`)
    .then(response => response.json())
    .then(data => {
        console.log(data.hits)
        return data.hits
    });
}

export default {fetchPicture}

//     const KEY_API = '20828965-4298cb7d6f87f653ca708a263';
// const BASE_URL = 'https://pixabay.com/api/';

    // const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchPicture}&page=1&per_page=12&key=20828965-4298cb7d6f87f653ca708a263`
    // const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchPicture}&page=1&per_page=12&key=${KEY_API}`;