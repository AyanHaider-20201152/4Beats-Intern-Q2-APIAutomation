describe('get users test', () => {
  it('get users', () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2"

    }).then((response)=>{
      expect(response.status).to.eq(200)
    })
  })
})

///////////////////////////////////////////////////////////////////////

describe('create new user test', () => {
  it('create new user', () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      body: {
        "email": "eve.holt@reqres.in",
        "password": "nhoj"
      }

    }).then((response)=>{
      expect(response.status).to.eq(200)
    })
  })
})

///////////////////////////////////////////////////////////////////////

describe('update user name test', () => {
  it('update user name', () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/2",
      body: {
        "first_name": "TRUE"
      }

    }).then((response)=>{
      expect(response.status).to.eq(200)
    })
  })
})

///////////////////////////////////////////////////////////////////////

describe('delete user test', () => {
  it('delete user', () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/2"

    }).then((response)=>{
      expect(response.status).to.eq(204)
    })
  })
})

///////////////////////////////////////////////////////////////////////

describe('login test', () => {
  it('login to account', () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/login",
      body: {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
      }

    }).then((response)=>{
      expect(response.status).to.eq(200)
    })
  })
})