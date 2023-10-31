const phoneNumbers = [
  "John:123-456-7890",
  "Jane:987-654-3210",
  "Joe:555-555-5555",
];

function convertToDirectory(phoneNumbers) {
  const directory = new Map();

  for (let entry of phoneNumbers) {
    const [name, number] = entry.split(":");
    directory.set(name, number);
  }
  return directory;
}

console.log(convertToDirectory(phoneNumbers));
