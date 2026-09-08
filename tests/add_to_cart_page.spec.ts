import { test ,expect} from '@playwright/test'; 
 
test('Add to Cart test', async ({ page }) => {
 
    // 1. Login
    await page.goto(
        'https://tutorialsninja.com/demo/index.php?route=account/login'
    );

    await page.getByLabel('E-Mail Address').fill('asustuf3005@gmail.com');
    await page.getByLabel('Password').fill('Password');

    await page.getByRole('button', { 
        name: 'Login'
    }).click();


    // 2. Go to Home
    await page.goto(
        'https://tutorialsninja.com/demo/index.php?route=common/home'
    );


    // 3. Search iPhone
    await page.getByRole('textbox', {
        name: 'Search'
    }).fill('iphone');

    await page.getByRole('button', {
        name: ''
    }).click();


    // 4. Open iPhone product
    await page.getByRole('heading', { name: 'iPhone' })
    .getByRole('link', { name: 'iPhone' })
    .click();


    // 5. Add iPhone to Cart
    await page.getByRole('button', {
        name: 'Add to Cart',
        exact: true
    }).click();


    // 6. Open Cart
    await page.locator("//span[@id='cart-total']").click();

    await page.locator("//strong[normalize-space()='Checkout']").click();

    await page.getByRole('link', { name: 'Qafox.com' }).click();

    await page.getByAltText('Apple Cinema 30"').click();

    await expect(
    page.getByRole('heading', { name: 'Apple Cinema 30"' })
).toBeVisible();

    //await page.getByRole('button', {name:'Checkout'}).click();


    // 7. Screenshot
    await page.screenshot({
        path: './screenshots/login_to_cart.png'
    });

});
