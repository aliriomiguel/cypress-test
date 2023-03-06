Given("I visit Google.es", () => {
    cy.visit("http://google.es");
    cy.get("#L2AGLb > .QS5gu").click();
});
When("I search for Apple", () => {
    cy.get('input[name="q"]').type("Apple{enter}");
});
And("I check if I got More than 100000 results", () => {
    cy.get("#result-stats").then(($result) => {
        var txt = $result.text();
        var result = txt.substring(0, txt.indexOf('('));
        var numb = result.match(/\d/g);
        numb = numb.join("");
        cy.log(numb);
        

        expect(parseInt(numb)).to.be.gt(100000);
    });
});
And("I check if I got Less than 10000 results", () => {
    cy.get("#result-stats").then(($result) => {
        var txt = $result.text();
        var result = txt.substring(0, txt.indexOf('('));
        var numb = result.match(/\d/g);
        numb = numb.join("");
        cy.log(numb);
        

        expect(parseInt(numb)).to.be.lt(10000);
    });
})