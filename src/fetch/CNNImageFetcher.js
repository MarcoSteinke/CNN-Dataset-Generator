class CNNImageFetcher {

    apiRequestURL;
    apiRequestToken;

    constructor(apiRequestToken) {
        this.apiRequestURL = "https://pixabay.com/api/";
        this.apiRequestToken = apiRequestToken;
    }

    async fetchImages(searchString, amountOfImages, options) {
        const results = [];

        for (let index = 0; index < amountOfImages; index++) {
            (await this.requestPictureFromAPI(searchString)).then((response) => {
                results.push(response);
            })
        }
    }

    static async requestPictureFromAPI(query) {
        let result = null;
        await fetch([this.apiRequestURL, ["key=" + this.apiRequestToken, "q=" + query.landkreis].join("&")].join("?")).catch(() => console.log("wrong request"))
            .then(res => res.json())
            .then(json => result = (json.totalHits > 0) ? json.hits : null);

        
        if(!result) {
            return "";
        }


        let random = Math.floor(Math.random() * result.length);
        return result != null ? {url: result[random].webformatURL, user: result[random].user, page: result[random].pageURL} : null;
    }
}

module.exports = CNNImageFetcher;