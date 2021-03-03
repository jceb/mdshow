#!/bin/bash

if [[ -n $MDSHOW_THEME_PATH ]]; then
  THEME=--volume=${MDSHOW_THEME_PATH}:/opt/mdshow/theme/$(basename ${MDSHOW_THEME_PATH})
fi

docker run --user=$(id -u) --rm -it --net=host ${THEME} --volume=$(pwd):/mdshow --workdir=/mdshow registry.lakedrops.com/docker/mdshow mdshow $@
