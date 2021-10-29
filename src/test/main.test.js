/**
 * @jest-environment jsdom
 */

process.env.NODE_ENV = "test";

const nock = require('nock')
//const app = require("./api-test");
const main = require('../main');


describe("REST API unregistered", () => {
    const scope = nock('http://localhost:9003/src')
        .post('/api.php')
        .query({ action: "register" })
        .reply(400, '"Please register!"')
        .get('/api.php')
        .query({ action: "get-userdata" })
        .reply(400, '"Please register!"')
        .post('/api.php')
        .query({ action: "set-email" })
        .reply(400, '"Please register!"')
        .post('/api.php')
        .query({ action: "respond" })
        .reply(400, '"Please register!"');

    test("fetchRegister", async () => {
        const response = await main.fetchRegister({
            region: 1,
            age: 1,
            education: 1
        });
        expect(response.ok).toEqual(false);
        const json = await response.json();
        expect(json).toEqual("Please register!");
    });
    test("fetchUserData", async () => {
        const response = await main.fetchUserData();
        expect(response.ok).toEqual(false);
        const json = await response.json();
        expect(json).toEqual("Please register!");
    });
    test("fetchTestResponse", async () => {
        const response = await main.fetchTestResponse();
        expect(response.ok).toEqual(false);
        const json = await response.json();
        expect(json).toEqual("Please register!");
    });
    test("fetchSetEmail", async () => {
        const response = await main.fetchSetEmail("a@b.com");
        expect(response.ok).toEqual(false);
        const json = await response.json();
        expect(json).toEqual("Please register!");
    });
    test("number of calls", () => {
        expect(scope.pendingMocks().length).toEqual(0);
    })
});

describe("REST API registered", () => {
    const scope = nock('http://localhost:9003/src')
        .post('/api.php')
        .query({ action: "register" })
        .reply(200, '"123456789"')
        .get('/api.php')
        .query({ action: "get-userdata" })
        .reply(200, {
            region: 1,
            age: 2,
            education: 3,
            streak: 4
        })
        .post('/api.php', body => body.email)
        .query({ action: "set-email" })
        .reply(200)
        .post('/api.php', body => body["test-token"] && body["test-response"])
        .query({ action: "respond" })
        .reply(200, {
            "test-token": 7357,
            streak: 5,
            test: "img/0_63.jpg"
        })
        .post('/api.php')
        .query({ action: "respond" })
        .reply(200, {
            "test-token": 7357,
            streak: 0,
            test: "img/0_63.jpg"
        });

    test("fetchRegister", async () => {
        const response = await main.fetchRegister({
            region: 1,
            age: 1,
            education: 1
        });
        expect(response.ok).toEqual(true);

    });
    test("fetchUserData", async () => {
        const response = await main.fetchUserData();
        expect(response.ok).toEqual(true);
    });
    test("fetchTestResponse", async () => {
        const response = await main.fetchTestResponse();
        expect(response.ok).toEqual(true);
    });
    test("fetchTestResponse", async () => {
        const response = await main.fetchTestResponse({"test-token": 7357, "test-response": 1});
        expect(response.ok).toEqual(true);
    });
    test("fetchSetEmail", async () => {
        const response = await main.fetchSetEmail("a@b.com");
        expect(response.ok).toEqual(true);
    });
    test("number of calls", () => {
        expect(scope.pendingMocks().length).toEqual(0);
    })
})