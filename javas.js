var catsBreeds = ['Ragdoll', 'Persian', 'Siamese', 'Bengal', 'Birman'];

console.log(catsBreeds);
console.log(catsBreeds[1]);
console.log(catsBreeds[3]);

console.log(catsBreeds[0], ',' ,catsBreeds[4])

console.log(catsBreeds.length)


var catsBreeds = prompt('Please enter the catsbreeds')


for(var i = 0; i < catsBreeds.length; i++) {

  console.log(catsBreeds[i]);
  document.write('<img src="https://trupanion.com/-/media/trupanion/images/breed--guide--new/bengal/bengal-cat.jpg?la=en&hash=6BF0EEDC7DDCDDE7C9184D44BA9B2920F345BFA2" />')

  document.write(catsBreeds[i]);
  
  if(catsBreeds[i]=='Bengal') {
  
  
  
  document.write('<img src="https://images.squarespace-cdn.com/content/v1/5ec67e952aa5c333297be103/1596900872188-8JM4NIQLKAA62HXEH8MP/ke17ZwdGBToddI8pDm48kB-KvWWLsNdsr2r15pG8LB8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc4VThCi1H2OW2SwpYmnFUYZHE_eHSfOn2ygtLYbt_eeBGLL3fIk3_XvnICC5Dx5K7/The-Kitten-Checklist-1.png?format=1500w" />') ;
  break

  } 
  
}

