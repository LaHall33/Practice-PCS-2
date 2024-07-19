function addingUp(id) {
  
    const span = document.querySelector('#' + id);
      span.textContent++;
    }

  function nextImage() {
    index++;
    if (index >= images.length) {
      index = 0;
    }
    showImage(index);
  }

  function alertSearch() {
    const searchInput = document.querySelector('#search');
    // concatenation example
    // alert('Searching for "' + searchInput.value + '"');
  
    // template literal example
    alert("This game is supported on Linux!");
  }