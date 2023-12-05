document.addEventListener('DOMContentLoaded', () => {
    const dogImageSection = document.getElementById('dogImage');

    // Function to fetch a random dog image
    const fetchData = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    };

    // Function to display the dog image on the webpage
    const displayDogImage = async () => {
        try {
            const data = await fetchData('https://dog.ceo/api/breeds/image/random');
            
            if (data && data.status === 'success') {
                const imageUrl = data.message;
                const image = document.createElement('img');
                image.classList.add('dog-image');
                image.src = imageUrl;
                dogImageSection.appendChild(image);
            } else {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = 'Failed to fetch dog image';
                dogImageSection.appendChild(errorMessage);
            }
        } catch (error) {
            console.error('Error fetching or displaying data:', error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Failed to fetch dog image';
            dogImageSection.appendChild(errorMessage);
        }
    };

    // Call the function to display the dog image
    displayDogImage();
});
