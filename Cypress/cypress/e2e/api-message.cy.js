describe('API Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyOTIxNjVjMy0wNzRjLTQ5NmEtODAyMS1kODE4OWRhOTVmYTUiLCJhZG9wdGVyTmFtZSI6IlBhdWxvIEJyYW5kaW5vIiwiaWF0IjoxNzM2Mzg1MTYwLCJleHAiOjE3MzY2NDQzNjB9.PQBXBcuoJUossi3JqHpkNOlSmRIbe0_m9-4Y_nh9dnw`

    it('Mensagens da API', () => {
        cy.request({
            Method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/292165c3-074c-496a-8021-d8189da95fa5',
            headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        });
    });
});