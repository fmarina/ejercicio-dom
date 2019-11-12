# Ejercicio mi clase de DWFS.
### Creando y conectando los documentos de js y html.
**Asumimos que no es necesario repasar como debemos incluir el js a nuestro documento**

### Creando el contenido
1. Debemos crear una lista para guardar los nombres de los mentores y los alumnos.
¿Será la misma lista para ambos? ¿Debemos utilizar distintas listas?
2. Debemos seleccionar el elemento del DOM que contendrá todo el contenido de la página. ¿Cuál es?
### Creando y añadiendo nuestros elementos al DOM
1. Cada lista de Mentores/Tutores y Alumnos, debe estar encerrada en un DIV.
. Dentro de cada div, debe haber una lista. Que contendrá tantos *li* como mentores/tutores, o alumnos haya.
- **Cómo podemos hacer para recorrer la lista?**
- **Qué método/s podemos usar para crear elementos del dom? y para añadir texto?**
3. Dentro de cada div, debe haber un encabezado que tenga el texto correspondiente: Mentores y Tutores o Alumnos, según corresponda.
4. Añadimos los elementos al DOM.
- **Qué método/s podemos usar para añadir elementos al dom?**
- **Podemos añadir un elemento antes o después que otro? y si quiero que sea el primero?**
- **Tenemos que escribir 100 veces estos métodos? o podríamos crear una función?**
### Arreglos, perdón me olvide unas cosas.
1. En los divs que creamos, tenemos que agregarles el atributo ID, para poder agregarlo sería buena idea investigar un poco sobre atributos. Busquen en mdn la propiedad **Element.id**. Luego le agregan a cada div su atributo correspondiente: mentores en el primer caso, y alumnos en el segundo.
2. También hay que añadir la clase lista a cada una de las listas! Podrían buscar en MDN las propiedades **Element.className** y **Element.classList**.
Después que vean las dos, agreguen la clase "lista" a las listas.
3. Por último, me olvidé también de agregar en la lista de mentores, si es un mentor o tutor! 
- Tendrían que volver a seleccionar todos los li del div #mentores, sería mejor con querySelectorAll, no?
- Después recorrerlo de alguna forma.
- Por cada uno deben crear una etiqueta **'span'**, que tiene que tener la clase *text-bold*.
- Y verificar si la propiedad textContent es igual a Valentina, y en ese caso, el textContent del span tiene que ser *'Tutora: '*, y en el resto de los casos *'Mentor: '*.
- Después que está creado hay que añadirselo al comienzo del elemento, tiene que quedar: **Mentor:** Iván.
- Otra cosa, habrá algún método para ordenar las listas, y que salgan en orden alfabético? creo que el método era **sort()**, por ahí mdn tiene más información al respecto.