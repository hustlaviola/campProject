# iReporter


[![Build Status](https://travis-ci.org/hustlaviola/iReporter.svg?branch=develop)](https://travis-ci.org/hustlaviola/iReporter)
[![Coverage Status](https://coveralls.io/repos/github/hustlaviola/iReporter/badge.svg)](https://coveralls.io/github/hustlaviola/iReporter)
[![Maintainability](https://api.codeclimate.com/v1/badges/22b0da361445b996ceae/maintainability)](https://codeclimate.com/github/hustlaviola/iReporter/maintainability)



Corruption is a huge bane to Africa’s development. African countries must develop novel and
localised solutions that will curb this menace, hence the birth of iReporter. iReporter enables
any/every citizen to bring any form of corruption to the notice of appropriate authorities and the
general public.

iReporter gives you a voice, you can get the attention of necessary authorities 
by raising a red flag or creating an intervention on any incident in your community.
Incidents ranges from corruption to cultism, drug rings, terrorists cell and so on.
You can also report on damaged infrastructures posing threat to the safety of the people,
e.g building about to collapse, bad roads, collapse bridges e.t.c

### Features

* Users can create account
* Users can sign in
* Users can create an incident record(Red-flag or Intervention)
* Users can edit their incident record
* Users can delete their incident record
* Users can add images or videos to their incident record
* Admin can chage the status of a draft(incident record) between *Under Investigation*, *Resolved* and *Rejected*.

### Prerequisites

* [Node JS](https://nodejs.org/)
* [Express](http://expressjs.com/)
* [Git](https://git-scm.com/downloads)
* [Travis CI](http://travis-ci.org/)
* [Coveralls](http://coveralls.io/)
* [Code Climate](http://codeclimate.com/)
* ESLint
* Babel
* Mocha
* Chai
* NYC

### Installation

Install a stable version of [Node](https://nodejs.org/)
Install [Git](https://git-scm.com/downloads)

##### Clone the repo

    git clone https://github.com/hustlaviola/iReporter.git

##### Switch to the directory

    cd iReporter

##### Install Node Modules

    npm install

##### Run the project

    npm start

### Documentation

[API](https://hi-reporter.herokuapp.com/)

**Endpoint:** GET ``` /api/v1/red-flags ```

Fetch all red-flag records.

Response spec:

    {
      "status" : Integer,
      "data" : [ { ... }, {...}, {...} ]
    }

**Endpoint:** GET ``` /api/v1/red-flags/<red-flag-id> ```

Fetch a specific red-flag record.

Response spec:

    {
      "status" : Integer,
      "data" : [ { ... } ]
    }

**Endpoint:** POST ``` /api/v1/red-flags ```

Create a red-flag record.

Request body:

    {
      "location": "33.453, 66.584",
      "comment": "Police corruption and brutality"
    }

Response spec:

    {
      "status" : Integer,
      "data" : [ {
        "id" : Integer,
        "message" : "Created red-flag record"
      } ]
    }

**Endpoint:** PATCH ``` /api/v1/red-flags/<red-flag-id>/location ```

Edit the location of a specific red-flag record.

Request body:

    {
      "location": "45.453, 78.584",
    }
    
Response spec:

    {
      "status" : Integer,
      "data" : [ {
        "id" : Integer,
        "message" : "Updated red-flag record's location"
      } ]
    }

**Endpoint:** PATCH ``` /api/v1/red-flags/<red-flag-id>/comment ```

Edit the comment of a specific red-flag record.

Request body:

    {
      "comment": "A corrupt politician embezzling",
    }
    
Response spec:

    {
      "status" : Integer,
      "data" : [ {
        "id" : Integer,
        "message" : "Updated red-flag record's comment"
      } ]
    }

**Endpoint:** DELETE ``` /api/v1/red-flags/<red-flag-id> ```

Delete a specific red flag record.

Response spec:

    {
      "status" : Integer,
      "data" : [ {
        "id" : Integer,
        "message" : "red-flag record has been deleted"
      } ]
    }

##### Testing

    npm test

[gh-pages](https://hustlaviola.github.io/iReporter/UI/)

[Pivotal Tracker Board](https://www.pivotaltracker.com/n/projects/2226701)