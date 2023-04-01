# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket #1 - Add 'agentCustomId' field on Shifts table
### Description:
Currently, the id of each Agent on the reports we generate is their internal database id. In order to give the facilities the ability to save their own custom ids for each Agent they work with, the Shifts table needs to be updated to have a new field called 'agentCustomId'. The new field will then be used on the reports later on.

### Acceptance Criteria:
* Shifts table contains 'agentCustomId'
* Scripts for data migration are created
* New field is non-nullable
* Unit tests are updated
* New field is indexed on the database

### Linked Tickets: 
* Ticket #2
* Ticket #3

## Ticket #2 - Update 'getShiftsByFacility' function to return new field 'agentCustomId'
### Description:
After the addition of the new field 'agentCustomId' on the Shifts table, the 'getShiftsByFacility' function needs to be updated to return this new field along with the rest of the data. The new field will then be used on the reports later on.

### Acceptance Criteria:
* function returns new field 'agentCustomId'
* Unit tests are updated

## Blocked by:
* Ticket #1

## Linked Ticket:
* Ticket #3

## Ticket #3 - Update 'generateReport' function to include 'agentCustomId' on the PDF
### Description:
After the adition of the new field 'agentCustomId' on the Shifts table and on the 'getShiftsByFacility' function, the 'generateReport' function needs to be updated also to reflect the new field on the reports.

### Acceptance Criteria:
* reports display the new field 'agentCustomId'
* Unit tests and integration tests are updated

## Blocked by:
* Ticket #1 and Ticket #2

