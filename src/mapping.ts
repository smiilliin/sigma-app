const mapping = [
  {
    title: "Chopin - Ballade No. 4 in F Minor (4M Special)",
    url: "https://www.youtube.com/watch?v=3F5glYefwio",
    index: 1,
  },
  {
    title: "Liszt - Mazeppa (Transcendental Étude No. 4)",
    url: "https://www.youtube.com/watch?v=bERHoak63FA",
    index: 2,
  },
  {
    title: "Tchaikovsky - Waltz of the Flowers (The Nutcracker Suite)",
    url: "https://www.youtube.com/watch?v=1aR92yQUS7s",
    index: 3,
  },
  {
    title: "Scriabin - Etude Op. 8 No. 12",
    url: "https://www.youtube.com/watch?v=JFnjwGlzX6A",
    index: 4,
  },
  {
    title: "Debussy - La cathédrale engloutie (The Sunken Cathedral)",
    url: "https://www.youtube.com/watch?v=SJILQWePbt4",
    index: 5,
  },
  {
    title:
      "Mussorgsky - Pictures at an Exhibition (Baba Yaga & The Great Gate of Kiev)",
    url: "https://www.youtube.com/watch?v=0w5yI9ktJVo",
    index: 6,
  },
  {
    title: "Chopin - Etude Op. 25 No. 9 (Butterfly)",
    url: "https://www.youtube.com/watch?v=WZYHvEF84NQ",
    index: 7,
  },
  {
    title: "Debussy - Clair de Lune",
    url: "https://www.youtube.com/watch?v=XkgyOZxIw0k",
    index: 8,
  },
  {
    title:
      "Ravel - Pavane for a Dead Princess (Pavane pour une infante défunte)",
    url: "https://www.youtube.com/watch?v=q9tcHoD6r0c",
    index: 9,
  },
  {
    title: "Bach - Toccata and Fugue in D Minor",
    url: "https://www.youtube.com/watch?v=y3AiGw8mkq0",
    index: 10,
  },
  {
    title: "Chopin - Etude Op. 25 No. 5 (Wrong Note)",
    url: "https://www.youtube.com/watch?v=g7C2it9cCsY",
    index: 11,
  },
  {
    title: "Tchaikovsky - Dance of the Sugar Plum Fairy (The Nutcracker Suite)",
    url: "https://www.youtube.com/watch?v=sdduPpnqre4",
    index: 12,
  },
  {
    title: "Rachmaninoff - Moment Musicaux No. 4 in E Minor",
    url: "https://www.youtube.com/watch?v=v8rzHZHi9Zw",
    index: 13,
  },
  {
    title: "Ravel - Gaspard de la nuit (Full)",
    url: "https://www.youtube.com/watch?v=n_yIgrkSNzE",
    index: 14,
  },
  {
    title: "Mozart - Piano Sonata No. 8 in A minor, K. 310 (1st Movement)",
    url: "https://www.youtube.com/watch?v=n68f_Oh2N1k",
    index: 15,
  },
  {
    title: "Chopin - Raindrop Prelude (Op. 28 No. 15)",
    url: "https://www.youtube.com/watch?v=HVau-JRGirg",
    index: 16,
  },
  {
    title: "Chopin - Heroic Polonaise (Op. 53 in A Flat Major)",
    url: "https://www.youtube.com/watch?v=p_iI1J0bALE",
    index: 17,
  },
  {
    title: "Liebesleid (Love's Sorrow) - Kreisler (arr. Rachmaninoff)",
    url: "https://www.youtube.com/watch?v=ZFvx32SjAtE",
    index: 18,
  },
  {
    title: "Ravel - Scarbo (Gaspard de la nuit)",
    url: "https://www.youtube.com/watch?v=8fcy2X06VH4",
    index: 19,
  },
  {
    title:
      "Mozart - Twinkle Twinkle Little Star (12 variations on Ah vous dirai-je, Maman)",
    url: "https://www.youtube.com/watch?v=hCKBl-TpRzc",
    index: 20,
  },
  {
    title: "Liszt - Hungarian Rhapsody No.  2",
    url: "https://www.youtube.com/watch?v=ALqOKq0M6ho",
    index: 21,
  },
  {
    title: "Debussy - Rêverie",
    url: "https://www.youtube.com/watch?v=_CUC2-S1NMI",
    index: 22,
  },
  {
    title: "Bach - Prelude & Fugue No. 2 in C Minor",
    url: "https://www.youtube.com/watch?v=vcC4Thug-h8",
    index: 23,
  },
  {
    title: "Liszt - Consolation No. 3",
    url: "https://www.youtube.com/watch?v=CS58YQaVIaA",
    index: 24,
  },
  {
    title: "Schubert - Serenade (arr. Liszt)",
    url: "https://www.youtube.com/watch?v=lv5xPlm6etI",
    index: 25,
  },
  {
    title: "Chopin - Etude Op. 25 No. 12 (Ocean)",
    url: "https://www.youtube.com/watch?v=pRlHKQXjzZY",
    index: 26,
  },
  {
    title: "Debussy - Reflets dans l'eau (Images)",
    url: "https://www.youtube.com/watch?v=Q64UJcKjFQE",
    index: 27,
  },
  {
    title: "Top 10 Most Difficult Piano Pieces",
    url: "https://www.youtube.com/watch?v=l15PDRSTn7s",
    index: 28,
  },
  {
    title: "Vivaldi - Summer (The Four Seasons)",
    url: "https://www.youtube.com/watch?v=H_3JiTfmuzg",
    index: 29,
  },
  {
    title: "Mozart - Piano Sonata No. 16 in C Major, K.545 (1st Mvt)",
    url: "https://www.youtube.com/watch?v=qjk-YRuQZDE",
    index: 30,
  },
  {
    title: "Chopin - Waltz in C Sharp Minor (Op. 64 No. 2)",
    url: "https://www.youtube.com/watch?v=SUT_0c2QVzo",
    index: 31,
  },
  {
    title: "Chopin - Marche Funèbre (Funeral March)",
    url: "https://www.youtube.com/watch?v=7-9wXQpzESo",
    index: 32,
  },
  {
    title: "J.S. Bach - Air",
    url: "https://www.youtube.com/watch?v=xDWG9SrB4io",
    index: 33,
  },
  {
    title: "Liszt - Hungarian Rhapsody No. 6 (1,500,000 SPECIAL)",
    url: "https://www.youtube.com/watch?v=gq5GoeHIUIA",
    index: 34,
  },
  {
    title: "Chopin - Etude Op. 10 No. 1 (Waterfall)",
    url: "https://www.youtube.com/watch?v=JRgQgr4-at8",
    index: 35,
  },
  {
    title: "Vivaldi - Spring (The Four Seasons)",
    url: "https://www.youtube.com/watch?v=jGFqtOdEIWk",
    index: 36,
  },
  {
    title: "Chopin - Etude Op. 10 No. 3 (Tristesse)",
    url: "https://www.youtube.com/watch?v=bzBH9Nm1BP8",
    index: 37,
  },
  {
    title: "The Most Insane Piano Pieces (Vol.  2)",
    url: "https://www.youtube.com/watch?v=TbOZXL8Vz4w",
    index: 38,
  },
  {
    title: "Vivaldi - Winter (The Four Seasons)",
    url: "https://www.youtube.com/watch?v=6El8B8hJ4Sg",
    index: 39,
  },
  {
    title: "Minuet in G Major - Bach (Petzold)",
    url: "https://www.youtube.com/watch?v=icZob9-1MDw",
    index: 40,
  },
  {
    title: "Happy Birthday if it were written by Liszt",
    url: "https://www.youtube.com/watch?v=YvBjmZFRYR0",
    index: 41,
  },
  {
    title: "Chopin - Revolutionary Etude (Op. 10 No. 12)",
    url: "https://www.youtube.com/watch?v=g1uLrHq9TDg",
    index: 42,
  },
  {
    title: "Chopin - Etude Op. 10 No. 5 (Black Keys)",
    url: "https://www.youtube.com/watch?v=8tcnuRsfgUQ",
    index: 43,
  },
  {
    title: "Rachmaninoff - Prelude in G Minor (Op. 23 No. 5)",
    url: "https://www.youtube.com/watch?v=SlcQWUn5DeI",
    index: 44,
  },
  {
    title: "Chopin - Nocturne in C Sharp Minor (No. 20)",
    url: "https://www.youtube.com/watch?v=DqpPRj6UZqc",
    index: 45,
  },
  {
    title: "Chopin - Fantaisie-Impromptu (Op. 66)",
    url: "https://www.youtube.com/watch?v=Gus4dnQuiGk",
    index: 46,
  },
  {
    title: "Liszt - Liebestraum No. 3 (Love Dream)",
    url: "https://www.youtube.com/watch?v=MBOa-2b4uQQ",
    index: 47,
  },
  {
    title: "Chopin - Ballade No. 1 in G Minor (1M special)",
    url: "https://www.youtube.com/watch?v=Zj_psrTUW_w",
    index: 48,
  },
  {
    title: "Liszt - Un Sospiro",
    url: "https://www.youtube.com/watch?v=L42sbnQxEmw",
    index: 49,
  },
  {
    title: "Carol of the Bells (Christmas Piano Cover)",
    url: "https://www.youtube.com/watch?v=Z3bNAvaQihA",
    index: 50,
  },
  {
    title: "Chopin - Prelude in B Minor (Op. 28 No. 6)",
    url: "https://www.youtube.com/watch?v=_FiZ5zvAITs",
    index: 51,
  },
  {
    title: "J.S. Bach - Prelude in C Major",
    url: "https://www.youtube.com/watch?v=frxT2qB1POQ",
    index: 52,
  },
  {
    title: "The Most Insane Piano Pieces (Vol.  1)",
    url: "https://www.youtube.com/watch?v=AEMgNMNeBr4",
    index: 53,
  },
  {
    title: "Beethoven - Moonlight Sonata (Full)",
    url: "https://www.youtube.com/watch?v=4591dCHe_sE",
    index: 54,
  },
  {
    title: "Chopin - Etude Op. 25 No. 11 (Winter Wind)",
    url: "https://www.youtube.com/watch?v=gZjdAWgjLx8",
    index: 55,
  },
  {
    title: "Chopin - Minute Waltz (Op. 64 No. 1)",
    url: "https://www.youtube.com/watch?v=3H0SRv8QNwk",
    index: 56,
  },
  {
    title: "Beethoven - Moonlight Sonata (3rd Movement)",
    url: "https://www.youtube.com/watch?v=BV7RkEL6oRc",
    index: 57,
  },
  {
    title: "Beethoven - Moonlight Sonata (2nd Movement)",
    url: "https://www.youtube.com/watch?v=6Lpf4AQSLCg",
    index: 58,
  },
  {
    title: "Chopin - Etude Op. 10 No. 4 (Torrent)",
    url: "https://www.youtube.com/watch?v=oHiU-u2ddJ4",
    index: 59,
  },
  {
    title: "Chopin - Prelude in E Minor (Op. 28 No. 4)",
    url: "https://www.youtube.com/watch?v=CU9RgI9j7Do",
    index: 60,
  },
  {
    title: "Rachmaninoff - Prelude in C Sharp Minor (Op. 3 No. 2)",
    url: "https://www.youtube.com/watch?v=sCtixpIWBto",
    index: 61,
  },
  {
    title: "Liszt - La Campanella (100,000 special)",
    url: "https://www.youtube.com/watch?v=H1Dvg2MxQn8",
    index: 62,
  },
  {
    title: "Beethoven - Moonlight Sonata (1st Movement)",
    url: "https://www.youtube.com/watch?v=sbTVZMJ9Z2I",
    index: 63,
  },
  {
    title: "Flight of the Bumblebee - Rimsky-Korsakov (arr. Rachmaninoff)",
    url: "https://www.youtube.com/watch?v=M93qXQWaBdE",
    index: 64,
  },
  {
    title: "Satie - Gymnopédie No. 1",
    url: "https://www.youtube.com/watch?v=2WfaotSK3mI",
    index: 65,
  },
  {
    title: "Debussy - Arabesque No. 1",
    url: "https://www.youtube.com/watch?v=cVYH-7QGE-A",
    index: 66,
  },
  {
    title: "Beethoven - Für Elise",
    url: "https://www.youtube.com/watch?v=wfF0zHeU3Zs",
    index: 67,
  },
  {
    title: "Debussy - Clair de Lune",
    url: "https://www.youtube.com/watch?v=WNcsUNKlAKw",
    index: 68,
  },
  {
    title: "Chopin - Nocturne in E Flat Major (Op. 9 No. 2)",
    url: "https://www.youtube.com/watch?v=p29JUpsOSTE",
    index: 69,
  },
  {
    title: "Mozart - Rondo Alla Turca (Turkish March)",
    url: "https://www.youtube.com/watch?v=aeEmGvm7kDk",
    index: 70,
  },
  {
    title: "Rachmaninoff - Little Red Riding Hood (Etude Tableau Op. 39 No. 6)",
    url: "https://www.youtube.com/watch?v=wXmL55DwuaQ",
    index: 71,
  },
];
export default mapping;
