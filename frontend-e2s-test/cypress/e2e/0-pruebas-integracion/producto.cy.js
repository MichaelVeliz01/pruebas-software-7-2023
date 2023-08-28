describe("CRUD Producto", () => {//Titulo
    //Antes que nada, abrir el navegador en el proyecto Frontend que es el puerto 8100
    beforeEach(() => {
        cy.visit("http://localhost:8100"); //Frontend de Produccion
    });

    //Servicio API - Producto()
    it("GetProducto()", () => {
        cy.wait(1000);//Esperar 1 seg.
        cy.get("ion-tab-button").eq(0).click(); // click en el TAB de Producto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("ion-item").should("be.visible")
        .should("not.have.length", "0"); //Verifica que exista al menos un (ion-item)
    });

    //Servicio API - AddProducto(entidad)
    it("addProducto(entidad)", () => {
        cy.get("ion-tab-button").eq(2).click(); // click en el TAB de Producto
        cy.wait(1000);//Esperar 1 seg.

        cy.get("#nombre")
            .type("Producto cypress", { delay: 100 })
            .should("have.value", "Producto cypress");
        cy.wait(500);//Esperar medio seg.
        
        let almacenarNumero = 0;
        const numeroAleatorio = Math.floor(Math.random() * 12) + 1;
        almacenarNumero = numeroAleatorio;
        cy.wait(500); // //Esperar medio seg.

        cy.get("#idCategoria")
        .type(numeroAleatorio.toString(), { delay: 100})
        .should("have.value", almacenarNumero.toString());
        cy.wait(500); ////Esperar medio seg.

        // Hacer clic en el botón "Agregar Usuario"
        cy.get("#addProducto").not("[disabled]").click();
    });
});