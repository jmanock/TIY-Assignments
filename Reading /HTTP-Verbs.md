
# Http Verbs
### Get
Used for retrieving resources
* users/username
* user/location
* user/org
### Post
Used for creating resources, or performing custom actions
* repos/:owner/:repo/pulls
* user/repos/
* repos/:owner/:repo/issues
### Put
Used for replacing resources or collections
* users/:username/site_admin
* repos/:owner/:repo/notifications
* noticications/threads/:id/subscriptions
### Delete
Used for deleting resources
* notifications/threads/:id/subscription
* repos/:owner/:repo/git/refs/:ref
* repos/org
