const itActsAsFavRestoModel = (favResto) => {
  it('should return the added data', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 12 });
    favResto.putRestaurant({ id: 22 });

    expect(await favResto.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favResto.getRestaurant(12)).toEqual({ id: 12 });
    expect(await favResto.getRestaurant(22)).toEqual({ id: 22 });
    expect(await favResto.getRestaurant(40)).toEqual(undefined);
  });

  it('should reject a restaurant from being added if it has incorrect property', async () => {
    favResto.putRestaurant({ aProp : 'prop' });

    expect(await favResto.getAllRestaurants()).toEqual([]);
  });

  it('could return all of the restaurants that have added', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 2 });
    favResto.putRestaurant({ id: 3 });
    favResto.putRestaurant({ id: 4 });

    expect(await favResto.getAllRestaurants()).toEqual([
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
      {
        id: 4,
      },
    ]);
  });

  it('should remove favourite restaurant', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 2 });
    favResto.putRestaurant({ id: 3 });

    await favResto.deleteRestaurant(1);

    expect(await favResto.getAllRestaurants()).toEqual([
      {
        id: 2,
      },
      {
        id: 3,
      },
    ]);
  });
  it('should remove favourite restaurant', async () => {
    favResto.putRestaurant({ id: 1 });
    favResto.putRestaurant({ id: 2 });
    favResto.putRestaurant({ id: 3 });

    await favResto.deleteRestaurant(5);

    expect(await favResto.getAllRestaurants()).toEqual([
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ]);
  });
};

export default itActsAsFavRestoModel;