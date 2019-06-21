var name;

another_person.hasOwnProperty = null; // trouble

for( name in another_person) {
  if (another_person.hasOwnProperty(name)) { // boom
    document.write(name + ': ' + another_person[name]);
  }
}