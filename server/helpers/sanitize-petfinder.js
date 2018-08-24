module.exports = function santizePetfinder(json) {
  const sanitizedJson = json.petfinder.pets;

  sanitizedJson.pet.forEach((elem) => {
    // sanitize pet.breeds.breed to pet.breed
    elem.breed = elem.breeds.breed;
    delete elem.breeds;

    // sanitize pet.media.photos.photo to pet.photos
    elem.photos = elem.media.photos.photo;
    delete elem.media;

    // sanitize pet.options.option to pet.options
    const options = elem.options.option;
    delete elem.options;
    // not an array, put into array
    if (!(options instanceof Array)) {
      elem.options = [options];
    } else {
      elem.options = options;
    }
  });

  return sanitizedJson;
};
