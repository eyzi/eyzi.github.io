# Persistence

Storing things that we might use later is common, or even necessary for
most apps. Whether that's in a database, cache, file, or even just
local variable, most use cases rely on the basic persistence operations
commonly known as CRUD (create, read, update, delete). As such,
implementing an interface in which anything that requires access to
persistent data can use would be useful