Feature('Giving Like Restaurants');

Scenario('showing empty liked restaurants',  ({ I }) => {
    I.seeElement('#queryResto');
    I.see('Daftar Restoran Tidak Ditemukan.', '.restaurant-item__not__found');
});
