describe("Formulario de usuario" ,() => { 
    it("Contiene los campos de datos" , () => { 
        cy.visit("http://127.0.0.1:5500/cypress/e2e/tests2/index.html");
        cy.get('[for="name"]').contains("Nombre");
        cy.get('[for="surname"]').contains("Apellidos");
        cy.get('[for="email"]').contains("Correo Electronico");
        cy.get('[for="birthdate"]').contains("Fecha de Nacimiento") ;
    }) 
    it("Pueden completarse los campos nombre, apellido, correo y fecha de nacimiento", () => {
        cy.wait(1000);
        cy.get('#name').type("Ismael"); 
        
        cy.get('#surname').type("Lajud");
        cy.wait(1000);
        
        
        cy.get('#correo').type("correo@example.com");
        cy.get('#birthdate').type("01/01/1990"); 

      }); 
      it("Puede presionar boton start" ,() =>{ 
        cy.get('#aceptar').click();
      })
      
})