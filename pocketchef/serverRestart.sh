#!/bin/bash

arg1=$1
if [ "$arg1" = "--help" ]
then
  echo "Hello new friend!"
  echo "To start the server:"
  echo "	./serverRestart.sh"  
  echo "To kill the server:"
  echo "	./serverRestart.sh --kill"
  echo "And of course, to access this page:"
  echo "	./serverRestart.sh --help"
else
  sudo docker ps > info.txt
  awk '{print $1}' info.txt > num.txt
  number=$(sed '2q;d' num.txt)

  if [ -z "$number" ]
  then
      echo "Server is not up"
  else
        echo "Server is up."
        echo "Killing server"
        echo "sudo docker rm -f $number"
        sudo docker rm -f $number
        echo "Server is down"
  fi

  rm info.txt
  rm num.txt

  git pull origin master

  if [ "$arg1" = "--kill" ]
  then
        echo "Server killed"
  else
        sudo docker build -t pocketchef .>/dev/null
        echo "It's starting up, just chill"
        sudo docker run -p 80:80 pocketchef &>/dev/null &
        sleep 10s
        echo -e "              0000_____________0000________0000000000000000__000000000000000000+\n            00000000_________00000000______000000000000000__0000000000000000000+\n           000____000_______000____000_____000_______0000__00______0+\n          000______000_____000______000_____________0000___00______0+\n         0000______0000___0000______0000___________0000_____0_____0+\n         0000______0000___0000______0000__________0000___________0+\n         0000______0000___0000______0000_________000___0000000000+\n         0000______0000___0000______0000________0000+\n          000______000_____000______000________0000+\n           000____000_______000____000_______00000+\n            00000000_________00000000_______0000000+\n              0000_____________0000________000000007;"
        sleep 50s
        echo "Done"
  fi
fi
