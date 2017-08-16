
# Authority Modell (Work in progress)

* Falls Docker installiert ist, initial folgenden Befehl ausführen: 


```
./runAndBuild-all.sh
```

Damit werden alle nötigen images erstellt und die container gestartet. Der Terminal vom authority Container öffnet sicht automatisch. Dort sind die folgenden "tmux" windows geöffnet: swagger api, testrpc, mysql und zweimal bash console. Mit ctrl + b + [0-4] kann zwischen den windows gewechselt werden.

* Falls die images vorhanden sind, können mit folgendem Befehl die drei Container gestartet werden.

```
./run-all.sh
```

* Das swagger und truffle Verzeichnis wird jeweils in den "authority" container gespiegelt. Änderungen auf dem host Computer übertragen sich unmittelbar auf den laufenden container.

* Unter http://localhost:8080/docs/ läuft die swagger api. 

* Truffle tests können folgendermaßen ausgeführt werden:

```
cd /src/truffle/ ; truffle test
```

* Swagger api tests können folgendermaßen ausgeführt werden:

```
cd /src/swagger ; swagger project test
```




~~~
truffle deploy --network local 
truffle deploy --network testrpcName
~~~


