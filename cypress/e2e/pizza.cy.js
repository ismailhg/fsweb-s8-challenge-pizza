describe("Pizza Sipariş Formu Testi", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });

  it("isim girebiliniyor mu", () => {
    cy.get("[data-cy='order-name']")
      .type("sedef")
      .should("have.value", "sedef");
  });

  it("not girebiliniyor mu", () => {
    cy.get("[data-cy='order-notes']")
      .type("zili çalmayın")
      .should("have.value", "zili çalmayın");
  });

  it("kullanıcı birden fazla malzeme seçebilir", () => {
    cy.get('[data-cy="topping-option"]').should("have.length.at.least", 3);

    cy.get('[data-cy="topping-option"]').eq(0).check().should("be.checked");
    cy.get('[data-cy="topping-option"]').eq(3).check().should("be.checked");
    cy.get('[data-cy="topping-option"]').eq(5).check().should("be.checked");

    cy.get('[data-cy="topping-option"]:checked').should("have.length", 3);
  });

  it("form başarıyla gönderilebilir", () => {
    cy.get('[data-cy="order-name"]').type("deneme");

    cy.get('[data-cy="size-medium"]').check();

    cy.get('[data-cy="dough-select"]').select("Normal");

    cy.get('[data-cy="topping-option"]').eq(0).check();
    cy.get('[data-cy="topping-option"]').eq(5).check();
    cy.get('[data-cy="topping-option"]').eq(6).check();

    cy.get('[data-cy="order-notes"]').type("Lütfen iyi pişmiş olsun");

    cy.get('[data-cy="order-submit"]').click();

    cy.url().should("include", "/success");
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
  });

  it("pizza bilgileri görünüyor mu", () => {
    cy.get('[data-cy="order-name"]').type("deneme");

    cy.get('[data-cy="size-medium"]').check();

    cy.get('[data-cy="dough-select"]').select("Normal");

    cy.get('[data-cy="topping-option"]').eq(0).check();

    cy.get('[data-cy="order-notes"]').type("Lütfen iyi pişmiş olsun");

    cy.get('[data-cy="order-submit"]').click();

    cy.url().should("include", "/success");
    cy.contains("Boyut: M").should("be.visible");
    cy.contains("Pepperoni").should("be.visible");
  });
});
