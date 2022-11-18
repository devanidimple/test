created project using follwoing commands:

npx create-nx-workspace@latest

select integrated, choose anguar,add repo name,app name,css pattern

cd mf-app run the project using npx nx serve

this would load home project

home project would show two links home & gallery where gallery is another application

both the applications are using a shared service created at mf-app root level and is used by both home and gallery application to set and get the data
