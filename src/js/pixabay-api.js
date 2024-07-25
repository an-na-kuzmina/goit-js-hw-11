export function searchImagesByUserQuery(searchQuery) {
  const requestParams = new URLSearchParams({
    key: '45094869-2592a7d622688fe6b4ce663f6',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${requestParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching images', error);
      throw error;
    });
}
