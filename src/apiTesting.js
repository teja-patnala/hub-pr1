const chai = require('chai')
const chaiHTTP = require('chai-http')
const {expect} = chai

chai.use(chaiHTTP)

let jwtToken
let bookArray
let apiQueryObject = [
  {shelf: 'All', search: ''},
  {shelf: 'READ', search: ''},
  {shelf: 'CURRENTLY_READING', search: ''},
  {shelf: 'WANT_TO_READ', search: ''},
  {shelf: '', search: ''},
]

const queryParametersApiTesting = (search = '', shelf = '') => {
  it(`should fetch books based on '${shelf}' and '${search}'`, async () => {
    try {
      const bookshelfName = search
      const searchText = shelf

      const response = await chai
        .request('https://apis.ccbp.in')
        .get(`/book-hub/books?shelf=${bookshelfName}&search=${searchText}`)
        .set('Authorization', `Bearer ${jwtToken}`)

      expect(response).to.have.status(200)
      expect(response.body).to.have.property('books')

      bookArray = response.body.books
    } catch (error) {
      console.error(error.message)
      throw error
    }
  })
}

const apiTestingByBookId = async (bookId = '') => {
  it(`book API status with bookId '${bookId}'`, async () => {
    try {
      const response = await chai
        .request('https://apis.ccbp.in')
        .get(`/book-hub/books/${bookId}`)
        .set('Authorization', `Bearer ${jwtToken}`)

      expect(response).to.have.status(200)
      expect(response.body).to.have.property('book_details')
    } catch (error) {
      console.error(error.message)
      throw error
    }
  })
}

describe('login Api testing', () => {
  before(async () => {
    try {
      const requestData = {
        username: 'rahul',
        password: 'rahul@2021',
      }

      let response = await chai
        .request('https://apis.ccbp.in')
        .post('/login')
        .send(requestData)

      expect(response).to.have.status(200)
      expect(response.body).to.have.property('jwt_token')
      jwtToken = response.body.jwt_token
    } catch (error) {
      console.error(error.message)
      throw error
    }
  })

  it('books data status', async () => {
    try {
      const response = await chai
        .request('https://apis.ccbp.in')
        .get('/book-hub/top-rated-books')
        .set('Authorization', `Bearer ${jwtToken}`)

      expect(response).to.have.status(200)
    } catch (error) {
      console.error(error.message)
      throw error
    }
  })

  for (let object of apiQueryObject) {
    let {shelf, search} = object
    queryParametersApiTesting(search, shelf)
  }

  // We can now run the tests for bookArray using the populated data
  after(() => {
    describe('apiTesting by ids', () => {
      for (let object of bookArray) {
        const {id} = object
        apiTestingByBookId(id)
      }
    })
  })
})
