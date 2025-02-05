import { useState } from "react"; 
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";

export default function RegistrationScreen() {
    // Estado para almacenar el nombre y la edad del usuario
    const [usuario, setUsuario] = useState({
        nombre: '',
        edad: '',
    });

    // Función para manejar el cambio en los campos del formulario (nombre y edad)
    const manejarCambio = (campo: string, valor: string) => {
        setUsuario((prevState) => ({
            ...prevState,
            [campo]: valor,
        }));
    };

    // Función para mostrar el mensaje con el nombre y la edad
    const mostrarMensaje = () => {
        // Convertimos la edad a número (parseo)
        const edadNumerica = parseInt(usuario.edad);
    
        // Validación de la edad: si está vacía o no es un número, muestra un error
        if (usuario.edad === '' || isNaN(edadNumerica) || edadNumerica <= 0) {
            Alert.alert('Error', 'La edad debe ser un número válido y mayor que 0');
            return;
        }
    
        // Si la edad es válida, muestra un mensaje con el nombre y la edad
        Alert.alert('Mensaje', `"Hola, ${usuario.nombre}. Tienes ${usuario.edad} años."`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulario de Registro</Text>

            {/* Campo para el nombre */}
            <Text style={styles.label}>Nombre: </Text>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu nombre"
                value={usuario.nombre}
                onChangeText={(texto) => manejarCambio('nombre', texto)}
            />

            {/* Campo para la edad */}
            <Text style={styles.label}>Edad: </Text>
            <TextInput
                style={styles.input}
                placeholder="Escribe tu edad"
                keyboardType="numeric"
                value={usuario.edad}
                onChangeText={(texto) => manejarCambio('edad', texto)}
            />

            {/* Botón para mostrar el mensaje */}
            <Button title="Mostrar mensaje" onPress={mostrarMensaje} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  // Centra el contenido en la pantalla
        padding: 20,  // Añade un poco de espacio alrededor
        backgroundColor: '#f4f4f4',  // Color de fondo suave para la pantalla
    },
    titulo: {
        fontSize: 24,  // Tamaño grande para el título
        fontWeight: 'bold',  // Negrita para destacar el título
        marginBottom: 20,  // Espacio debajo del título
        textAlign: 'center',  // Centrado del texto
        color: '#333',  // Color oscuro para el título
    },
    label: {
        fontSize: 18,  // Tamaño de fuente adecuado para etiquetas
        marginBottom: 5,  // Espacio debajo de las etiquetas
        color: '#333',  // Color de texto para las etiquetas
    },
    input: {
        height: 45,  // Aumenta la altura de los campos para mayor comodidad
        borderWidth: 1,
        borderColor: '#ccc',  // Borde gris claro
        borderRadius: 8,  // Bordes redondeados para un estilo más suave
        paddingHorizontal: 15,  // Espaciado dentro del campo de texto
        marginBottom: 20,  // Espacio debajo de cada campo
        backgroundColor: '#fff',  // Fondo blanco para los campos de texto
    },
});
