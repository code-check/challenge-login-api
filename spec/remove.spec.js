"use strict";

var
    assert = require("chai").assert,
    spec = require("api-first-spec"),
    config = require("../config.json"),
    loginAPI = require("./login.spec.js"),
    registerAPI = require("./register.spec.js");

var API = spec.define({
    "endpoint": "/api/accounts/disable",
    "method": "DELETE",
    "request": {
        "params": {
            "token": "string"
        },
        "rules": {
            "token": {
                "required": true
            }
        }
    },
    "response": {
        "contentType": spec.ContentType.JSON,
        "data": {}
    }
});

describe("Remove", function () {
    var
        host = spec.host(config.host),
        token = "";

    before(function (done) {
        host.api(registerAPI).params({
            "username": "TestRemove",
            "password": "123abc!",
            "email": "test@test.com"
        }).success(function (data, res) {
            assert.equal(data.result, true);
            host.api(loginAPI).params({
                "username": "TestRemove",
                "password": "123abc!"
            }).success(function (data, res) {
                assert.equal(data.result, true);
                token = data.token;
                done();
            });
        });
    });

    it("unauthorized", function (done) {
        host.api(API).params({
            "token": "invalid"
        }).unauthorized(function (data, res) {
            done();
        });
    });

    it("success", function (done) {
        host.api(API).params({
            "token": token
        }).success(function (data, res) {
            done();
        });
    });

    it("unable to login", function (done) {
        host.api(loginAPI).params({
            "username": "TestRemove",
            "password": "123abc!"
        }).success(function (data, res) {
            assert.equal(data.result, false);
            done();
        });
    });

    it("unable to register", function (done) {
        host.api(registerAPI).params({
            "username": "TestRemove",
            "password": "123abc!",
            "email": "test@test.com"
        }).success(function (data, res) {
            assert.equal(data.result, false);
            done();
        });
    });
});

module.exports = API;

