# Twitter-Streaming

1. First build the images using "docker-compose build" in the root directory
2. Then run "docker-compose up" or to run it in detach mode "docker-compose up -d"
3. To shutdown run "docker-compose down"

#### Make sure to set up the ".env" file, example is provide it the ".env-example"

##### APIs supported
###### Base Url: ip:port
1. Method POST: /api/v1/users/signup
    * body Ex: 
        ```    
        {
            "email":"test@gmail.com",
            "password":"password"
        }
        ```

2. Method POST: /api/v1/users/login
    * Body Ex:
        ```    
        {
            "email":"test@gmail.com",
            "password":"password"
        }
        ```

3. Method GET: /api/v1/tweets
    * URL Query
         ```
         author=test
         test=photo
         hashtags=funny
         date=2019-07-12
        ```