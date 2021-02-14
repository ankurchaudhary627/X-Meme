chmod +x install.sh
sudo ./install.sh

chmod +x server_run.sh
./server_run.sh &


chmod +x sleep.sh
./sleep.sh

curl --location --request GET 'http://localhost:8081/memes'

curl --location --request POST 'http://localhost:8081/memes' \
--header 'Content-Type: application/json' \
--data-raw '{
"name": "xyz",
"url": "https://3c534w2w7sa3ma8ved14ax12-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/Copy-of-Untitled-2020-07-08T105340.290-1080x630.png",
"caption": "This is meme"
}'


curl --location --request GET 'http://localhost:8081/memes'

curl --location --request GET 'http://localhost:8081/swagger-ui'
