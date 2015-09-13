Template.Systems.helpers({
  systems: function(){
    var arr = [];
    _.each(technologies, function(value, key, object){
      arr.push(value)
    });
    // Return all the documents from the Tech collection
    return arr;
  }
});
