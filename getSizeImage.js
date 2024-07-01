function getSizeImage(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.blob();
        })
        .then(blob => {
            const sizeInBytes = blob.size;
            const sizeInKB = sizeInBytes / 1024;
            return sizeInKB;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
// Usage example:
let url_image = 'http://127.0.0.1:8001/assets/file/paket_tour/paket_tour_54a881cae86a509e6e4345c78e34b31b.jpg';
getSizeImage(url_image).then(sizeInKB => {
    console.log(`Size of the image: ${sizeInKB.toFixed(2)} KB`);
});
