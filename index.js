var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){

  
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
 
  return object;
}


function deleteFromObjectByKey(object, key){
  var objClone = delete object.key;
  return objClone;
}


function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];

  Object.assign({}, object1, { [key1]: value1 })

  return object;
}