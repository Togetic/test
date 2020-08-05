#!/usr/bin/env bash
export USER_ID=$UID

ENV='local'

while getopts e: option
do
 case "${option}"
 in
 e) ENV=${OPTARG};;
 esac
done

if [ ${ENV} == 'local' ]; then
    FILE='config/docker-compose-local.yml'
elif [ ${ENV} == 'dev' ]; then
    FILE='config/docker-compose-dev.yml'
elif [ ${ENV} == 'prod' ]; then
    FILE='config/docker-compose-prod.yml'
elif [ ${ENV} == 'stage' ]; then
    FILE='config/docker-compose-stage.yml'
else
    echo 'Environment not found.'
    exit 1
fi
