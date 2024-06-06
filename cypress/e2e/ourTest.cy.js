import faker from 'faker';
const randomName = faker.name.findName();

const generateThreeLetterString = () => {
    // Generate a random word using Faker
    const randomWord = faker.random.word();

    // Extract the first three letters of the random word
    const threeLetterString = randomWord.slice(0, 3).toUpperCase(); // Convert to uppercase if needed

    return threeLetterString;
};

describe('LOGIN',()=>{

    it('standard user',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type(randomName)
        cy.get('[data-test="password"]').type(generateThreeLetterString())
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    })
})