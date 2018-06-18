export const songFunction = (songs) => {
  let songObjects = [];
  songs.forEach(song => {
    const init = song.indexOf('(')
    const fin = song.indexOf(')')
    const songArtist = song.substr(init + 1, fin - init - 1)
    //console.log('SONG_ARTIST', songArtist)
    const songTitle = song.replace(songArtist, '').replace('()', '').trim()
    const res = {
      title: songTitle,
      artist: songArtist,
    }
    songObjects.push(res)
  })
  return songObjects
}

export const songStrings = [
  '500 Miles (The Proclaimers)',
  '7 Nation Army (White Stripes)',
  '99 Red Balloons (Goldfiner)',
  'Africa (Toto)',
  'Age of Worry (John Mayer)',
  'All I Have to Do is Dream (Everly Brothers)',
  'All The Small Things (Blink 182)',
  'American Girl (Tom Petty)',
  'Angel Down (Lady Gaga)',
  'Another Kind of Green (John Mayer)',
  'Another Saturday Night (Cat Stevens)',
  'Aud Lang Syne (Christmas)',
  'Bad Moon Rising (CCR)',
  'Beverly HIlls (Weezer)',
  'Bizzare Love Triangle (Frente)',
  'Blister in the Sun (Violent Fems)',
  'Boulevard of Broken Dreams (Green Day)',
  "Breakfast at Tiffeny's (Deep Blue Something)",
  'Breaking the Girl (RHCP)',
  'Bye Bye Love (Everly Brothers)',
  "Can't Help Falling in Love with You (Elvis)",
  "Can't Stop (RHCP)",
  'Ceiling Four Walls and a Floor (Johnny Cash)',
  'Champagne Supernova (Oasis)',
  'Chicken Fried ( Zak Brown Band)',
  'Cleopatra (The Lumineers)',
  'Cocain Blues (Johnny Cash)',
  'Country Roads (John Denver)',
  'Crazy Little Thing Called Love (Queen)',
  "Don't You Want Me Baby (Human League)",
  'Edge of Desire  (John Mayer)',
  'Eight Days A Week (Beatles)',
  'Everlong (Foo Fighters)',
  'Fast Car (Tracy Chapman)',
  'Folsom Prison Blues (Johnny Cash)',
  'Forever and Ever Amen (Randy Jackson)',
  'Fortunate Son (CCR)',
  'Free Falling (Tom Petty)',
  "Friday I'm In Love (The Cure)",
  'Friends in California (Johnny Cash)',
  'Fuck Her Gently (Tenacious D)',
  'Full Song Book v1.pdf',
  'Glycerin (Bush)',
  'Good (Better Than Ezra)',
  'Graceland (Willie Nelson)',
  'Gravity (John Mayer)',
  'Grigio Girls (Lady Gaga)',
  'Grow Old With You (Adam Sandler)',
  'Have You Ever Seen the Rain (CCR)',
  'Heartbreak Warfare (John Mayer)',
  'Hero (Foo Fighters)',
  'Hey Brother (Avicii)',
  'Ho Hey (The Lumineers)',
  'Hold My Hand (Hootie and the Blowfish)',
  'Hot and Cold (Katy Perry)',
  'Hotel Yorba (The White Stripes)',
  'Hunger Strike (Temple of the Dog)',
  'Hurt (Johny Cash)',
  'Hurt So Good (JCC)',
  'Hysterical (Yeah Yeah Yeahs)',
  'I Got A Woman (Ray Charles)',
  'I Wanna Be Sedated (The Ramones)',
  'I Will Survive (Cake)',
  "I'm Gonna Find Another You (John Mayer)",
  'Ibiza (Mike Posner)',
  'Icky Thump (White Stripes)',
  'In the Arms of the Angel (Sarah McGlocklan)',
  'In the Blood (John Mayer)',
  'Inside Out (Eve 6)',
  'Joanne (Lady Gaga)',
  'Jolene (White Striipes)',
  'Jumper (Third Eye Blind)',
  "Knocking on Heavens Door (G'n'R)",
  'La Bamba (Richie Valentine)',
  'Last Dance With Mary Jane (Tom Petty)',
  'Last Kiss (Pearl Jam)',
  'Last Thing I Needed (Willie Nelson)',
  'Learning to Fly (Tom Petty)',
  'Leaving On a Jetplane (John Denver)',
  'Let Her Cry (Hootie and the Blowfish)',
  'Lithium (Nirvana)',
  'Lodi (CCR)',
  'Long Time Gone (Everly Brothers)',
  'Long Time Gone (The Dixie Chicks)',
  'Longview (Green Day)',
  'Looking Out My Back Door (CCR)',
  'Love (Lana Del Rey)',
  'Love is a Verb (John Mayer)',
  'Love on the Weekend (John Mayer)',
  'Love Yourself (Justin Beiber)',
  'Machinehead (Bush)',
  'Man In The Box (Alice In Chains)',
  'Million Reasons (Lady Gaga)',
  'My Hero (Foo Fighters)',
  'My Name is Jonas (Weezer)',
  'My Own Worst Enemy (Lit)',
  'Norwegian Wood (The Beatles)',
  'Nothing Compares (Chris Cornell Version)',
  'Numb (Linkin Park)',
  'Ob La Di (The Beatles)',
  'Ophelia (The Lumineers)',
  'Pancho and Lefty (Willy Nelson)',
  'Peaches (Pres of USA)',
  'Polly (Nirvanna)',
  'Pride and Joy (SRV)',
  'Rambling Man (Alman Brothers)',
  'Redemption Song (Bob Marley)',
  'Ring of fire (Johnny Cash)',
  'Ring of Fire (Nirvana)',
  'Rocking in the Free World (Neil Young)',
  'Ruby Soho (Rancid)',
  'Santa is Coming to Town (MIsc)',
  'Santa Monica (Everclear)',
  'Santeria (Sublime)',
  "Say It Ain't So (Weezer)",
  'Scar Tissue (RHCP)',
  'Semi-Charmed Kinda Life (Third Eye Blind)',
  'Shine (Collective Soul)',
  'Simple Man (Skynard)',
  'Slow Dancing in a Burning Room (John Mayer)',
  'Smooth Criminal (Alien Ant Farm)',
  'Someday (The Strokes)',
  'Something Like Olivia (John Mayer)',
  'Song 2 (Blur)',
  'Space Oddity (David Bowie)',
  "Stacy's Mom (Fountains of Wayne)",
  'Stand by Me ( Ben King)',
  'Stay (Zedd)',
  'Stop This Train (John Mayer)',
  'Summer of 69 (Bryan Adams)',
  'Sweet Baby James (James Taylor)',
  'Sweet Dreams (The Eurythmics)',
  'Take Me Out (Franz Ferdinand)',
  'The Bad Touch (Bloodhound Gang)',
  'The Denial Twist (The White Stripes)',
  'The General - (Dispatch)',
  'The Impression That I Get (Mighty Mighty Bosstones)',
  'The Lion Sleeps Tonight (The Tokens)',
  'The Middle (Jimmy Eat World)',
  'The Rooster (Alice in Chains)',
  'The Times They are a Changing (Bob Dylan)',
  'The Waiting (Tom Petty)',
  'The Way (Fastball)',
  'Two of Us  (The Beatles)',
  'Two Princes (Spin Doctors)',
  'Under the Bridge (RHCP)',
  'Video Games (Lana Del Rey)',
  'Video Killed the Raido Star (The Buggles)',
  'Voodoo Child (Jimmy Hendrix)',
  'Wagon Wheel (Happieness Project)',
  'Waiting on the World to Change (John Mayer)',
  'Want You To Want Me (Cheap Trick)',
  'We All Float On (Modest Mouse)',
  "We're Gonna Be Friends (The White Stripes)",
  "What's My Age Again (Blink 182)",
  "What's Up (Three Non Blonds)",
  'When a Man Loves a Woman (Marvin Gay)',
  'When Will I Be Loved (Everly Brothers)',
  'When You Were Young (The Killers)',
  'Where is My Mind (The Pixies)',
  'Whisky Lullby (Brad Paisly)',
  'White Christmas (Bing Crosby)',
  'White Rabbit (Jefferson Airplane)',
  'Who Says (John Mayer)',
  "Who's Gonna Shoe Your Pretty Little Feet (Everly Brothers)",
  'Wild Night (John MElloncamp)',
  'Wildflowers (Tom Petty)',
  'Will You Still Love Me Tomorrow (Amy Weinhouse)',
  'With a Little Help From My Friends (The Beatles)',
  'Yesterday (The Beatles)',
  "You Don't Know How it Feels to be Me (Tom Petty)",
  'You Wreck Me (Tom Petty)',
  'Young Hearts (Rod Stewart)',
]
