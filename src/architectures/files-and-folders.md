# Files and Folders

For the longest time, I have experimented on what's the best way to
structure my projects. There are still some things I am unsure of, but
I have found some that has been working well for me.

As with [entities](/naming-conventions/entities), the rule for using
plural nouns applies. A more specific resource should have a longer
address.

```
src/modules/first-module
```

I usually use [kebab case](/case-styles/kebab-case) for files and
folders.

## Structure

I have a lot of dummy projects, some of them are for code katas and
some of them I just created to test a concept. Most of them has a
simple structure, usually only having a single file.

```sh
# Exhibit A
📄 index.js
📄 package.json
```

It works for what it's used for. I don't really need to create, say,
an `src` folder if it will only have a single file inside and I'm not
building a distributable.

There's not a hard and fast rule I follow for when I start separating
files into folders. I would say it really depends on how many things
a service is doing or how many data types it is dealing with.

For instance, the usual project folder I have for even the basic
desktop application made in Electron would have a separate folder for
the main process and renderer process. While you can compress them into
a single file when the scope of the project is tiny, it is doing
vastly different things.

```sh
# Exhibit B
📂 main
  📄 index.js
📂 renderer
  📄 index.js
📄 app.js
📄 package.json
```

## Domains

When is it good to use `utils` as a folder name?

Separating files by technical differences can eventually make it hard
to traverse. It is organized _technically_ and it does make sense in
practice, but our minds don't quite work that way.

Consider these two hypothetical examples

```sh
# Exhibit A
📂 exes
  📂 games
    📂 minecraft
📂 jpgs
  📂 business
  📂 personal
  📂 games
    📂 screenshots
📂 pdfs
  📂 business
    📂 invoices
  📂 personal
    📂 files
```

```sh
# Exhibit B
📂 business
  📂 invoices
  📂 photos
📂 games
  📂 minecraft
    📂 screenshots
📂 personal
  📂 files
  📂 photos
```

How do we usually organize our files? Is it by file type like in
`Exhibit A`? Or is it by domain like in `Exhibit B`? There is something
natural about grouping things together by relevance instead of
technicalities.

I think that applies to programming structures, too. Granted there are
definitely times when grouping by technicalities make sense, but when
and where you do it is something you'll get a hang of as you make more
projects.

That said, using names like `utils` for folders, or even files, is
something you'd like to avoid whenever you can.

Let's take another step with another hypothetical example.

```sh
# Exhibit C
📂 configs
  📄 database-config.php
  📄 server-config.php
📂 controllers
  📄 order-controller.php
  📄 user-controller.php
📂 models
  📄 order-model.php
  📄 user-model.php
📂 utils
  📄 database-utils.php
  📄 order-utils.php
  📄 server-utils.php
  📄 user-utils.php
📂 views
  📄 order-view.php
  📄 user-view.php
```

Here we have a classic example of the MVC framework structure, which
was once a buzz in programming. And this only has two services: `user`
and `order`. When you discover bugs, you can imagine how tedious it
would be going back and forth the files, especially when you're not
familiar of what goes where.

Now here's the last hypothetical example. Something I would personally
use.

```sh
# Exhibit D
📂 configs
  📄 server.js
  📄 database.js
📂 constants
  📄 server.js
  📄 database.js
📂 services
  📂 common
    📂 datetime
      📄 parse-isostring.js
    📂 string
      📄 capitalize-first-letter.js
  📂 users
    📂 schemas
      📄 user.js
    📂 repository
      📄 create-user.js
      📄 delete-user.js
      📄 get-user.js
      📄 list-users.js
      📄 update-user.js
  📂 orders
    📂 constants
      📄 default-order-type.js
    📂 schemas
      📄 order.js
      📄 sub-order.js
    📂 repository
      📄 create-order.js
      📄 delete-order.js
      📄 get-order.js
      📄 list-orders.js
      📄 update-order.js
📄 server.js
```

We might think that `utils` and `common` are basically the same thing
in concept, but they are semantically different and the latter is more
useful when files are divided by their domains.

As with naming variables and functions, it is a lot easier to read and
follow when it is descriptive. I try to name my files as specific to
its functionality as I can. That way, I can easy find my way around
easier instead of using "Search in all files" a lot.

::: tip
Don't be afraid of having _too_ many files
:::
