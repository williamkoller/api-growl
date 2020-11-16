const request = require('supertest');
const { describe , it } = require('mocha')
const assert = require('assert')

const HOST = '127.0.0.1';
const PORT = 3333;
const BASE_URL = `http://${HOST}:${PORT}`

describe('GET /', function() {
  it('responds with json', async () => {
    const { body } = await  request(BASE_URL).get('/').expect(200)

    assert.deepStrictEqual(body,{msg:"Welcome"})
  });
  it('HomeController.index', async () => {
    const { body } = await  request(BASE_URL).get('/home').expect(200)

    assert.deepStrictEqual(body,{msg:"Welcome !!!"})
  });
});
