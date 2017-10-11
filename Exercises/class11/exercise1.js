function abbrev_name(name){
  
  var firstName = "", lastName = "", space="";
  
  for(i = 0;  i < name.indexOf(" "); i++){
    firstName = firstName + name[i];
  }
  
  space = name.indexOf(" ");
  lastName = name[space+1]; 
  
  return firstName[0].toUpperCase() + firstName.substring(1,space) + " " + lastName.toUpperCase() + ".";
}

//console.log(abbrev_name("My name"));
