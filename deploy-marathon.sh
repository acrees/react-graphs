APP_ID=react-graphs
TAG=acrees/react-graphs:$(git rev-parse --short HEAD)

mkdir out

cat marathon.json | \
  jq ".container.docker.image |= \"$TAG\"" > out/marathon.json

  curl -sSfX PUT "$MARATHON_HOST/v2/$MARATHON_JSON_TYPE/$APP_ID" -d "@out/marathon.json" \
  -H "Content-type: application/json" \
  --header "Authorization: token=$DCOS_TOKEN"
