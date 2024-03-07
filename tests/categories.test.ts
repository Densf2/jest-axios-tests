import axios from 'axios';
import data from '../data/token2.json';

describe('Categories', () => {
  let arrCategories: string[] = [];
  test('get all products', async () => {
    const get_all_categories = await axios.get(
      'https://dummyjson.com/products/categories',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      },
    );
    expect(get_all_categories.status).toEqual(200);
    arrCategories = get_all_categories.data;
  });

  // console.log(arrCategories)
  test('get category by id', async () => {
    // iterate all categories received in request above
    for (let i = 0; i < arrCategories.length; i++) {
      let id = [i];
      let category = arrCategories[i];
      const get_specific_category = await axios.get(
        `https://dummyjson.com/products/category/${category}`,
      );
      expect(get_specific_category.status).toEqual(200);
    }
  }, 30000);

  test('create new product for smartphones category', async () => {
    let categorySmartphones = arrCategories[0];
    const create_product = await axios.post(
      'https://dummyjson.com/products/add',
      {
        title: 'Zoho MK121',
        category: `${categorySmartphones}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      },
    );
  });

  test('create new product for laptops category', async () => {
    let categoryLaptops = arrCategories[1];
    const create_product = await axios.post(
      'https://dummyjson.com/products/add',
      {
        title: 'Kenovo L21',
        category: `${categoryLaptops}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${data.token}`,
        },
      },
    );
  });
});
