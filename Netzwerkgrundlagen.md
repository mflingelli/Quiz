## Netzwerk-Quiz

### Frage 1

Was ist die Hauptaufgabe eines Routers?

<div id="question1">
  <ol>
    <li><button onclick="checkAnswer('question1', '', false)">Verwaltung von IP-Adressen</button></li>
    <li><button onclick="checkAnswer('question1', 'Ein Router leitet Datenpakete zwischen verschiedenen Netzwerken weiter und ermöglicht die Kommunikation zwischen ihnen. Er verwendet Routing-Tabellen und Protokolle, um den besten Weg für die Daten zu bestimmen.', true)">Weiterleitung von Datenpaketen zwischen Netzwerken</button></li>
	<li><button onclick="checkAnswer('question1', '', false)">Bereitstellung von Internetzugang</button></li>
	<li><button onclick="checkAnswer('question1', '', false)">Speicherung von Daten</button></li>
    <p id="result_question1"></p>
</div>

### Frage 2

Welche Schicht des OSI-Modells ist für die physikalische Übertragung verantwortlich?

<div id="question2">
  <ol>
    <li><button onclick="checkAnswer('question2', '', false)">Transportschicht</button></li>
    <li><button onclick="checkAnswer('question2', '', false)">Netzwerkschicht</button></li>
    <li><button onclick="checkAnswer('question2', 'Die physikalische Schicht (Layer 1) des OSI-Modells ist für die Übertragung von Rohdaten über physikalische Medien wie Kabel oder Funkwellen verantwortlich.', true)">Physikalische Schicht</button></li>
    <li><button onclick="checkAnswer('question2', '', false)">Sicherungsschicht</button></li>
  </ol>
  <p id="result_question2"></p>
</div>

### Frage 3

Welche der folgenden IP-Adressen gehört zum privaten Adressbereich?

<div id="question3">
  <ol>
    <li><button onclick="checkAnswer('question3', '<code>192.168.1.1</code> gehört zum privaten Adressbereich (<code>192.168.0.0</code> bis <code>192.168.255.255</code>), der für lokale Netzwerke reserviert ist.', true)">192.168.1.1</button></li>
    <li><button onclick="checkAnswer('question3', '', false)">8.8.8.8</button></li>
    <li><button onclick="checkAnswer('question3', '', false)">172.32.0.1</button></li>
    <li><button onclick="checkAnswer('question3', '', false)">203.0.113.1</button></li>
  </ol>
  <p id="result_question3"></p>
</div>

### Frage 4

Was ist die Hauptfunktion eines Switches in einem Netzwerk?

<div id="question4">
  <ol>
    <li><button onclick="checkAnswer('question4', '', false)">Verbindung von Netzwerken</button></li>
    <li><button onclick="checkAnswer('question4', 'Ein Switch leitet Datenpakete innerhalb eines lokalen Netzwerks (LAN) weiter, indem er die MAC-Adressen der Geräte verwendet, um die Daten an die richtigen Empfänger zu senden.', true)">Weiterleitung von Datenpaketen innerhalb eines Netzwerks</button></li>
    <li><button onclick="checkAnswer('question4', '', false)">Bereitstellung von Internetzugang</button></li>
    <li><button onclick="checkAnswer('question4', '', false)">Zuweisung von IP-Adressen</button></li>
  </ol>
  <p id="result_question4"></p>
</div>

<div id="endScreen" style="display: none;">
    <h2>Quiz beendet!</h2>
    <p id="finalScore"></p>
    <button onclick="restartQuiz()">Quiz erneut starten</button>
</div>