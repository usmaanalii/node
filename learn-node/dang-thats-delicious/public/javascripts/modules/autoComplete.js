function autoComplete(input, latInput, lngInput) {
  if (!input) return; // skip this from running if there is no input on the page
  
  const dropdown =  new google.maps.places.Autocomplete(input);
  
  dropdown.addListener('place_changed', () => {
    const place = dropdown.getPlace();
    latInput.value = place.geometry.location.lat();
    lngInput.value = place.geometry.location.lng();
  });
  
  // Don't submit
  input.on('keydown', (event) => {
    if (event.keyCode == 13) event.preventDefault();
  })
}

export default autoComplete;