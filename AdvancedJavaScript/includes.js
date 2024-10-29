const emojis = ['🐥','🐯','🐼']

const duckExists = (emojis.includes('🐥'))?"The duck exists":(emojis.includes('🐯'))?"Duck does not exist but lion does":"neither lion nor duck exists";

console.log(duckExists)