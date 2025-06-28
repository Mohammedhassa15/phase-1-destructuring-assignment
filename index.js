// 1. Animal sounds
const animalSounds = {
  moo: 'cow',
  neigh: 'horse',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken'
};
const { moo, neigh, baa, oink, cluck } = animalSounds;

// 2. Traditional animal names (excluding horse)
const traditionalAnimals = {
  bessie: 'cow',
  dolly: 'sheep',
  babe: 'pig',
  little: 'chicken'
};
const { bessie, dolly, babe, little } = traditionalAnimals;

// 3. Animal colors (excluding chicken)
const animalColors = {
  blackAndWhite: 'cow',
  black: 'sheep',
  pink: 'pig'
};
const { blackAndWhite, black, pink } = animalColors;

// 4. Rainbow color names
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Rainbow initials (skip indigo)
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo separately
const [, , , , , indg] = colors;

// 7. Muppet details
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const { muppetName, color, song, job, partner } = muppet;

// 8. Nested Muppet info
const nestedMuppet = {
  name: 'Kermit',
  color: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  job: 'Host of The Muppet Show',
  partner: 'Miss Piggy'
};
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  job: nestedJob,
  partner: nestedPartner
} = nestedMuppet;
