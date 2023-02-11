var storage = firebase.storage();
var sstorageRef = storage.ref();

$('#List').find('tbody').html('');

var i = 0;

sstorageRef.child('videos/').listAll().then(function(result){
    result.items.forEach(function(imageRef)){

        i++;
        displayImage(i, imageRef);
});

});

function displayImage(row, images)
{
    images.getDownloadURL().then(function(url){})
}