// conocimiento.js

const corpus = [
{
id: "doc1_chunk1",
title: "Introducción al estudio de Elohim como Padre",
keywords: ["Elohim", "Padre", "Antiguo Testamento", "Dios", "estudio bíblico"],
text: "El estudio comienza con la pregunta sobre si hay mención del Padre en el Antiguo Testamento, analizando versículos como Mateo 23:9 que dice: 'Y no llaméis Padre vuestro a nadie en la tierra; porque Uno es vuestro Padre, el que está en los cielos'."
},
{
id: "doc1_chunk2",
title: "Dios como Padre en el Antiguo Testamento",
keywords: ["Padre", "Antiguo Testamento", "Malaquías", "Isaías", "Deuteronomio"],
text: "Malaquías 2:10 pregunta: '¿No tenemos todos un mismo Padre? ¿No nos ha creado un mismo Dios?'. Isaías 64:8 afirma: 'Ahora pues, Jehová, tú eres nuestro Padre; nosotros barro, y tú el que nos formaste'. Isaías 63:16 declara: 'Pero tú eres nuestro Padre... nuestro Redentor perpetuo es tu nombre'. Deuteronomio 32:6 pregunta: '¿Así pagáis a Jehová, pueblo loco e ignorante? ¿No es él tu Padre que te creó? Él te hizo y te estableció'."
},
{
id: "doc1_chunk3",
title: "Dios como Padre en el Nuevo Testamento",
keywords: ["Padre", "Nuevo Testamento", "Mateo", "Corintios", "Gálatas"],
text: "Mateo 6:9 establece el modelo de oración: 'Padre nuestro que estás en los cielos, santificado sea tu nombre'. 1 Corintios 1:3 dice: 'Gracia y paz a vosotros, de Dios nuestro Padre y del Señor, Jesucristo'. Este patrón se repite en múltiples epístolas: 2 Corintios 1:2-3, Gálatas 1:1-4, Efesios 1:3, Filipenses 1:1-2, Colosenses 1:1-2, 1 Tesalonicenses 1:1, 2 Tesalonicenses 1:1-2, y 1 Timoteo 1:1-2."
},
{
id: "doc1_chunk4",
title: "Frases reiterativas en el Nuevo Testamento",
keywords: ["Dios nuestro Padre", "Señor Jesucristo", "fórmulas bíblicas", "epístolas"],
text: "Las frases más reiterativas en los textos del Nuevo Testamento son 'Dios el Padre' y 'Señor Jesucristo'. Estas expresiones aparecen consistentemente en los encabezados de la mayoría de los libros del Nuevo Testamento, estableciendo una clara distinción entre el Padre y el Hijo en la teología cristiana primitiva."
},
{
id: "doc1_chunk5",
title: "Atributos de Dios como el Padre",
keywords: ["Dios Padre", "inmortal", "invisible", "único", "atributos divinos"],
text: "1 Timoteo 1:17 describe a Dios como 'el Rey de los siglos, inmortal, invisible, al único y sabio Dios'. 1 Timoteo 6:16 añade que es 'el único que tiene inmortalidad, que habita en luz inaccesible; a quien ninguno de los hombres ha visto ni puede ver'. Juan 1:18 afirma: 'A Dios nadie le vio jamás; el Unigénito Hijo, que está en el seno del Padre, él le ha dado a conocer'."
},
{
id: "doc1_chunk6",
title: "La inmortalidad de Jesús según las Escrituras",
keywords: ["Jesús", "vida en sí mismo", "inmortalidad", "Juan 5:26", "Juan 10:17-18"],
text: "Juan 5:26 declara: 'Porque como el Padre tiene vida en sí mismo, así también ha dado al Hijo el tener vida en sí mismo'. Juan 10:17-18 muestra que Jesús tiene autoridad sobre su vida: 'Nadie me la quita, sino que yo la pongo de mí mismo. Tengo poder para ponerla, y tengo poder para volverla a tomar'."
},
{
id: "doc1_chunk7",
title: "Testimonio de Jesús sobre el único Dios verdadero",
keywords: ["Jesús", "Juan 17:3", "único Dios verdadero", "testimonio"],
text: "En Juan 17:1-3, Jesús ora: 'Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado'. En Juan 20:17, después de resucitar, Jesús dice: 'Subo a mi Padre y a vuestro Padre, a mi Dios y a vuestro Dios'. En Apocalipsis 3:12, Jesús se refiere a 'mi Dios'."
},
{
id: "doc1_chunk8",
title: "Testimonios bíblicos sobre la unicidad de Dios",
keywords: ["unicidad de Dios", "Deuteronomio 6:4", "Marcos 12:29", "Shema"],
text: "Deuteronomio 6:4 establece: 'Oye, Israel: Jehová nuestro Dios, Jehová uno es'. En Marcos 12:28-30,32, Jesús cita este versículo como el primer mandamiento, y el escriba reconoce: 'Bien, Maestro, verdad has dicho, que uno es Dios, y no hay otro fuera de él'. Juan 5:44 menciona 'la gloria que viene del Dios Único'."
},
{
id: "doc1_chunk9",
title: "Creencia en la unicidad de Elohim",
keywords: ["Santiago 2:19", "unicidad", "Elohim", "demonios"],
text: "Santiago 2:19 afirma: 'Tú crees que Dios es uno; bien haces. También los demonios creen, y tiemblan'. Este versículo reconoce que la creencia en la unicidad de Dios es fundamental, incluso siendo compartida por los demonios, aunque sin producir salvación sin la fe operante en amor."
},
{
id: "doc1_chunk10",
title: "Testimonio del Padre Eterno sobre su unicidad",
keywords: ["Deuteronomio 32:39", "1 Crónicas 16:36", "unicidad divina", "Dios único"],
text: "Deuteronomio 32:39 registra: 'Ved ahora que yo, yo soy, y no hay dioses conmigo; yo hago morir, y yo hago vivir; yo hiero, y yo sano; y no hay quien pueda librar de mi mano'. 1 Crónicas 16:36 declara: 'Bendito sea Jehová, el Dios de Israel, de eternidad a eternidad'."
},
{
id: "doc1_chunk11",
title: "Conclusión bíblica sobre la unicidad de Dios",
keywords: ["1 Corintios 8:4-6", "Efesios 4:4-6", "1 Timoteo 2:5", "un solo Dios"],
text: "1 Corintios 8:4-6 establece: 'sólo hay un Dios... un solo Dios, el Padre, en quien todo tiene su origen... y un solo Señor, Jesucristo'. Efesios 4:4-6 afirma: 'Un Solo Dios y Padre de todos, que está sobre todos, por todos y en todos'. 1 Timoteo 2:5 declara: 'Porque hay Un Solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre'."
},
{
id: "doc1_chunk12",
title: "Conclusión final del estudio sobre Elohim",
keywords: ["conclusión", "único Dios", "Padre", "Señor Jesús", "Isaías 57:15"],
text: "La Biblia enseña claramente que hay un Solo Dios, el Padre, y un Solo Señor, Jesús. Como se cita en Isaías 57:15: 'Porque así dijo el Alto y Sublime, el que habita la eternidad, y cuyo nombre es el Santo: Yo habito en la altura y la santidad, y con el quebrantado y humilde de espíritu, para hacer vivir el espíritu de los humildes, y para vivificar el corazón de los quebrantados'."
}
];


// Hacer corpus disponible globalmente
window.corpus = corpus;

console.log('Corpus cargado con', corpus.length, 'documentos');
