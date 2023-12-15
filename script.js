var scoreValue = 0;
var ID = 1; 
var randID = 570

  function checkSelection(imgid) {
    console.log(imgid)
    var selectedImage = document.getElementById(imgid);
    selectedImage.remove()

      alert("Congratulations! You've got a new Score !");
      scoreValue++;
      var scoreElement = document.getElementById('score');
      scoreElement.innerHTML = "Score: " + scoreValue;

        ID++;

        //generate the left image 
        var newImageLeft = generateImg(ID , "leftImage")


        //generate the right image 
        var newImageRight = generateImg(ID , "rightImage")
        var newRandImage = generateImg(randID , "rightImage" )
        newRandImage.onclick = function() {
            checkSelection(newRandImage.id);
          };

          //generate left column 
        var newColumnLeft = generateColumn("col-sm-2 col-md-3 mb-4" , newImageLeft)
        
          //generate rightr column
          var newColumnRight = generateColumn("col-sm-2 col-md-3 mb-4" , newImageRight)

          var newRandRight = generateColumn("col-sm-2 col-md-3 mb-4" , newRandImage)
          //generate containers 
          generateContainer('leftImagesContainer' , newColumnLeft)
          
          generateContainer('rightImagesContainer' , newColumnRight)

          var tt = generateContainer('rightImagesContainer' , newRandRight)
          console.log(tt)

          randID--;
    

}


function generateImg(ID , imageSide){
    var newImage = document.createElement('img');
    newImage.src = "https://picsum.photos/id/" + ID + "/200";
    newImage.alt = imageSide;
    newImage.id = imageSide + ID
    newImage.className = "img-fluid";

    return newImage;
}


function generateColumn(className , childImg ){
    var newColumn = document.createElement('div');
    newColumn.className = className;
    newColumn.appendChild(childImg);

    return newColumn;
}

function generateContainer(elementId , column){
    var ImagesContainer = document.getElementById(elementId);
    var randomPosition = Math.floor(Math.random() * ImagesContainer.children.length);
    ImagesContainer.insertBefore(column, ImagesContainer.children[randomPosition]);

    return ImagesContainer;

}
  

