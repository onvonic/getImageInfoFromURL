function getRasioImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve({ width: img.width, height: img.height });
        };
        img.onerror = (error) => {
            reject(error);
        };
        img.src = url;
    });
}

let url_image = 'http://127.0.0.1:8001/assets/file/paket_tour/paket_tour_54a881cae86a509e6e4345c78e34b31b.jpg';

getRasioImage(url_image)
    .then(size => {
        console.log(`Width: ${size.width}, Height: ${size.height}`);
    })
    .catch(error => {
        console.error('Error loading image:', error);
    });
