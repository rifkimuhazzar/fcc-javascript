// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (!records[id]) {
      return console.log("The id doesn't exist!");
    }
  
    if (prop === "tracks") {
      if (!records[id].hasOwnProperty("tracks")) {
        records[id].tracks = [];
      }
  
      if (value.trim() === "" && prop.length === 0) {
        delete records[id].tracks;
      } else if (value.trim() === "") {
        return records;
      } else {
        records[id].tracks.push(value);
      }
    } else {
      if (value.trim() === "") {
        delete records[id][prop];
      } else {
        records[id][prop] = value;
      }
    }
  
    return records;
  }
  
  updateRecords(recordCollection, 5439, "artist", "ABBA");
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  updateRecords(recordCollection, 2548, "artist", "");
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
  updateRecords(recordCollection, 2468, "tracks", "Free");
  updateRecords(recordCollection, 2548, "tracks", "");
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
  updateRecords(recordCollection, 123, "test1", "test2");
  
  updateRecords(recordCollection, 5439, "tracks", "");
  console.log(recordCollection);