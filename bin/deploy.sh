git log --pretty=oneline -1 > public/version.html
aws s3 sync public s3://cobra-doodletech --cache-control max-age=30
rm public/version.html
