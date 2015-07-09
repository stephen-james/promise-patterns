var chunkArray = function chunkArray(arr, chunkSize) {
    var dataChunks = [];
    var dataChunk = [];

    var threshold = chunkSize - 1;

    for (var i = 0, len = arr.length; i < len; i++) {
        dataChunk.push(arr[i]);
        if (i % chunkSize === threshold || i === len - 1) {
            dataChunks.push(dataChunk);
            dataChunk = [];
        }
    }

    return dataChunks;
};

module.exports = chunkArray;
