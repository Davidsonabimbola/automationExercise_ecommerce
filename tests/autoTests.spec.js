// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('test major functions',()=>{

    test('successful sign up function', async ({page})=>{
      test.setTimeout(60000)

  await page.goto('/')

  await expect(page.locator('[class="nav navbar-nav"]')).toBeVisible()

  await page.getByLabel('Consent', { exact: true }).click()

    await page.getByRole('link',{name: ' Signup / Login'}).click()
//    const consent = await page.getByLabel('Consent', { exact: true })

//    if (consent){
// await consent.click()
//    }

//    else{
//     await page.getByRole('link',{name: ' Signup / Login'}).click()
//    }

   await expect( await page.locator('[class="login-form"]')).toBeTruthy()



// sign up

   const fillingForm = await page.locator('[class="signup-form"]')
   const nameField = await fillingForm.locator('input[data-qa="signup-name"]')
   await nameField.fill('Donosly')

   const emailField = await fillingForm.locator('input[data-qa="signup-email"]')
   await emailField.fill('dodoley125@yahoo.com')
   await page.getByRole('button', { name: 'Signup' }).click()

   const Form = await page.locator('[class="login-form"]')
   await expect(Form).toBeVisible()

   const title_onForm = Form.locator('[class="title text-center"]').nth(0)
   console.log(await title_onForm.textContent())
    await expect(title_onForm).toContainText('Enter Account Information')


    //fill the form
    await page.locator('[id="id_gender1"]').click()
    // await page.locator('[id="name"]').fill('Tyrese')
    // await page.locator('[id="email"]').fill('tyrese002@yahoo.com')
    await page.locator('[id="password"]').fill('Tyrese.003')
    await page.locator('[id="days"]').selectOption('8')
    await page.locator('[id="months"]').selectOption('July')
    await page.locator('[id="years"]').selectOption('1996')
    await page.locator('[id="first_name"]').fill('jojoly')
    await page.locator('[id="last_name"]').fill('Mendosasy')
    await page.locator('[id="company"]').fill('Glitch')
    await page.locator('[id="address1"]').fill('Musa Street, House 42')
    await page.locator('[id="country"]').selectOption('United States')
    await page.locator('[id="state"]').fill('Kensas')
    await page.locator('[id="city"]').fill('Philadelphia')
    await page.locator('[id="zipcode"]').fill('300742')
    await page.locator('[id="mobile_number"]').fill('+667-300742')
    await page.getByRole('button', {name: 'Create Account'}).click()

const congratPage = page.locator('[class="col-sm-9 col-sm-offset-1"]')
    expect(congratPage).toBeVisible()
    await expect(page.locator('[data-qa="account-created"]')).toContainText('Account Created!')


    await page.getByRole('link', {name: 'Continue'}).click()



    })



    test.only('login test', async ({page})=>{
      test.setTimeout(60000)

      await page.goto('/')

  await expect(page.locator('[class="nav navbar-nav"]')).toBeVisible()

  await page.getByLabel('Consent', { exact: true }).click()

    await page.getByRole('link',{name: ' Signup / Login'}).click()

   await expect( await page.locator('[class="login-form"]')).toBeTruthy()

     // login

    const fillingForm = await page.locator('[class="login-form"]')
   const emailField = await fillingForm.locator('input[data-qa="login-email"]')
   await emailField.fill('dodoley125@yahoo.com')

   const passwordField = await fillingForm.locator('input[data-qa="login-password"]')
   await passwordField.fill('Tyrese.003')
   await page.getByRole('button', { name: 'Login' }).click()

   await expect(page.locator('[class="shop-menu pull-right"]')).toBeVisible()

    


   //place order

  //  const itemContainer = page.locator('[class="col-sm-4"]').nth(0)
   const productInfo = page.locator('[class="productinfo text-center"]')
   await productInfo.getByText('Blue Top',{exact:true}).nth(0).hover()
   

  //  await console.log((await itemContainer.locator(productInfo).allTextContents()).length)



  //  const productCard = page.locator('[class="single-products"]').nth(0)
  // //  const productContainer = page.locator('[class="col-sm-4"]').filter({has:productCard})
  // //  await productContainer.click()
  //  await productCard.click()
  //  const overlaySect = productCard.locator('[class="product-overlay"]')
  //  await overlaySect.locator('[class="overlay-content"]').locator('a').click()
   //await productCard.nth(0).getByRole('link', {name: 'View Product'}).click()

  //   const productInfo = page.locator('[class="productinfo text-center"]').locator('p')
  //   const productContent = await productInfo.filter({hasText:'Blue Top'})

  //   const selectItem = productCard.filter({has:productContent})
  //   // await selectItem.hover()
  //  const overlayContainer = await selectItem.locator('[class="overlay-content"]')
  //   await overlayContainer.getByRole('link', {name:'Add to cart'}).click()


    })






})