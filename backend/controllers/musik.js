const express = require("express")
const app = express()
const { Storage } = require('@google-cloud/storage');

class musik{
    async listMusicFiles(bucketName) {
        try{
            const storage = new Storage({
                projectId:"sootheme-388911"
            });
            const bucket = storage.bucket(bucketName);
          
            const [files] = await bucket.getFiles({ prefix: 'filemusik/SootheMeSic/' });
          
            console.log('Daftar file musik:');
            files.forEach((file) => {
              console.log(file.name);
            });
            const bucketName = 'soothemesic';
            listMusicFiles(bucketName)
            .catch(console.error);
        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    };
      
      // Contoh penggunaan


}

module.exports = new musik();
