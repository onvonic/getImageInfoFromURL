function formatFileSize(sizeInBytes) {
        const sizeInKB = sizeInBytes / 1024;
        if (sizeInKB < 1024) {
            return `${sizeInKB.toFixed(2)} KB`;
        }

        const sizeInMB = sizeInKB / 1024;
        if (sizeInMB < 1024) {
            return `${sizeInMB.toFixed(2)} MB`;
        }

        const sizeInGB = sizeInMB / 1024;
        return `${sizeInGB.toFixed(2)} GB`;
    }
async function getImageInfoFromURL(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch image from URL.');
        }

        const blob = await response.blob();
        const fileSizeInBytes = blob.size;
        const fileType = blob.type.split('/')[1]; // extension
        const img = new Image();

        img.onload = function() {
            const imgWidth = this.width;
            const imgHeight = this.height;

            const imageInfo = {
                extension: fileType,
                width: imgWidth,
                height: imgHeight,
                size: fileSizeInBytes,
                formattedSize: formatFileSize(fileSizeInBytes)
            };

            console.log(imageInfo);
        };

        img.src = URL.createObjectURL(blob);
    } catch (error) {
        console.error(error.message);
    }
}
const imageUrl = 'http://127.0.0.1:8001/assets/file/paket_tour/paket_tour_679e97081cfb1507f6eb9ee660c455d7.jpg';
getImageInfoFromURL(imageUrl);

// extension: "jpeg"
// formattedSize: "1.46 MB"
// height: 1350
// size: 1526575
// width : 1080
