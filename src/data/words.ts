// Palabras españolas comunes, sin tildes ni ñ para que sean fáciles de teclear en cualquier teclado.
const raw = `
abeja abrigo abuelo aceite acero actor agua aguila aire ajedrez alamo alba alfombra algodon alma altura amigo ancla andar angel anillo arbol arena armario arroz arte asado aula avion azucar
bahia balcon ballena banco barco barro bello besar bicho bola bolsa bosque botella brazo brisa bruma bueno burbuja caballo cabra cacao cafe caja calle cama camino campo canal canto capa carro casa cebolla cerca cereza cielo cima cinta circo ciudad clavo cobre cocina cohete colina cometa conejo copa coral corona cuadro cuerda cueva
danza datos dedo delfin dibujo disco dorado dragon dulce duna durazno
eclipse eco enano enigma escala escudo espejo estrella exito
fabula faro feliz fiesta flecha flor fuego fuente
galaxia gallo ganso garza gato gigante globo goma gorro grano grillo grua guante guitarra gusano
halcon harina helado hielo hierba hilo hoja hongo hormiga hotel huella huerto humo
idea iglesia imagen isla jabon jardin jarra jaula jirafa joven joya juego junco
kiwi lago lampara lana lapiz largo leche lejos lengua leon libro liebre limon linea lirio llama llave lluvia lobo luna lupa luz
madera magia mango mano manzana mapa marea mariposa martillo mesa metal miel mirar molino monte mono moneda mosca mundo muro museo musica
nado naranja nariz nave nido niebla nieve noche nube nuevo nuez
oasis ocaso oceano ojo ola olivo onda opera oreja oro oso otono oveja
pablo pais paja pajaro palabra palma pan panda papel parque pastel pato pecera pelota perla pez piano piedra pino pista pizarra planta plata playa pluma polvo pomelo puente puerta pulpo puma
queso quinto radio rama rana rayo raiz red regalo reloj remo rio roble robot roca rosa rueda ruido
sabana sabor sal salto sandia sello selva semilla sendero sierra silla sillon sol sombra sonido sopa suelo sueno
tabla taller tambor tarde taza techo tela tema tierra tigre tinta tio tiza tomate torre trigo tren trueno tucan tulipan
uva vaca valle vapor vela veloz ventana verano verde viento vino violin volcan vuelo
yate yema yunque zafiro zanahoria zapato zorro zumo
abril acero adios afuera ahora alegre alto ambar ancho antes aroma aspa atlas aurora avena
barba barca barra basto bebe bigote blanco bomba boton brillo broma bufanda burro
cable cacto cadena calor campana canoa carta cerro chispa cinco clase clima cofre colcha cuento cuna
dado dardo diez dinero drama ducha
elefante ensayo equipo esfera espada estanque
fruta fusil gafas gaviota gema genio gota grande grupo
hada hamaca hogar horno huevo
imperio jazmin jugo lecho letra lienzo lima linterna lomo lucero
maiz maleta manta marco mazo medalla melon meta mochila molde mural
nacar navio nevera noble nudo
ortiga oruga ostra palco paloma pared pavo peine pera pie pimiento
quimica rafaga rastro rebano reina rincon risa ruta
sabio sable sauce sirena soplo suave
tablero tablon tapiz tejado tesoro tiempo timon trampa trineo trote tunel
urna util vagon vals vaso vela vidrio viaje vidrio
yoga zarza zona
`;

export const WORDS: string[] = [
    ...new Set(
        raw
            .split(/\s+/)
            .filter((w) => /^[a-z]{3,9}$/.test(w)),
    ),
];
