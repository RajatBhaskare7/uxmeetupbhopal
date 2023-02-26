var textname = document.getElementById("textname");
var inputname = document.getElementById("ipname");

inputname.addEventListener("input", function(event) {
    //do it in uppercase
    textname.innerHTML = inputname.value.toUpperCase();
    }
);


var inputphoto = document.getElementById("file");
console.log(inputphoto.value);

document
    .getElementById('file')
    .addEventListener('change', function() {
      if ( this.files && this.files[0] ) {
        var FR= new FileReader();
        FR.onload = function(e) {
           var img = document.getElementById('photo');
           img.src = e.target.result;
        };       
        FR.readAsDataURL( this.files[0] );
      }
    });
    const downloadCharacterSheet = () => {
        console.log('downloadCharacterSheet');
        const node = document.getElementById('id-card');
        
        html2canvas(node).then(canvas => {
            
          var link = document.createElement('a');
          link.download = 'filename.png';
          link.href = canvas.toDataURL()
          link.click();
        });
        
      };
document.getElementById('download-button').addEventListener('click', downloadCharacterSheet);