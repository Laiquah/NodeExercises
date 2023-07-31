//EXERCISE 1
const fs = {writeFile, readFile, appendFile} = require('fs')

fs.writeFile('data.txt', 'Welcome to Cape Town.', function(err){
    try{
        console.log('Added content to text')
    }catch (err){
        throw(err)
    }
}
);

fs.writeFile('./data.txt', 'Call me the Polo Guy!', function(err){
    try{
        console.log('Replaced!')
    }catch(err){
        throw(err)
    }
});

//When I added more context it override the first content I added.

fs.appendFile('./data.txt', 'I hope this works!', function(err){
    try{
        console.log('It worked.')
    }catch(err){
        throw (err)
    }
});