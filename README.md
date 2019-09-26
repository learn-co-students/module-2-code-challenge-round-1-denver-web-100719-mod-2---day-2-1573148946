## The Domain

You've just been hired by 'Marvel Comics' - congratulations! The production staff wants you to make a website that will allow the fans to create [heroines, women superheroes](http://www.dictionary.com/browse/heroine). To do this, we need a way to keep track of all of the new heroines and powers that have been created by the fans.

We have several different powers and each can be bestowed upon **more than one heroine**. Each heroine can only have **one power**.

## Tasks

Start the Rails API and HTML/CSS/JS in the provided folders.

1. Create index endpoints for heroines and seed it with at least 3 heroines.
    * Heroines have a `name` and a `super_name`
1. Create a web page that lists all the heroines' names
1. Create a show endpoint for heroines
1. Create a web page that reads an id out of the query string and uses it to retrieve and display a single heroine. The page should include their `name` and `super_name`.
1. Link to each heroine's show page from their name on the index page
1. Create API endpoints for heroines and powers. A heroine only has one power, but each power can be used by multiple heroines.
1. Create an index endpoint for powers and seed it with at least 3 powers.
    * Powers have a `name` and `description`
1. Create a web page that reads an id out of the query string and uses it to retrieve and display a power's `name` and `description`.
1. Create a relationship between heroines and powers and:
    * Make sure the heroine's show and index actions also include their power data
    * The individual heroine page displays the name of their power
    * The name of the power on the individual heroine page links to that page for that power
1. You should be able to create a new heroine with:
    * `name`
    * `super_name`
    * One of the existing powers
1. Add a search filter to the page that narrows the list of heroines to those that have the power selected by user (can add to links so when user clicks on the name of the power, the power show page shows the heroines with that power).


## Getting Started
After forking, cloning, and cd-ing into this repo:
   1. cd `backend`
   1. run `bundle`
   1. run `db:create`
