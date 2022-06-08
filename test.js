const {assert} = require('chai');



describe("teste", ()=>{
  it("",()=>{
      assert.deepEqual( writeInformationCEPs([59920000]), {
        cep: '59920-000',        
        logradouro: '',
        complemento: '',
        bairro: '',
        localidade: 'São Miguel',
        uf: 'RN',
        ibge: '2412500',
        gia: '',
        ddd: '84',
        siafi: '1847'
      } )
  })

})