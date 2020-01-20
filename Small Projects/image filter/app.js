const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let image = new Image();

let fileName = '';

const downloadBtn = document.getElementById('download-btn');
const uploadFile = document.getElementById('upload-file');
const revertBtn = document.getElementById('revert-btn');

// Add Filter and Effects

document.addEventListener('click', (e)=> {
  if(e.target.classList.contains('filter-btn')) {
     if(e.target.classList.contains('brightness-add')) {
       Caman('#canvas', image, function () {
          this.brightness(5).render();

       })
     }
     else if(e.target.classList.contains('brightness-remove')) {
       Caman('#canvas', image, function () {
          this.brightness(-5).render();
       })
     }
     else if(e.target.classList.contains('contrast-add')) {
       Caman('#canvas', image, function () {
          this.contrast(5).render();
       })
     }
     else if(e.target.classList.contains('contrast-remove')) {
       Caman('#canvas', image, function () {
          this.contrast(-5).render();
       })
     }
     else if(e.target.classList.contains('saturation-add')) {
       Caman('#canvas', image, function () {
          this.saturation(5).render();
       })
     }
     else if(e.target.classList.contains('saturation-remove')) {
       Caman('#canvas', image, function () {
          this.saturation(-5).render();
       })
     }
     else if(e.target.classList.contains('vibrance-add')) {
       Caman('#canvas', image, function () {
          this.vibrance(5).render();
       })
     }
     else if(e.target.classList.contains('vibrance-remove')) {
       Caman('#canvas', image, function () {
          this.vibrance(-5).render();
        })
     }
     else if(e.target.classList.contains('vintage-add')) {
       Caman('#canvas', image, function () {
          this.vintage().render();
        })
     }
     else if(e.target.classList.contains('lomo-add')) {
       Caman('#canvas', image, function () {
          this.lomo().render();
        })
     }
     else if(e.target.classList.contains('clarity-add')) {
       Caman('#canvas', image, function () {
          this.clarity().render();
        })
     }
     else if(e.target.classList.contains('sincity-add')) {
       Caman('#canvas', image, function () {
          this.sinCity().render();
        })
     }
     else if(e.target.classList.contains('crossprocess-add')) {
       Caman('#canvas', image, function () {
          this.crossProcess().render();
        })
     }
     else if(e.target.classList.contains('pinhole-add')) {
       Caman('#canvas', image, function () {
          this.pinhole().render();
        })
     }
     else if(e.target.classList.contains('nostalgia-add')) {
       Caman('#canvas', image, function () {
          this.nostalgia().render();
        })
     }
     else if(e.target.classList.contains('hermajesty-add')) {
       Caman('#canvas', image, function () {
          this.herMajesty().render();
        })
     }
  }
})

// Remove Filters
revertBtn.addEventListener('click', ()=> {
 Caman('#canvas', image, function () {
      this.revert();
  })
})
// Upload Image
uploadFile.addEventListener('change', (e)=> {
  // Get Filer
  let file = document.getElementById('upload-file').files[0];

  // init file
  const reader = new FileReader();
  if(file) {
    fileName = file.name;
    reader.readAsDataURL(file);
  }
   reader.addEventListener('load', ()=> {
    let img = new Image();
     img.src = reader.result;
     img.onload = function () {
       canvas.width = img.width;
       canvas.height = img.height;
       ctx.drawImage(img, 0, 0, img.width, img.height);
     }
   })
})

let newFileName;
downloadBtn.addEventListener('click', ()=> {
  let fileExtention = fileName.slice(-4);
  if(fileExtention === '.jpg' || fileExtention === '.png' || fileExtention === '.jpeg') {
    newFileName = fileName.substring(0, fileName.length - 4) + '-edited.jpg';
  }
  console.log(newFileName);
  download(canvas, newFileName);

})
function download(canvas, filename) {
  let e;
  const link = document.createElement('a');
  link.download = filename;
  link.href =  canvas.toDataURL('image/jpg', 0.8);
  console.log(link.href);
  e = new MouseEvent('click');
  link.dispatchEvent(e);

}
