#!/bin/bash
set -e

# Install python.
sudo apt-get -y update; sudo apt install -y python3

chmod +x install.sh
chmod +x server_run.sh
chmod +x sleep.sh

echo "Running install.sh; Notice sudo permission only for install.sh"
sudo ./install.sh
echo "Running server_run.sh as a background process"
./server_run.sh &
echo "Running sleep.sh in the foreground"
cat ./sleep.sh
./sleep.sh

echo "Running base score_generate.py"
python3 ./score_generate.py $usr "BASE"
