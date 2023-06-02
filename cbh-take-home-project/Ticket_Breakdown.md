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

I'm assuming that all the tickets needs to have unit/integration tests in order to be completed so I'm not including on the ticket, but I can add to the Acceptance Criteria if someone on the company was not onboarded correctly.

## Tickets
### Add custom ID field to Agent model

**Acceptance Criteria:**

- Add a custom ID field to the Agent model in the database.
- The custom ID field should be properly validated to ensure uniqueness.
- The custom ID should be unique for each Agent and should be editable by the Facilities.
- Update the database schema and create migrations accordingly.
- Update the API endpoints and data validation logic to handle the new custom ID field.

**Effort Estimate:** 6 hours

**Implementation Details:**
- Update the Agent model in the backend to include a custom ID field.
- Add validation rules to ensure the custom ID is unique and meets any required criteria.
- Update the API endpoints and data validation logic to handle the new field.
- Update any relevant documentation or API specifications.

### Add custom ID input in Facility's Agent management UI

**Acceptance Criteria:**
- Modify the Facility's Agent management UI to include an input field for entering custom IDs for Agents.
- The input field should be properly validated to ensure it meets any required criteria.
- Save and update the custom ID in the database for each Agent when the Facility submits the form.
- Display the custom ID in the Agent management UI for reference.

**Effort Estimate:** 8 hours

***Implementation Details:**
- Update the Facility's Agent management UI to include an input field for the custom ID.
- Implement client-side validation for the custom ID input field.
- Submit the custom ID data to the backend API when the form is submitted.
- Update the backend API to handle the custom ID data and update the Agent records accordingly.
- Display the custom ID in the Agent management UI based on the saved data.

### Update report generation to use custom IDs

**Acceptance Criteria:**
- Modify the `generateReport` function to use the custom ID instead of the internal database ID when generating reports for Facilities.
- Update the report generation logic to fetch and include the custom ID for each Agent in the report.
- Ensure the report generation process is still functional and produces accurate reports.

**Effort Estimate:** 6 hours

**Implementation Details:**
- Modify the `generateReport` function to fetch the custom ID for each Agent.
- Replace the internal database ID with the custom ID in the report generation logic.
- Ensure the report generation process remains intact and produces accurate reports.



