# NextJS-Strapi-Framework
NextJS-Strapi-Framework

1. We create new repo

2. We install Strapi in its own directory

`yarn create strapi-app my-project --quickstart`

or if you write blong use this one

`yarn create strapi-app backend  --quickstart --template @strapi/template-blog@1.0.0 blog`

3. yarn run to start the server 

then `strapi start`

3. we create admin account


4. We need to create strapi with template that contains the following:

Collection Types Article, Category, and Writer 
Single Types Global, and Homepage

We can only add Collection Types in development mode. otherwise it will be read only mode

`strapi develop`

5. Now we can create Collection Types custom objects like title paragraph

"In short, we will create a data structure for your content, then add some entries and publish them, so that the API for your content can be consumed." - Strapi Docs


6. Create Collection Types with Content Type builder click "Create new Collection Type"

add text box as title then rich text as paragraph

7. Go to Content Manager click Use the collection types to create new entries 

Create catergory add relation box and assign blogpost so when you go to blogpost entry you see categories dropdown box

8. Now for people to pull data from the API and see it on frontend we need to create API token, go to Settings > Users & Permissions Plugin > Roles > Public

create API Token

Then do to 'Users & permissions plugin" 
click roles select blogpost add find findOne and the api string should appear right

9. Making API request

See content in action by making an HTTP request:
To this URL: https://<YOUR_DOMAIN>/api/<YOUR_CT>
With the header: Authorization: bearer <YOUR_API_TOKEN>

10. Your Markerter or Copywriter will access http://localhost:1337/admin or https://yourdomain.com/admin



