var APP_DATA = {
  "scenes": [
    {
      "id": "0-geologi-indonesia",
      "name": "Geologi Indonesia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.3634885216758903,
        "pitch": 0.08650002335771845,
        "fov": 1.3602495036333777
      },
      "linkHotspots": [
        {
          "yaw": -0.29043894396519576,
          "pitch": -0.002097848631223087,
          "rotation": 0,
          "target": "1-loby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1294766158645189,
          "pitch": 0.3566347731928641,
          "title": "Batuan Koral",
          "text": "Lorem Ipsum"
        }
      ]
    },
    {
      "id": "1-loby",
      "name": "Loby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -0.4036255718309185,
        "pitch": -0.1732605604287869,
        "fov": 1.3602495036333777
      },
      "linkHotspots": [
        {
          "yaw": 2.3149732594248995,
          "pitch": 0.14044695490775716,
          "rotation": 0,
          "target": "0-geologi-indonesia"
        },
        {
          "yaw": 0.7192230157486819,
          "pitch": 0.01910799137819197,
          "rotation": 0,
          "target": "2-halaman"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.43289662266680473,
          "pitch": 0.1516153693311253,
          "title": "Gajah Blora",
          "text": "Gajah Blora atau dengan nama latin&nbsp;Elephas hysudrindicus adalah fosil yang&nbsp;ditemukan oleh tim ahli dari museum geologi yang dipimpin oleh Iwan Kurniawan dengan anggota Fachroel Aziz, Sidarto, Erick Setyabudi, dan Dadang, dalam suatu survei di tepian Bengawan Solo purba, Dusun Sunggun, Desa Mendalem, Kecamatan Kradenan, Kabupaten Blora, Provinsi Jawa Tengah pada tahun 2009. Ekskavasi dilakukan pada November 2009 oleh tim yang bekerja sama dengan tim dari Dinas Pariwisata Kabupaten Blora dan Wollongong University (Gert Van den Bergh dan Mike Morwood). Proses ekskavasi, preparasi, rekonstruksi, hingga peragaan fosil tersebut memakan waktu sekitar empat tahun. Gajan yang berjenis kelamin jantan dan memiliki tinggi sekitar empat meter, panjangnya lima meter, dan berat 6-8 ton ini hidup sekitar 165.000 tahun yang lalu, dan mati pada umur 49 tahun.&nbsp;"
        }
      ]
    },
    {
      "id": "2-halaman",
      "name": "Halaman",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -0.010143931968819686,
        "pitch": -0.13026090908827825,
        "fov": 1.3602495036333777
      },
      "linkHotspots": [
        {
          "yaw": -0.020859445613560013,
          "pitch": 0.13087223699675654,
          "rotation": 0,
          "target": "1-loby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5806677857149047,
          "pitch": -0.35432930057312184,
          "title": "Museum Geologi Bandung",
          "text": "Didirikan pada"
        }
      ]
    }
  ],
  "name": "Virtual Museum",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
