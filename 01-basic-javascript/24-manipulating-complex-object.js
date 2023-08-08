// array of object

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      artist: "aaaaa",
      title : "aaaaa",
      release_year: 2023,
      formats: ["aaaaa", "bbbbb"]
    }
  ];

  console.log(myMusic[1].artist);
  console.log(myMusic[1]["release_year"]);