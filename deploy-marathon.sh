APP_ID=react-graphs
curl -X PUT "$MARATHON_HOST/v2/$MARATHON_JSON_TYPE/$APP_ID" -d "@marathon.json" \
  -H "Content-type: application/json" \
  --header "Authorization: token=$DCOS_TOKEN"
