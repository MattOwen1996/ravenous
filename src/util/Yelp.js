const apiKey = 'WpDp6lVl_zEnwLuZmF58Oy_OTZ3xo90aGdTz5GfDH5sZKyMgFmpCkg_7n8iwvfT33mtIFHexCA7_vfWh25b2hEjwMOldkTxZoxaZ6vmb0dibuK37fKezp3e5FnzMW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.business) {
        return jsonResponse.business.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
