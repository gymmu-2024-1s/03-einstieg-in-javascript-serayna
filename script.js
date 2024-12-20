import { linkupExerciseHandler } from "./utils"

/**
 * Wir erstellen hier eine Funktion für die Aufgabe 1. Funktionen sind praktisch
 * um den Code innerhalb, vom rest zu trennen. Dadurch können wir Variablen mit
 * gleichem Namen auch in anderen Funktionen verwenden, ohne das deren Wert
 * überschrieben wird.
 * Funktionen können auch verwendet werden, um an anderer Stelle wieder
 * verwendet zu werden. Wir machen das in diesem Projekt eigentlich nicht, aber
 * wenn Sie des Resultat von einer Funktion nochmals brauchen, können Sie das
 * wie folgt machen:
 *    `const withoutE = aufgabe01("Hier ist ein Text mit einigen e's")`
 * Damit wird der Code in aufgabe01 ausgeführt, der sollte alle e's entfernen,
 * und das Resultate wird in der Variable `withoutE` gespeichert, und kann dann
 * weiter verwendet werden.
 */
export function aufgabe01(args) {
  // Wir speichern hier den Wert von args in der Variable `input` ab. Damit soll für uns klarer werden, womit wir arbeiten.
  const input = args

  // Wir erzeugen hier eine leere Liste, in der wir das Resultat Stück für Stück anhängen.
  const result = []

  // Mit dieser Schlaufe nummerieren wir jedes Zeichen in `input` durch. Das
  // machen wir um jedes Zeichen einzeln anzuschauen.
  for (let i = 0; i < input.length; i++) {
    // Hier speichern wir das Zeichen an der Stelle `i` in der Variable
    // `currentElement`, damit es explizit ist womit wir arbeiten, aber auch
    // damit wir nicht so viele Klammern schreiben müssen.
    const currentElement = input[i]
    if (currentElement === "e") {
      // do nothing
    } else if (currentElement === "E") {
      //auch E ignorieren
    } else {
      result.push(currentElement)
    }

    // Hier wird das aktuelle Zeichen ans Ende der Resultat-Liste angehängt.
  }

  // Hier geben wir das Resultat zurück, und machen einen Text daraus.
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe01]", aufgabe01)
export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const uppercaseletter = currentElement.toUpperCase()
    result.push(uppercaseletter)
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe02]", aufgabe02) // Wenn man das nicht macht, funktioniert der Button nicht

export function aufgabe03(args) {
  const input = args
  const result = []

  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      // Soll e's zählen wenn es ein e gibt.
      count = count + 1
    } else if (currentElement === "E") {
      // Macht es auch mit grossen E's
      count++
    }
  }
  return count // Gibt zurück, was es gezählt hat
}
linkupExerciseHandler("[data-click=aufgabe03]", aufgabe03)

export function aufgabe04(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if (ascii >= 65 && ascii <= 90) {
      // Wenn es zwischen 65 und 90 ist, ist es ein Grossbuchstabe.
      result.push(currentElement)
    } else if (ascii >= 97 && ascii <= 122) {
      // Wenn es zwischen 97 und 122 ist, ist es ein Kleinbuchstabe.
      result.push(currentElement)
    } else if (ascii === 32) {
      // Leerzeichen
      result.push(currentElement)
    }
  }

  const result2 = []
  for (let i = 0; i < result.length; i++) {
    const currentElement = result[i]
    const nextElement = result[i + 1]
    if (currentElement === " " && nextElement === " ") {
      // Es sind 2 Leerzeichen hintereinander, wir ignoreren das Erste
    } else {
      result2.push(currentElement)
    }
  }
  // Nun können wir die Leerzeichen zählen
  let count = 0
  for (let i = 0; i < result2.length; i++) {
    const currentElement = result2[i]
    if (currentElement === " ") {
      count++
    }
  }
  // Da es ein Wort mehr gibt, wie Leerzeichen, geben wir Leerzeichen zurück
  return count + 1
}
linkupExerciseHandler("[data-click=aufgabe04]", aufgabe04)

export function aufgabe08(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      result.push("3") // Ersetze alle e's durch 3
    } else if (currentElement === "") {
      // do nothing
    } else {
      result.push(currentElement) //Behalte alle anderen Zeichen bei
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe08]", aufgabe08)

export function aufgabe05(args) {
  const input = args
  const result = []

  let hasCapitalLetter = false // Zuerst sagen, dass es nicht stimmt, dann prüfen, ob es stimmt oder nicht
  // Schrieb eine Funktion, die testet, ob ein Grossbuchstaben vorkommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      // Muss zwischen 65 und 90 liegen, damit es stimmen kann
      hasCapitalLetter = true // Liegt zwischen 65 und 90 dehsalb "true"
    }
  }
  return hasCapitalLetter
}
linkupExerciseHandler("[data-click=aufgabe05]", aufgabe05)

export function aufgabe06(args) {
  const input = args
  const result = []
  let hasSonderzeichen = false
  // Schreibe eine Funktion, die testet ob ein Sonderzeichen vorkommt

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 33 && ascii <= 47) {
      hasSonderzeichen = true
    }
  }
  return hasSonderzeichen // Gibt das Ergebnis zurück, also "true"
}
linkupExerciseHandler("[data-click=aufgabe06]", aufgabe06)

export function aufgabe07(args) {
  const input = args
  const result = []
  //Sollte das Wort 'und' erkennen
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "u") {
      if (input[i + 1] === "n") {
        if (input[i + 2] === "d") {
          return true
        }
      }
    }
  }
  return false // Wenn es bis hier nicht gefunden wurde, wird false zurückgegeben
}
linkupExerciseHandler("[data-click=aufgabe07]", aufgabe07)

export function aufgabe09(args) {
  const input = args
  const result = []
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    count = count + 1
  }
  let has6 = false

  if (count === 6) {
    // Wenn die Anzahl der Zeichen 6 ist, ist es richtig, also "true"
    has6 = true
  }

  return has6
}

linkupExerciseHandler("[data-click=aufgabe09]", aufgabe09)

export function aufgabe10(args) {
  const input = args
  const result = []
  //Teste ob eine Eingabe ein korrekter RGB Hexcode ist

  let hasCorrectRGB = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 48 && ascii <= 57) {
      // Wenn es zwischen 48 und 57 ist, stimmt es
      hasCorrectRGB = true
      return true
    }
  }
  return false // Gibt false zurück, wenn es nicht stimmt
}
linkupExerciseHandler("[data-click=aufgabe10]", aufgabe10)

export function aufgabe11(args) {
  const input = args
  const result = []
  //Erstelle eine neue Variable um den ASCII-Code zu speichern.
  let asciiCode = 0

  //Speichere den ASCII-Code vom ersten Zeichen
  asciiCode = input.charCodeAt(0) //--> Der Code gibt den ASCII-Code des ersten Zeichens zurück
  if (input.length > 1) {
    return null

    //--> Der Code gibt null zurück, wenn der Input mehr als ein Zeichen enthält
  } else if (input.length === 0) {
    return null // Gibt 0 zurück
  }
  return asciiCode
}
linkupExerciseHandler("[data-click=aufgabe11]", aufgabe11)

export function aufgabe12(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      // Wenn das currentElement ein "e" ist, return i
      return i
    }
  }
  return -1 // or null // Gibt -1 oder 0 zurück
}
linkupExerciseHandler("[data-click=aufgabe12]", aufgabe12)

export function aufgabe13(args) {
  const input = args
  let lastindex = -1 // Neue Variable erstellen

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e") {
      lastindex = i
    }
  }
  return lastindex // Gibt den letzten Index, also "lastindex" zurück
}

linkupExerciseHandler("[data-click=aufgabe13]", aufgabe13)

export function aufgabe14(args) {
  const input = args
  let count = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e") {
      count++
      if (count === 3) {
        return i
      }
    }
  }
  return -1 // Soll -1 zurückgeben
}
linkupExerciseHandler("[data-click=aufgabe14]", aufgabe14)

export function aufgabe15(args) {
  const input = args
  const result = []
  //Lese nur bis zum Leerzeichen ein
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === " ") {
      // Wenn das currentElement ein Leerzeichen ist, hört es auf die Eingabe einzulesen
      break
    }
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe15]", aufgabe15)

export function aufgabe16(args) {
  const input = args
  const result = []
  //Lesen Sie die Eingabe bis zum Zeichen '$' als ersten Teil einer Liste ein, und den Rest als den zweiten Teil.
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "$") {
      break
    }
    result.push(currentElement)
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe16]", aufgabe16)

export function aufgabe17(args) {
  const input = args
  const totalList = []
  const currentList = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    // Wenn wir auf ein Leerzeichen treffen, schreiben wir alles was wir bis jetzt haben, in die totallist
    if (currentElement === " ") {
      totalList.push(currentList.join(""))
      currentList.length = 0
    } else {
      currentList.push(currentElement)
    }
  }

  // Wir schrreiben alles, was wir noch bis zum Ende gelesen haben, in die Liste
  totalList.push(currentList.join(""))

  return totalList
}
linkupExerciseHandler("[data-click=aufgabe17]", aufgabe17)

export function aufgabe18(args) {
  const input = args
  //Wir können die Aufgabe 17 verwenden um eine Liste zu erhalten
  const nameAndAge = aufgabe17(input)

  //Wir generieren eine unsere Aufgabenliste
  const result = []

  // Hier schreiben wir ganze Worte in die Liste
  result.push("Sie heissen ")

  // Wir setzen die Liste dann zusammen, sodass die Name und Alter dann an der richtigen Stelle stehen
  result.push(nameAndAge[0])
  result.push(" und sind ")
  result.push(nameAndAge[1])
  result.push(" Jahre alt.")

  // Wie immer geben wir das Resultat als Text zurück
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe18]", aufgabe18)

export function aufgabe19(args) {
  const input = args
  const result = []
  // schreibe jedes Zeichen doppelt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement) // Verdopple das Zeichen
  }
  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe19]", aufgabe19)

export function aufgabe20(args) {
  const input = args
  const result = []

  let allGood = true

  //Prüfe ob nach jedem "." ein Leerzeichen kommt
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === ".") {
      // prüfe ob das nächste Zeichen ein Leerzeichen ist
      if (input[i + 1] === " ") {
        // mache nichts
      } else {
        allGood = false
      }
    }
  }
  return allGood //Gibt uns das "allGood"zurück, da dieses "false" ist, gibt es "false" zurück
}
linkupExerciseHandler("[data-click=aufgabe20]", aufgabe20)

export function aufgabe21(args) {
  const input = args
  const result = []

  //Kehre die Eingabe um
  for (let i = input.length - 1; i >= 0; i--) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe21]", aufgabe21)

export function aufgabe22(args) {
  const input = args
  const result = []

  for (const currentElement of args) {
    if (currentElement === "") {
      result.push("_") // Ersetze jedes Zeichen durch "_"
    } else if (currentElement === "") {
      // do nothing
    } else {
      result.push(currentElement) //Behalte alle anderen Eingaben bei
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe22]", aufgabe22)

export function aufgabe23(args) {
  const input = args
  const result = [] //Leere Liste, in der wir das Resultat anhängen
  const firstelement = input[0]

  // Hänge firstelement an die Liste an
  result.push(firstelement)

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }

  result.push(firstelement) //Schreibe das erste Zeichen am Ende

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe23]", aufgabe23)

export function aufgabe24(args) {
  // Vertausche das erste und das letzte Zeichen
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(input[input.length - 1])
    } else if (i === input.length - 1) {
      result.push(input[0])
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe24]", aufgabe24)

export function aufgabe25(args) {
  const input = args
  const result = []
  //Lösche das Zeichen, welches in der Mitte des Textes steht

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === Math.floor(input.length / 2)) {
      //Die Methode Math.floor() rundet eine Zahl auf die nächste ganze Zahl
      // do nothing
    } else {
      result.push(currentElement)
    }
  }
  return result.join("")
}
linkupExerciseHandler("[data-click=aufgabe25]", aufgabe25)

export function aufgabe26(args) {
  const input = args
  const result = []
  // Vergleiche und vertausche das erste und das zweite Zeichen
  const firstelement = input[0]
  const secondelement = input[1]

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i === 0) {
      result.push(secondelement)
    } else if (i === 1) {
      result.push(firstelement)
    } else {
      result.push(currentElement)
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=aufgabe26]", aufgabe26)

export function aufgabe27(args) {
  const input = args
  const result = []
  // Teste ob die Eingabe eine Zahl ist

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii >= 48 && ascii <= 57) {
      // Wenn es zwischen 48 und 57 ist, ist es eine Zahl, wenn nicht, ist es keine Zahl
      // do nothing
    } else {
      return false
    }
  }

  return true
}
linkupExerciseHandler("[data-click=aufgabe27]", aufgabe27)

export function aufgabe28(args) {
  const input = args.split(" ") // Teilt die Eingabe am Leerzeichen

  // Prüft, ob es genau 2 Teile gibt
  if (input.length === 2) {
    // Wenn beide Teile Zahlen sind, wird die Summe berechnet und zurückgegeben
    if (+input[0] == input[0] && +input[1] == input[1]) {
      return +input[0] + +input[1] // Gibt die Summe der beiden Zahlen zurück
    }
  }

  return "Fehler"
}

linkupExerciseHandler("[data-click=aufgabe28]", aufgabe28)

export function EigeneAufgabe1(args) {
  const input = args
  const result = []

  for (const currentElement of input) {
    // Alternative Schreibweise für das for (let i = 0; i < input.length; i++)

    if (currentElement === "u") {
      result.push(":)") // Ersetze "u" durch ":)"
    } else if (currentElement === "") {
      // do nothing
    } else {
      result.push(currentElement) //Behalte alle anderen Eingaben bei
    }
  }

  return result.join("")
}

linkupExerciseHandler("[data-click=EigeneAufgabe1]", EigeneAufgabe1)

export function EigeneAufgabe2(args) {
  const input = args
  const result = []
  let hasS = false // Zuerst sagen, dass es nicht stimmt, dann prüfen, ob es stimmt oder nicht
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (ascii === 115) {
      // Wenn es 115 ist, stimmt es. Dann ist es "true"
      hasS = true // Ist 115 dehsalb "true"
    }
  }
  return hasS // Hat kein S im Text deshalb gibt es "false" zurück
}
linkupExerciseHandler("[data-click=EigeneAufgabe2]", EigeneAufgabe2)

export function EigeneAufgabe3(args) {
  const input = args
  const result = []
  // Übersetze den Text in den Ascii code und rechne + 4

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    const code = ascii + 4 // Man macht eine neue Variable
    const letter = String.fromCharCode(code)
    result.push(letter) // Man rechnet + 4, damit nachher ein anderer Buchtsabe heraus kommt
  }

  return result.join("")
}
linkupExerciseHandler("[data-click=EigeneAufgabe3]", EigeneAufgabe3)

export function EigeneAufgabe4(args) {
  const input = args
  const result = []
  // Erkenne das Wort Serayna

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "S") {
      // Wenn es ein "S" ist, gehe weiter und prüfe, ob es "e", "r" , "a" , "y", "n" und "a" gibt
      if (input[i + 1] === "e") {
        if (input[i + 2] === "r") {
          if (input[i + 3] === "a") {
            if (input[i + 4] === "y") {
              if (input[i + 5] === "n") {
                if (input[i + 6] === "a") {
                  return true
                }
              }
            }
          }
        }
      }
    }
  }

  return false // Wenn es nicht erkannt wurde bis hier, wird "false" zurückgegeben
}
linkupExerciseHandler("[data-click=EigeneAufgabe4]", EigeneAufgabe4)

export function Bubblesort(args) {
  const text = args
  const list = text.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i + 1]
    if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i + 1]
      list[i + 1] = list[i]
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return result
}
linkupExerciseHandler("[data-click=Bubblesort]", Bubblesort)

export function Selectionsort(args) {
  const input = args.split("")
  const result = []

  let n = input.length
  for (let i = 0; i < n - 1; i++) {
    // Assume the current position holds
    // the minimum element
    let min_idx = i // Neue Variable erstellt

    // Iterate through the unsorted portion
    // to find the actual minimum
    for (let j = i + 1; j < n; j++) {
      if (input[j] < input[min_idx]) {
        // Update min_idx if a smaller element is found
        min_idx = j
      }
    }

    // Move minimum element to its
    // correct position
    let temp = input[i]
    input[i] = input[min_idx]
    input[min_idx] = temp
  }

  return input // Gibt "Input" zurück
}
linkupExerciseHandler("[data-click=Selectionsort]", Selectionsort)

export function Bucketsort(args) {
  const text = args
  const list = text.split("") // Wandelt den Text in eine Liste um

  // 256 Buckets für alle ASCII-Zeichen (von 0 bis 255)
  let buckets = new Array(256).fill().map(() => []) // Erstellt ein Array mit 256 leeren Arrays // .fill wird verwendet um die Arrays zu füllen

  // Elemente in die Buckets verteilen
  for (let i = 0; i < list.length; i++) {
    let index = list[i].charCodeAt(0) // Die ASCII-Werte der Zeichen
    buckets[index].push(list[i])
  }

  // Eimer sortieren und zusammenführen
  return buckets
    .map((bucket) => bucket.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))) // Sortiere jedes Bucket
    .flat() // Alle sortierten Buckets werden flach zusammengeführt
    .join("") // Als String zusammenfügen
}

linkupExerciseHandler("[data-click=Bucketsort]", Bucketsort)
