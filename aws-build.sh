#! /bin/bash
rm -rf site
mkdocs build
aws s3 cp site/ s3://nickvenky123-resume-bucket --recursive