# Projekttitel

Dies ist ein Projektbeschrieb.

## Kompiliere Distribution
Um das die "dist" CSS-Dateien zu generieren:
```
grunt dist
```
Hier wird eine Compressed Version inkl. Prefixes erstellt.


## Development-Modus
Um die SASS Dateien zu überwachen:
```
grunt
```
Dies generiert einmal die CSS Styles im Expanded-Style. Die Prefixes werden nicht generiert.

Um die Prefixes zu generieren:
```
grunt postcss:dist
```

# Shizzle

```css
.btn {
	display: flex;
}
```

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```