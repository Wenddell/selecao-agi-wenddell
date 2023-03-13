/// <reference types="cypress" />

describe ('AGI tests automation', () => {

    before(() =>{
        cy.visit('https://blogdoagi.com.br/')
        
    })

    beforeEach(() => {
        cy.reload()
    })

    //Verificar se ao clicar na lupa, a caixa de pesquisa é aberta.
    it('Open Search Box', () => {
        cy.get('#search-open').click()
        cy.get('.desktop-search').should('exist')
    })

    /*- Verificar a realização da pesquisa. 
    - Ao digitar uma pesquisa válida
    - Ao inserir uma pesquisa que não retornará resultados 
    - Ao não inserir nenhuma informação */
    describe('Successful search', () =>{

        it('When typing a valid search', () => {
            cy.get('#search-open').click()
            cy.get('.desktop-search > .search-form > label > .search-field').type('Agibank amplia atuação nacional e deve inaugurar 20 novas lojas ainda neste ano')
            cy.get('.desktop-search > .search-form > .search-submit').click()
            cy.get('.archive-title').should('exist')
        })

        it('When entering a search that will return no results', () => {
            cy.get('#search-open').click()
            cy.get('.desktop-search > .search-form > label > .search-field')
            .clear()
            .type('Asdfghjklpoiuytr')
            cy.get('.desktop-search > .search-form > .search-submit').click()
            cy.get('.entry-title').should('exist')
        })

        it('When typing no information', () => {
            cy.get('#search-open').click()
            cy.get('.desktop-search > .search-form > label > .search-field').clear()
            cy.get('.desktop-search > .search-form > .search-submit').click()
            cy.get('.archive-title').should('exist')
        })
        


    })


})


/*describe ('Should test elements', () => {

    it('Text', () => {
        cy.get('.mt0').should('have.text', 'Test drive online the demo product available with complete features')
    })
    
    it('Click', () => {
        
        cy.title().should('be.equal', 'Phptravels Plans & Pricing | One Time Payment')

    })

    it('TextField', () => {
        cy.get('.first_name')
            .type('Wenddell')
            .should('have.value','Wenddell')

        cy.get('.last_name')
            .type('Juler')
            .should('have.value', 'Juler')

        cy.get('.business_name')
            .type('WJ Company')
            .should('have.value','WJ Company')

        cy.get('.email')
            .type('wj@wjcompany')
            .should('have.value','wj@wjcompany')
        
    })

    //Teste de soma pra verificar botão 
    //Fiz esse teste pq a aplicação pedia uma validação de soma ao realizar um cadastro no sistema. 
    //Então peguei cada elemento, acessei o valor que estava sendo atribuido a ele, transformei em um número inteiro e fiz o cálculo de validação 

    it.only('TestSome', () => {

        let num1
        let num2
        let result

        //Pegando o primeiro número
        cy.get('#numb1').then(($span) => {
            num1 = parseInt($span.text())
            cy.log(num1)
        })

        //Pegando o segundo número 
        cy.get('#numb2').then(($span) => {
            num2 = parseInt($span.text())
            cy.log(num2)
        })

        //Pegando o resultado no Num1 e Num2, somando e escrevendo no campo de resultado
        cy.get('#number').then(($span) => {
            cy.get('#number').type(num1+num2)
            result = parseInt($span.text())
            cy.log(result)
        })

        //A validação apenas verifica se o campo de resultado não está vazio 
        //No entanto, o certo seria verificar se a soma dos dois números é o valor que está no resultado 
        expect('#number').to.not.be.empty;
        

    })

})*/
