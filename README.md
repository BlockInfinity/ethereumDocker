# Ethereum Template (Work in progress)

* Falls Docker installiert ist, initial folgenden Befehl ausführen: 


```
./runAndBuild-all.sh
```

Damit werden alle nötigen images erstellt und die container gestartet. Der Terminal vom truffleAndApi Container öffnet sicht automatisch. Dort sind die folgenden "tmux" windows geöffnet: swagger api, testrpc, mysql und zweimal bash console. Mit ctrl + b + [0-4] kann zwischen den windows gewechselt werden.

* Falls die images vorhanden sind, können mit folgendem Befehl die drei Container gestartet werden.

```
./run-all.sh
```

* Das swagger und truffle Verzeichnis wird jeweils in den "truffleAndApi" container gespiegelt. Änderungen auf dem host Computer übertragen sich unmittelbar auf den laufenden container.

* Unter http://localhost:8080/docs/ läuft die swagger api. 

* Truffle tests können folgendermaßen ausgeführt werden:

```
cd /src/truffle/ ; truffle test --network container
```

* Swagger api tests können folgendermaßen ausgeführt werden:

```
cd /src/swagger ; swagger project test
```

* contracts können folgendermaßen deployed werden:

~~~
cd /src/swagger ; truffle deploy --network container
~~~

* Beim Start werden automatisch alle truffle und api tests ausgeführt. 

* Die Browser IDE Cloud9 ist unter http://localhost:8181/ide.html erreichbar. 