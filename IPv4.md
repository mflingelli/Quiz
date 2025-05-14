## IPv4-Quiz

### Frage 1

Wie viele Bits hat eine IPv4-Adresse?

<div id="question1">
  <ol>
    <li><button onclick="checkAnswer('question1', '', false)">16 Bits</button></li>
    <li><button onclick="checkAnswer('question1', 'Eine IPv4-Adresse besteht aus 32 Bits, die in vier Oktette zu je 8 Bits unterteilt sind.', true)">32 Bits</button></li>
	<li><button onclick="checkAnswer('question1', '', false)">64 Bits</button></li>
	<li><button onclick="checkAnswer('question1', '', false)">128 Bits</button></li>
    <p id="result_question1"></p>
</div>

### Frage 2

Was ist die maximale Anzahl von Hosts in einem Netzwerk mit der Subnetzmaske 255.255.255.0?

<div id="question2">
  <ol>
    <li><button onclick="checkAnswer('question2', 'Die Subnetzmaske 
255.255.255.0
 erlaubt 256 Adressen, von denen 2 für Netzwerk- und Broadcast-Adressen reserviert sind. Daher können 254 Hosts verwendet werden.', true)">254 Hosts</button></li>
    <li><button onclick="checkAnswer('question2', '', false)">256 Hots</button></li>
    <li><button onclick="checkAnswer('question2', '', false)">510 Hosts</button></li>
    <li><button onclick="checkAnswer('question2', '', false)">512 Hosts</button></li>
  </ol>
  <p id="result_question2"></p>
</div>

### Frage 3

Welche Klasse von IPv4-Adressen hat den Bereich 192.0.0.0 bis 223.255.255.255?

<div id="question3">
  <ol>
    <li><button onclick="checkAnswer('question3', '', false)">Klasse A</button></li>
    <li><button onclick="checkAnswer('question3', '', false)">Klasse B</button></li>
    <li><button onclick="checkAnswer('question3', 'Der Bereich 192.0.0.0 bis 223.255.255.255 gehört zur Klasse C, die für kleinere Netzwerke verwendet wird.', true)">Klasse C</button></li>
    <li><button onclick="checkAnswer('question3', '', false)">Klasse D</button></li>
  </ol>
  <p id="result_question3"></p>
</div>

### Frage 4

Was ist die Funktion der Subnetzmaske in IPv4?

<div id="question4">
  <ol>
    <li><button onclick="checkAnswer('question4', '', false)">Sie verschlüsselt Datenpakete.</button></li>
    <li><button onclick="checkAnswer('question4', 'Die Subnetzmaske teilt eine IPv4-Adresse in den Netzwerk- und Hostanteil auf, wodurch Subnetze erstellt werden können.', true)">Sie teilt eine IP-Adresse in Netzwerk- und Hostanteil auf.</button></li>
    <li><button onclick="checkAnswer('question4', '', false)">Sie weist dynamische IP-Adressen zu.</button></li>
    <li><button onclick="checkAnswer('question4', '', false)">Sie überprüft die Erreichbarkeit eines Hosts.</button></li>
  </ol>
  <p id="result_question4"></p>
</div>

### Frage 5

Welche IPv4-Adresse ist für Broadcasts reserviert?

<div id="question5">
  <ol>
    <li><button onclick="checkAnswer('question5', '', false)">0.0.0.0</button></li>
    <li><button onclick="checkAnswer('question5', '', false)">127.0.0.1</button></li>
    <li><button onclick="checkAnswer('question5', 'Die Adresse 255.255.255.255 ist für Broadcasts reserviert und wird verwendet, um Daten an alle Hosts im Netzwerk zu senden.', true)">255.255.255.255</button></li>
    <li><button onclick="checkAnswer('question5', '', false)">192.168.0.255</button></li>
  </ol>
  <p id="result_question5"></p>
</div>

### Frage 6

Was bedeutet die Abkürzung CIDR in Bezug auf IPv4?

<div id="question6">
  <ol>
    <li><button onclick="checkAnswer('question6', 'CIDR steht für Classless Inter-Domain Routing und ermöglicht eine flexible Subnetzbildung durch die Verwendung von Präfixlängen anstelle von festen Klassen.', true)">Classless Inter-Domain Routing</button></li>
    <li><button onclick="checkAnswer('question6', '', false)">Classful Internet Domain Routing</button></li>
    <li><button onclick="checkAnswer('question6', '', false)">Centralized Internet Data Routing</button></li>
    <li><button onclick="checkAnswer('question6', '', false)">Classless Internet Data Routing</button></li>
  </ol>
  <p id="result_question6"></p>
</div>

### Frage 7

Welche IPv4-Adresse ist für die Loopback-Funktion reserviert?

<div id="question7">
  <ol>
    <li><button onclick="checkAnswer('question7', '', false)">0.0.0.0</button></li>
    <li><button onclick="checkAnswer('question7', 'Die Adresse 127.0.0.1 ist die Loopback-Adresse, die verwendet wird, um die Netzwerkfunktionalität des eigenen Geräts zu testen.', true)">127.0.0.1</button></li>
    <li><button onclick="checkAnswer('question7', '', false)">192.168.1.1</button></li>
    <li><button onclick="checkAnswer('question7', '', false)">255.255.255.255</button></li>
  </ol>
  <p id="result_question7"></p>
</div>

### Frage 8

Was ist die Funktion der Adresse 0.0.0.0 in IPv4?

<div id="question8">
  <ol>
    <li><button onclick="checkAnswer('question8', '', false)">Sie wird für Broadcasts verwendet.</button></li>
    <li><button onclick="checkAnswer('question8', '', false)">Sie wird für Loopback verwendet.</button></li>
    <li><button onclick="checkAnswer('question8', 'Die Adresse 0.0.0.0 zeigt an, dass keine spezifische Adresse zugewiesen ist und wird häufig für Routingzwecke verwendet.', true)">Sie zeigt an, dass keine spezifische Adresse zugewiesen ist.</button></li>
    <li><button onclick="checkAnswer('question8', '', false)">Sie wird für private Netzwerke verwendet.</button></li>
  </ol>
  <p id="result_question8"></p>
</div>

### Frage 9

Wie viele Adressen können in einem Netzwerk mit der Subnetzmaske 255.255.255.128 verwendet werden?

<div id="question9">
  <ol>
    <li><button onclick="checkAnswer('question9', 'Die Subnetzmaske 255.255.255.128 teilt ein Netzwerk in zwei Subnetze mit jeweils 128 Adressen. Davon sind 2 Adressen für Netzwerk- und Broadcast-Adressen reserviert, sodass 126 Adressen für Hosts verfügbar sind.', true)">126 Adressen</button></li>
    <li><button onclick="checkAnswer('question9', '', false)">128 Adressen</button></li>
    <li><button onclick="checkAnswer('question9', '', false)">254 Adressen</button></li>
    <li><button onclick="checkAnswer('question9', '', false)">256 Adressen</button></li>
  </ol>
  <p id="result_question9"></p>
</div>

### Frage 10

Wie viele Subnetze können mit der Subnetzmaske 255.255.255.192 in einem Klasse-C-Netzwerk erstellt werden?

<div id="question10">
  <ol>
    <li><button onclick="checkAnswer('question10', '', false)">2 Subnetze</button></li>
    <li><button onclick="checkAnswer('question10', 'Die Subnetzmaske 255.255.255.192  entspricht einem Präfix von /26, was bedeutet, dass 6 zusätzliche Bits für die Subnetzbildung verwendet werden. In einem Klasse-C-Netzwerk können 4 Subnetze erstellt werden.', true)">4 Subnetze</button></li>
    <li><button onclick="checkAnswer('question10', '', false)">6 Subnetze</button></li>
    <li><button onclick="checkAnswer('question10', '', false)">8 Subnetze</button></li>
  </ol>
  <p id="result_question10"></p>
</div>

<div id="endScreen" style="display: none;">
    <h2>Quiz beendet!</h2>
    <p id="finalScore"></p>
    <button onclick="restartQuiz()">Quiz erneut starten</button>
</div>