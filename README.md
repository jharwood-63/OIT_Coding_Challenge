To use the back end you need to create an api key. Do this by going to https://developer.themoviedb.org/reference/intro/getting-started and creating a free account. From there you can create an api key for use on the movie search API.

Clone the repository by typing git clone https://github.com/jharwood-63/OIT_Coding_Challenge.git in a terminal

#Back End

Cd to the webservice directory and type npm run build. This will install all of the dependencies that are needed. Add your api read token to your environment variables, the code references an environment variable called ACCESS_TOKEN.

At this point you can start the backend.

#Front End

Cd to the webapp directory in the repo and type npm run build to install all of the dependencies. 

Next you can type npm run dev to start the front end. 

Enter a movie title in the search bar and click search. I was unable to get the data to display in the table but
if you open the console (ctrl+shift+i for windows and then click console) you will see that the movie data is returned in the correct format.

#Future Improvements

If I had more time I would first figure out how to get the table to refresh when new data was received. Then I would make the rows of the table clickable. When a row is selected a pop up comes up and shows the poster image and other data about each movie.
