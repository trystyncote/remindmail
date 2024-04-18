Disclaimer: This is a project for a college-level software development class, and is therefore not an actual software. This is primarily to demonstrate understanding, and for practice.

At this point, the duration of the project has run its course, and as a result this repository is to be archived to preserve the end-result.

### Participants
- Liji Philip ([@Lijiphil](https://github.com/Lijiphil))
- Trystyn Cote ([@trystyncote](https://github.com/trystyncote))

# RemindMail

RemindMail (placeholder name; “the software”) is defined as an email-based reminder system, in terms of a web service. The premise is to act as a component of {SOME PROJECT*}, so the interface may not necessarily be user-friendly, since it’s meant for internal use.

The software is split into further components, with the primary two being the setup of the web service interface, and the ability to send emails. Further features have to do with the internal functionality, or alternative access.

The required components (detailed below) are as follows:

- Allow emails to be sent recurrently, at set intervals (every day, every week, etc);
- Allow a user to “opt-out”, which will prevent the software from sending an email to an opted-out user, in the form of an Access Denied code being sent to the user (403);
- Allow specific contextual information about the email (“metadata”) to be dynamically added through special formatting. The currently expected syntax would be <meta: $metadata>; and
- Allow a user to ‘acknowledge’ an email, such to demonstrate that the reminded task has been fulfilled (this could be useful in terms of the metadata).

There are additional features that are going to be mentioned, that are part of the suggested scope, but will only be included if ahead of schedule:

- Add AI-integration to allow “natural language processing”, which will allow users to speak more naturally, such as “remind me to do the laundry every week on Saturday morning”;
- Add SMS compatibility, which will allow the equivalent reminders, but in form of text messages; and
- Allow sending POST requests to the web service form with sending an email, as an alternative to raw POST requests.

The scope is considered incomplete; additional features may be added to the scope if additional features are required as per the outline.
