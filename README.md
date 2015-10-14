### Information

The goal of this challenge is to create a basic login API, the specifications for this API is created by using 'api-first-spec' so these are already avalaible to you.

As most of the specification is already defined in the spec files (see the spec folder), some steps might seem to be lacking information to run correctly, in these cases please read the spec file belonging to the step.

Any custom configuration can be done in the config.json file.

You are free to use "Comments.md" for any kind of notes, for example
- Personal notes or problems
- Information on how your code works
- Any suggestions on what should be changed in the specifications.

All calls done to the API shall be RESTful, all data shall be json.

### Step 1, Registration

Create a registration portal according to the specifications.

Temporaly save all registered accounts, please make sure you clear them every run.

Also add a very simple password policy in which "123abc!" will be valid, but "root" will be invalid.

### Step 2, Login

Create a registration portal according to the specifications.

Please check for the password and existence of the account.

On a valid login, please provide the user with a login token which can be used for further references.

### Step 3, Remove

Sometimes a user might want to remove/disable his/her account, in this case we will keep the user data and apply a so called 'soft delete', meaning that while the user will not be able to login onto the account anymore, the data will persist and nobody will be able to register with the same username.

As we want to prevent any abuse of this system, any invalid access to this should throw a HTTP status code of 401 "Unauthorized"